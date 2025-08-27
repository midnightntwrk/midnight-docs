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
const { JSDOM } = require('jsdom');
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

// Collection schema
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

function extractContent(html) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Remove script and style elements, plus navigation
  const elementsToRemove = document.querySelectorAll('script, style, nav, footer, .navbar, .menu, .breadcrumbs, .pagination, .edit-page, .theme-doc-toc-desktop');
  elementsToRemove.forEach(el => el.remove());

  // Try to get main content area first - use more specific selectors for Docusaurus
  let contentEl =
    document.querySelector('[role="main"] .markdown') ||
    document.querySelector('main .markdown') ||
    document.querySelector('article .markdown') ||
    document.querySelector('.theme-doc-markdown') ||
    document.querySelector('[class*="docMainContainer"]') ||
    document.querySelector('[class*="docItemContainer"]') ||
    document.querySelector('article') ||
    document.querySelector('main') ||
    document.querySelector('.markdown') ||
    document.querySelector('[role="main"]') ||
    document.body;

  if (!contentEl) {
    return '';
  }

  const textContent = contentEl.textContent || '';

  // Clean up the content
  let cleanContent = textContent
    .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .replace(/\t+/g, ' ') // Replace tabs with spaces
    .trim();

  // If content is too short, try looking for JSON-LD or meta content
  if (cleanContent.length < 50) {
    // Look for meta description
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
    if (metaDesc) {
      cleanContent += ' ' + metaDesc;
    }

    // Look for title tag content
    const titleContent = document.querySelector('title')?.textContent;
    if (titleContent) {
      cleanContent += ' ' + titleContent;
    }
  }

  return cleanContent.trim();
}

function parseHTMLFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Try multiple ways to get title - more aggressive
  let title =
    document.querySelector('[data-rh="true"][property="og:title"]')?.getAttribute('content') ||
    document.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
    document.querySelector('meta[name="title"]')?.getAttribute('content') ||
    document.querySelector('article h1')?.textContent?.trim() ||
    document.querySelector('main h1')?.textContent?.trim() ||
    document.querySelector('.markdown h1')?.textContent?.trim() ||
    document.querySelector('h1')?.textContent?.trim() ||
    document.querySelector('title')?.textContent?.trim()?.replace(' | Midnight Docs', '') ||
    path.basename(filePath, '.html').replace(/[-_]/g, ' ');

  // Clean title
  title = title?.replace('| Midnight Docs', '').trim() || 'Untitled';

  const content = extractContent(html);

  // Build URL from file path
  const relativePath = filePath
    .replace(path.join(process.cwd(), 'build'), '')
    .replace(/\\/g, '/')
    .replace('/index.html', '/')
    .replace('.html', '');

  let url = (process.env.SITE_URL || 'https://docs.midnight.network') + relativePath;
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  if (url === (process.env.SITE_URL || 'https://docs.midnight.network')) {
    url = (process.env.SITE_URL || 'https://docs.midnight.network') + '/';
  }

  // Extract hierarchy from headings with more selectors
  const h1 = document.querySelector('article h1, main h1, .markdown h1, h1')?.textContent?.trim() || title;
  const h2 = document.querySelector('article h2, main h2, .markdown h2, h2')?.textContent?.trim() || '';
  const h3 = document.querySelector('article h3, main h3, .markdown h3, h3')?.textContent?.trim() || '';

  // Enhance content with meta information if content is sparse
  let enhancedContent = content;
  if (content.length < 100) {
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const metaKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
    enhancedContent = [content, metaDesc, metaKeywords, title].join(' ').trim();
  }

  return {
    title,
    content: enhancedContent.substring(0, 8000), // Limit content length
    url,
    hierarchy_lvl0: h1,
    hierarchy_lvl1: h2,
    hierarchy_lvl2: h3,
    type: 'content',
    objectID: url
  };
}

function getAllHTMLFiles(dir, files = []) {
  const dirFiles = fs.readdirSync(dir);

  dirFiles.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllHTMLFiles(filePath, files);
    } else if (file.endsWith('.html') && !file.includes('404') && !file.includes('search')) {
      files.push(filePath);
    }
  });

  return files;
}

async function indexDocuments() {
  const buildDir = path.join(process.cwd(), 'build');

  if (!fs.existsSync(buildDir)) {
    console.error('❌ Build directory not found. Please run "npm run build" first.');
    return;
  }

  const htmlFiles = getAllHTMLFiles(buildDir);
  console.log(`📄 Found ${htmlFiles.length} HTML files to index`);

  const documents = [];

  htmlFiles.forEach(file => {
    try {
      const doc = parseHTMLFile(file);

      // Much more lenient filtering for client-side rendered sites
      const hasTitle = doc.title && doc.title.trim() && doc.title !== 'Untitled';
      const hasContent = doc.content && doc.content.trim().length > 20; // Very lenient
      const isNotErrorPage = !doc.url.includes('404') && !doc.url.includes('search');
      const isIndexPage = path.basename(file) === 'index.html';

      // Be more lenient with index pages - they might have minimal content but still be important
      const shouldIndex = (hasTitle && hasContent && isNotErrorPage) ||
                          (isIndexPage && hasTitle && doc.content.length > 10);

      if (shouldIndex) {
        documents.push(doc);
        console.log(`📑 Adding: ${doc.title} (${doc.url})`);
      } else {
        // More detailed debug for rejected files
        const fileName = path.relative(process.cwd(), file);
        console.log(`❌ Skipping ${fileName}:`);
        if (!hasTitle) console.log(`   - No title (got: "${doc.title}")`);
        if (!hasContent) console.log(`   - No content (length: ${doc.content?.length || 0})`);
        if (!isNotErrorPage) console.log(`   - Error/search page`);

        // Show a sample of what content we did find (if any)
        if (doc.content && doc.content.length > 0) {
          console.log(`   - Sample content: "${doc.content.substring(0, 100)}..."`);
        }
      }
    } catch (error) {
      console.error(`❌ Error parsing ${file}:`, error.message);
    }
  });

  console.log(`🔄 Indexing ${documents.length} documents...`);

  if (documents.length === 0) {
    console.error('❌ No documents to index. Check your build directory.');
    return;
  }

  // Index documents in batches
  const batchSize = 40;
  for (let i = 0; i < documents.length; i += batchSize) {
    const batch = documents.slice(i, i + batchSize);
    try {
      const result = await client.collections(collectionName).documents().import(batch);
      console.log(`✅ Indexed batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(documents.length / batchSize)}`);
    } catch (error) {
      console.error('❌ Error indexing batch:', error);
    }
  }

  console.log('🎉 Indexing completed successfully!');
  console.log(`🔍 Try searching for terms like: "${documents[0]?.title || 'test'}"`);
}

async function main() {
  try {
    console.log('🚀 Starting Typesense indexing...');
    console.log('🔗 Connecting to Typesense...');
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