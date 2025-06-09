// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();
import { themes as prismThemes } from "prism-react-renderer";
// const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = prismThemes.dracula;

const algoliaConfig = process.env.ALGOLIA_APP_ID? {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: "a3137b74255be90430cc58305fe4e179", // Public API key: it is safe to commit it
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: false, // If new versions of the docs are added this needs to be configured
        searchPagePath: false
      } : undefined;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Midnight Docs",
  tagline: "Midnight Dust is cool",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true
  },
  themes: ["@docusaurus/theme-mermaid"],
  // Set the production url of your site here
  url: "https://docs.midnight.network",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  //TODO - UPDATE
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    [
      "docusaurus-pushfeedback",
      {
        project: process.env.PUSHFEEDBACK_PROJECT_ID,
        buttonStyle: "dark"
      }
    ]
  ],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  customFields: {
    // recaptchaSiteKey: "6LeyQzUnAAAAAG6qu-UkP4BiPJSPUWIBGlQ1Iyin",
    posthogApiKey: process.env.POSTHOG_API_KEY,
    posthogApiHost: process.env.POSTHOG_API_HOST,
    posthogProjectId: process.env.POSTHOG_PROJECT_ID
  },

  scripts: [
    {
      src: "/add-theme-class.js",
      async: true
    },
    {
      src: "/theme-sync.js",
      async: true
    },
    {
      src: "/force-theme.js",
      async: true
    },
    {
      // GDPR
      src: "https://cmp.osano.com/AzZXI3TYiFWNB5yus/1489a4c7-fc85-49c4-99a3-1367c5a5ba96/osano.js",
      async: false
    }
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml'
        },
        gtag: process.env.GOOGLE_TAG_MANAGER_ID
          ? {
              trackingID: process.env.GOOGLE_TAG_MANAGER_ID
            }
          : undefined,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/"
          // breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          blogTitle: 'Dev Diaries',
          blogDescription: 'Updates, insights, and dev news from Midnight.',
          showReadingTime: true,
          routeBasePath: 'blog'
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/osano.css")
          ]
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/og-image.png",
      announcementBar: {
        id: "testnet-outage",
        content:
          "As we transition to Public Testnet-02, you may experience temporary disruptions. These issues are expected and will be resolved shortly.",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust as needed for your site's theme
        textColor: "#FFFFFF", // Ensure readability
        isCloseable: true // Allow users to close the banner
      },
      navbar: {
        logo: {
          alt: "Midnight Logo",
          src: "img/midnight-header-logo-light.svg",
          srcDark: "img/midnight-header-logo-dark.svg",
          href: "https://midnight.network"
        },
        items: [
          {
            to: '/blog',
            label: 'Dev Diaries',
            position: 'left'
          }
        ]
      },
      footer: {
        logo: {
          alt: "Midnight Logo",
          src: "img/midnight-header-logo-dark.svg",
          width: 235,
          height: 50
        },
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Input Output Global",
                href: "https://iohk.io/"
              },
              {
                label: "Careers",
                href: "https://apply.workable.com/io-global/#jobs"
              }
            ]
          },
          {
            title: "Legal",
            items: [
              {
                label: "Cookie Policy",
                href: "https://midnight.network/static/cookie-policy.pdf"
              },
              {
                label: "Privacy Policy",
                href: "https://midnight.network/static/privacy-policy.pdf"
              },
              {
                label: "Terms of Use Public Devnet",
                to: "/legal/public-devnet-toc"
              },
              {
                label: "Terms of Use Testnet",
                to: "/legal/public-testnet-toc"
              }
            ]
          },
          {
            title: "Social",
            items: [
              {
                html: `<a href="https://www.youtube.com/channel/UCy3oZ64F3FOtjZ5sZGQNgkA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
						<img src="/img/youtube.svg" alt="YouTube" />
					</a>`
              },
              {
                html: `<a href="https://x.com/MidnightNtwrk" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
						<img src="/img/x.svg" alt="X/Twitter" />
					</a>`
              },
              {
                html: `<a href="https://discord.com/invite/midnightnetwork" target="_blank" rel="noopener noreferrer" aria-label="Discord">
						<img src="/img/discord.svg" alt="Discord" />
					</a>`
              },
              {
                html: `<a href="https://www.linkedin.com/showcase/midnight-ntwrk/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
						<img src="/img/linkedin.svg" alt="LinkedIn" />
					</a>`
              }
            ]
          }
        ],
        copyright: `© ${new Date().getFullYear()} Input Output Global, Inc. All Rights Reserved.`
      },
      colorMode: {
        defaultMode: "dark"
      },
      docs: {
        sidebar: {
          hideable: true
        }
      },

      prism: {
        theme: darkCodeTheme,
        additionalLanguages: ["bash", "nix", "json", "json5", "yaml"]
      },
      algolia: algoliaConfig
    })
};

module.exports = config;
