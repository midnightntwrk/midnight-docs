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