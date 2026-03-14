import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ariskrisen Plugins',
  tagline: 'Documentation for Ariskrisen Minecraft Plugins',
  favicon: 'img/favicon.ico',

  // Site URL and Base URL
  url: 'https://ariskrisen.github.io',
  baseUrl: '/Docs/',

  // GitHub integration
  organizationName: 'Ariskrisen',
  projectName: 'Docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // i18n configuration
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    localeConfigs: {
      ru: {
        label: 'Русский',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Ariskrisen/Docs/tree/main/',
        },
        blog: false, // Disabling blog module
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ariskrisen Docs',
      logo: {
        alt: 'Ariskrisen Logo',
        src: 'img/logo.svg', // Make sure to replace this asset in static/img/
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'dialogMenusSidebar',
          position: 'left',
          label: 'DialogMenus',
        },
        {
          type: 'docSidebar',
          sidebarId: 'easyScriptSidebar',
          position: 'left',
          label: 'EasyScript',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Ariskrisen/Docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Plugins',
          items: [
            {
              label: 'DialogMenus (GUI Plugin)',
              to: '/docs/DialogMenus/intro',
            },
            {
              label: 'EasyScript (Scripting Engine)',
              to: '/docs/EasyScript/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Ariskrisen GitHub',
              href: 'https://github.com/Ariskrisen',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ariskrisen. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'yaml', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
