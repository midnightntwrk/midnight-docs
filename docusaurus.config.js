// This file is part of midnight-docs.
// SPDX-License-Identifier: Apache-2.0

// @ts-check
require("dotenv").config();

const { themes: prismThemes } = require("prism-react-renderer");
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Midnight Docs",
  tagline: "Midnight DUST is cool",
  favicon: "img/favicon.ico",

  markdown: { mermaid: true },
  themes: [
    "@docusaurus/theme-mermaid",
  ],

  url: "https://docs.midnight.network",
  baseUrl: "/",
  trailingSlash: false,

  organizationName: "midnightntwrk",
  projectName: "midnight-docs",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    // MAIN DOCS
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "main",
        path: "docs",
        routeBasePath: "/",
        versions: {
          current: {
            label: "Canary 🚧",
          },
          "0.0.0": {
            label: "v0.0.0",
          },
        },
        sidebarPath: require.resolve("./sidebars.main.js"),
        editUrl: "https://github.com/midnightntwrk/midnight-docs/edit/main/",
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
      },
    ],

    // COMPACT DOCS
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "compact",
        path: "compact",
        routeBasePath: "compact",
        sidebarPath: require.resolve("./sidebars.compact.js"),
        editUrl: "https://github.com/midnightntwrk/midnight-docs/edit/main/",
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
      },
    ],

    // ACADEMY DOCS
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "academy",
        path: "academy",
        routeBasePath: "academy",
        sidebarPath: require.resolve("./sidebars.academy.js"),
        editUrl: "https://github.com/midnightntwrk/midnight-docs/edit/main/",
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
      },
    ],

    // BLOG
    [
      "./plugins/blog-plugin.js",
      {
        id: "default",
        blogTitle: "Dev Diaries",
        blogDescription: "Updates, insights, and dev news from Midnight.",
        showReadingTime: true,
        routeBasePath: "blog",
        path: "./blog",
        blogListComponent: require.resolve("./src/components/BlogIndex/index.js"),
        blogPostComponent: "@theme/BlogPostPage",
        blogTagsListComponent: "@theme/BlogTagsListPage",
        blogTagsPostsComponent: "@theme/BlogTagsPostsPage",
        postsPerPage: "ALL",
        blogSidebarTitle: "All posts",
        blogSidebarCount: "ALL",
        onInlineAuthors: "ignore",
        onUntruncatedBlogPosts: "ignore",
      },
    ],

    // CLIENT REDIRECTS
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: [
              '/academy', 
              '/academy/module-1', 
              '/academy/module-2', 
              '/academy/module-3', 
              '/academy/module-4', 
              '/academy/module-5', 
              '/academy/module-6', 
              '/academy/module-7',
              '/academy/module-8',
            ],
            to: 'https://academy.midnight.network/',
          },
        ],
      },
    ],

    require.resolve("./plugins/webpack-yaml-loader"),
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  customFields: {
    posthogApiKey: process.env.POSTHOG_API_KEY,
    posthogApiHost: process.env.POSTHOG_API_HOST,
    posthogProjectId: process.env.POSTHOG_PROJECT_ID,

    // Typesense search-only API key (safe to expose in client)
    typesenseSearchApiKey: process.env.TYPESENSE_SEARCH_API_KEY,
    typesenseHost: process.env.TYPESENSE_HOST,
    typesenseCollectionName: process.env.TYPESENSE_COLLECTION_NAME || 'midnight-docs',

    githubEditBase: 'https://github.com/midnightntwrk/midnight-docs/edit/main/',
    githubRawBase:  'https://raw.githubusercontent.com/midnightntwrk/midnight-docs/main/',
  },

  scripts: [
  { src: "/add-theme-class.js", async: true },
  { src: "/theme-sync.js", async: true },
  { src: "/force-theme.js", async: true },
  {
    src: "https://cmp.osano.com/AzZXI3TYiFWNB5yus/1489a4c7-fc85-49c4-99a3-1367c5a5ba96/osano.js",
    async: false,
  },
  {
    src: "https://widget.kapa.ai/kapa-widget.bundle.js",
    "data-website-id": "54f87db5-cd75-47b9-8bcc-94cd1c5cc86f",
    "data-project-name": "Shielded",
    "data-project-color": "#000000",
    "data-project-logo":
      "https://pbs.twimg.com/profile_images/1707073625214582784/MsMpvtzV_200x200.jpg",
    "data-modal-z-index": "10000",
    "data-button-position-bottom": "120px",
    "data-button-position-right": "10px",
    "data-modal-override-open-id": "custom-ask-ai-button",
    "data-modal-title": "Need help with Midnight? Ask me anything!",
    async: true,
  },
],

  presets: [
    [
      "classic",
      {
        sitemap: { changefreq: "weekly", priority: 0.5, filename: "sitemap.xml" },
        gtag: process.env.GOOGLE_TAG_MANAGER_ID
          ? { trackingID: process.env.GOOGLE_TAG_MANAGER_ID }
          : undefined,
        docs: false, // we use standalone docs plugins
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/osano.css"),
          ],
        },
      },
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: "img/og-image.png",
    metadata: [
      { name: "algolia-site-verification", content: "71D46C846F83C714" },
    ],

    algolia: {
      appId: "Q7T3VYHX3K",
      apiKey: "cf362041369546fdffdf1894511fc0d5",
      indexName: "Midnight Docs",
      contextualSearch: true,
      searchPagePath: "search",
      searchParameters: {},
    },

    navbar: {
      logo: {
        alt: "Midnight Logo",
        src: "img/midnight-header-logo-light.svg",
        srcDark: "img/midnight-header-logo-dark.svg",
        href: "https://midnight.network",
      },
      items: [
        { to: "/",         label: "Docs",     position: "left",  activeBaseRegex: "^/$" },
        { to: "/compact",  label: "Compact",  position: "left",  activeBaseRegex: "^/compact(/|$)" },
        { to: "https://academy.midnight.network/",  label: "Academy",  position: "left" },
        { to: "/blog",     label: "Blog",     position: "left",  activeBaseRegex: "^/blog(/|$)" },
        {
          type: 'docsVersionDropdown',
          position: "right",
          docsPluginId: 'main',
        },
        {
          type: "html",
          position: "right",
          value:
            '<a href="/relnotes/overview" class="button button--primary">Release Notes</a>',
        },
        {
          type: "html",
          position: "right",
          value:
            '<button id="custom-ask-ai-button" class="button button--primary">AI search</button>',
        },
      ],
    },

    footer: {
      logo: {
        alt: "Midnight Logo",
        src: "img/midnight-header-logo-dark.svg",
        width: 235,
        height: 50,
      },
      links: [
        {
          title: "Resources",
          items: [
            { label: "Midnight Foundation", href: "https://midnight.network/" },
            { label: "Glacier Drop", href: "https://www.midnight.gd/" },
            { label: "Careers", href: "https://midnight.network/careers" },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Cookie Policy",
              href:
                "https://45047878.fs1.hubspotusercontent-na1.net/hubfs/45047878/Midnight%20Foundation%20cookie-policy.pdf",
            },
            {
              label: "Privacy Policy",
              href:
                "https://45047878.fs1.hubspotusercontent-na1.net/hubfs/45047878/Midnight%20Foundation%20%20-%20Privacy%20Notice.pdf",
            },
            {
              label: "Terms and Conditions",
              href:
                "https://45047878.fs1.hubspotusercontent-na1.net/hubfs/45047878/Midnight%20Foundation%20-%20Website%20Terms%20of%20Use.pdf",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              html: `<a href="https://www.youtube.com/channel/UCy3oZ64F3FOtjZ5sZGQNgkA" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><img src="/img/youtube.svg" alt="YouTube" /></a>`,
            },
            {
              html: `<a href="https://x.com/MidnightNtwrk" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter"><img src="/img/x.svg" alt="X/Twitter" /></a>`,
            },
            {
              html: `<a href="https://discord.com/invite/midnightnetwork" target="_blank" rel="noopener noreferrer" aria-label="Discord"><img src="/img/discord.svg" alt="Discord" /></a>`,
            },
            {
              html: `<a href="https://www.linkedin.com/showcase/midnight-ntwrk/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="/img/linkedin.svg" alt="LinkedIn" /></a>`,
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Input Output Global, Inc. All Rights Reserved.`,
    },

    colorMode: { defaultMode: "dark" },
    docs: { sidebar: { hideable: true } },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["bash", "nix", "json", "json5", "yaml"],
    },
  },
};

module.exports = config;
