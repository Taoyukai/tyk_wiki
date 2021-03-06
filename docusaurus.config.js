// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Taoyukai wiki',
  tagline: '有目标，沉住气，悄悄干',
  url: 'https://www.taoyukai.com',//'https://taoyukai.github.io/tyk_wiki',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tyk.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Taoyukai', // Usually your GitHub org/user name.
  projectName: 'tyk_wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'TYK',
        logo: {
          alt: 'My Site Logo',
          src: 'img/tyk.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'riscv/risc-v简介',
            position: 'left',
            label: 'RISC-V',
          },
          {
            type: 'doc',
            docId: 'mcu/mcu',
            position: 'left',
            label: 'MCU',
          },
          {
            type: 'doc',
            docId: 'mcu_peripheral/mcu_peripheral',
            position: 'left',
            label: 'MCU_Peripheral',
          },
          {
            type: 'doc',
            docId: 'tool/tools',
            position: 'left',
            label: 'TOOL',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Taoyukai',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} taoyukai, Inc. Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">	苏ICP备17052473号-1</a></p>`,
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),

    themes: [
        // ... Your other themes.
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          {
            // ... Your options.
            // `hashed` is recommended as long-term-cache of index file is possible.
            hashed: true,
            language: ["en", "zh"],
            highlightSearchTermsOnTargetPage: true,
            explicitSearchResultPath: true,
            // For Docs using Chinese, The `language` is recommended to set to:
            // ```
            // language: ["en", "zh"],
            // ```
          },
        ],
      ],
};

module.exports = config;
