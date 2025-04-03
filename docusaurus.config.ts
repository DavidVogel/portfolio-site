// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import type * as Redocusaurus from 'redocusaurus';

const config: Config = {
  title: 'David Vogel',
  tagline: 'Technical Writer, Software Engineer, & Musician',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://davidmvogel.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DavidVogel', // Usually your GitHub org/user name.
  projectName: 'portfolio-site', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-sass',
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            './src/css/custom.scss',
          ],
        },
        gtag: {
          trackingID: 'G-DREY265MGG',
        },
      } satisfies Preset.Options,
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            spec: 'openapi/swagger.json',
            // spec: 'openapi/swagger.yaml',
            route: '/api/',
          },
          // You can also pass it a OpenAPI spec URL
          // {
          //   spec: 'https://redocly.github.io/redoc/openapi.yaml',
          //   route: '/openapi/',
          // },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          // primaryColor: '#1890ff',
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    navbar: {
      items: [
        {
          label: 'Projects',
          type: 'dropdown',
          position: 'left',
          items: [
            {
              to: '/docs/Vital/UserGuide/Intro',
              label: 'Vital Synthesizer User Guide',
            },
            {
              to: '/docs/Vital/Vital-Code-Docs',
              label: 'Vital Synthesizer Code Docs',
            },
            {
              label: 'HarmonyHub API Docs',
              to: '/api',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'My Music',
          position: 'left',
          items: [
            {
              to: '/docs/My-Pieces/Twelve',
              label: 'Twelve Pieces for Piano (2024)',
            },
          ],
        },
        { to: '/blog', label: 'Blog', position: 'left' },

        {
          label: 'About',
          to: '/docs/About',
          position: 'left',
        },
        {
          href: 'https://github.com/DavidVogel',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} David Vogel`,
    },
    prism: {
      theme: prismThemes.github,
      // darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'YEN8XOQNJW',

      // Public API key: it is safe to commit it
      apiKey: '8cd724576e60f567aa0eb5e77f90955e',

      indexName: 'davidmvogel',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: true,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
