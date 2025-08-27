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

// plugins/blog-plugin.js
const blogPluginExports = require('@docusaurus/plugin-content-blog');
const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginEnhancer(context, options) {
  const blogPluginInstance = await defaultBlogPlugin(context, options);

  return {
    ...blogPluginInstance,
    async contentLoaded({ content, actions }) {
      // Run the default contentLoaded function
      await blogPluginInstance.contentLoaded({ content, actions });

      // Create our enhanced JSON with full metadata
      const { blogPosts } = content;
      const { createData } = actions;

      // Filter out unlisted posts in production
      const publishedPosts = blogPosts.filter(post => !post.metadata.unlisted);

      // Create enhanced metadata for each post
      const postsWithFullMetadata = publishedPosts.map(post => ({
        title: post.metadata.title,
        permalink: post.metadata.permalink,
        date: post.metadata.date,
        formattedDate: post.metadata.formattedDate,
        description: post.metadata.description,
        image: post.metadata.frontMatter.image || null,
        tags: post.metadata.tags || [],
        authors: post.metadata.authors || [],
        readingTime: post.metadata.readingTime,
        frontMatter: post.metadata.frontMatter,
        unlisted: post.metadata.unlisted || false,
        hasTruncateMarker: post.metadata.hasTruncateMarker,
        excerpt: post.metadata.excerpt
      }));

      // Create the enhanced JSON file
      await createData(
        'blog-posts-full-metadata.json',
        JSON.stringify({
          title: 'Blog posts with full metadata',
          items: postsWithFullMetadata
        }, null, 2)
      );
    }
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginEnhancer
};