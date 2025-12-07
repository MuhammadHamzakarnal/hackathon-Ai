// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Learning Physical AI and Robotics',
  favicon: 'img/favicon.ico',

  url: 'https://MuhammadHamzakarnal.github.io',
  baseUrl: '/',

  organizationName: 'MuhammadHamzakarnal',
  projectName: 'physical-ai-humanoid-robotics-textbook',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    localeConfigs: {
      ur: {
        label: 'اردو',
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/ph-ai-logo.jp',
    navbar: {
      title: 'Physical AI & Humanoid Robotics Textbook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ph-ai-logo.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/MuhammadHamzakarnal',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction/intro',
            },
          ],
        },
        {
          title: 'Social Profiles',
          items: [
            { label: 'Instagram', href: 'https://instagram.com/' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
            { label: '(X)Twitter', href: 'https://x.com/' },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MuhammadHamzakarnal',
            },
          ],
        },
      ],
      copyright:
        `Copyright ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
