// This file is part of midnight-docs.
// Copyright (C) 2025 Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const Typesense = require('typesense');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
require('dotenv').config();

const client = new Typesense.Client({
  nodes: [{
    host: process.env.TYPESENSE_HOST,
    port: 443,
    protocol: 'https'
  }],
  apiKey: process.env.TYPESENSE_ADMIN_API_KEY,
  connectionTimeoutSeconds: 10
});

const collectionName = process.env.TYPESENSE_COLLECTION_NAME || 'midnight-docs';

const schema = {
  name: collectionName,
  fields: [
    { name: 'title', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'url', type: 'string' },
    { name: 'hierarchy_lvl0', type: 'string', facet: true, optional: true },
    { name: 'hierarchy_lvl1', type: 'string', facet: true, optional: true },
    { name: 'hierarchy_lvl2', type: 'string', facet: true, optional: true },
    { name: 'hierarchy_lvl3', type: 'string', facet: true, optional: true },
    { name: 'type', type: 'string', facet: true },
    { name: 'objectID', type: 'string' },
  ]
};

async function setupCollection() {
  try {
    await client.collections(collectionName).delete();
    console.log('✅ Deleted existing collection');
  } catch (error) {
    console.log('ℹ️  Collection does not exist, creating new one');
  }
  await client.collections().create(schema);
  console.log('✅ Collection created successfully');
}

function getAllMarkdownFiles(dir, files = []) {
  if (!fs.existsSync(dir)) {
    console.log(`📂 Directory ${dir} doesn't exist, skipping...`);
    return files;
  }

  const dirFiles = fs.readdirSync(dir);

  dirFiles.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      getAllMarkdownFiles(filePath, files);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      files.push(filePath);
    }
  });

  return files;
}

function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content: markdown } = matter(content);

  let title = frontmatter.title || frontmatter.sidebar_label || frontmatter.label || '';

  if (!title) {
    const firstHeading = markdown.match(/^#\s+(.+)$/m);
    title = firstHeading ? firstHeading[1] : path.basename(filePath, path.extname(filePath));
  }

  let cleanContent = markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  let relativePath = filePath
    .replace(process.cwd(), '')
    .replace(/\\/g, '/');

  if (relativePath.startsWith('/docs/')) {
    relativePath = relativePath.replace('/docs/', '/');
  } else if (relativePath.startsWith('/blog/')) {
    relativePath = relativePath.replace('/blog/', '/blog/');
  } else if (relativePath.startsWith('/src/pages/')) {
    relativePath = relativePath.replace('/src/pages/', '/');
  }

  relativePath = relativePath
    .replace(/\.mdx?$/, '')
    .replace(/\/index$/, '/');

  if (!relativePath.startsWith('/')) {
    relativePath = '/' + relativePath;
  }

  let url = (process.env.SITE_URL || 'https://docs.midnight.network') + relativePath;
  url = url.replace(/([^:]\/)\/+/g, '$1');

  const headings = markdown.match(/^#{1,3}\s+(.+)$/gm) || [];
  const h1 = headings.find(h => h.startsWith('# '))?.replace('# ', '') || title;
  const h2 = headings.find(h => h.startsWith('## '))?.replace('## ', '') || '';
  const h3 = headings.find(h => h.startsWith('### '))?.replace('### ', '') || '';

  return {
    title,
    content: cleanContent.substring(0, 8000),
    url,
    hierarchy_lvl0: h1,
    hierarchy_lvl1: h2,
    hierarchy_lvl2: h3,
    type: 'content',
    objectID: url
  };
}

async function indexDocuments() {
  const possibleDirs = ['docs', 'blog', 'src/pages', 'content', 'documentation'];
  let allMarkdownFiles = [];

  possibleDirs.forEach(dir => {
    console.log(`🔍 Searching in ${dir}/...`);
    const files = getAllMarkdownFiles(dir);
    console.log(`   Found ${files.length} files in ${dir}/`);
    allMarkdownFiles = allMarkdownFiles.concat(files);
  });

  console.log(`📄 Total: ${allMarkdownFiles.length} Markdown files to index`);

  if (allMarkdownFiles.length > 0) {
    console.log('📋 Sample files found:');
    allMarkdownFiles.slice(0, 5).forEach(file => {
      console.log(`   - ${file}`);
    });
  }

  const documents = [];

  allMarkdownFiles.forEach(file => {
    try {
      const doc = parseMarkdownFile(file);
      if (doc.title && doc.content.trim().length > 10) {
        documents.push(doc);
        console.log(`📑 Adding: ${doc.title} (${doc.url})`);
      } else {
        console.log(`❌ Skipping ${path.basename(file)}: No content`);
      }
    } catch (error) {
      console.error(`❌ Error parsing ${file}:`, error.message);
    }
  });

  console.log(`🔄 Indexing ${documents.length} documents...`);

  if (documents.length === 0) {
    console.error('❌ No documents to index.');
    return;
  }

  const batchSize = 40;
  for (let i = 0; i < documents.length; i += batchSize) {
    const batch = documents.slice(i, i + batchSize);
    try {
      await client.collections(collectionName).documents().import(batch);
      console.log(`✅ Indexed batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(documents.length / batchSize)}`);
    } catch (error) {
      console.error('❌ Error indexing batch:', error);
    }
  }

  console.log('🎉 Indexing completed successfully!');
  console.log(`🔍 Indexed ${documents.length} total documents`);
}

async function main() {
  try {
    console.log('🚀 Starting Markdown indexing...');
    await setupCollection();
    await indexDocuments();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
