// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Philosophie Tronc Commun',
  tagline: 'Rolland Auda, La Condamine, Quito, 2026-2027',
  favicon: 'img/philo.svg',

  // TODO bascule prod : remplacer par https://philo.profauda.fr quand phil27 prend la suite de phil25
  url: 'https://phil27.profauda.fr',
  baseUrl: '/',

  organizationName: 'rollauda',
  projectName: 'phil27',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Désactive la documentation par défaut — on utilise plusieurs plugins docs
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'notions',
        path: 'notions',
        routeBasePath: 'notions',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'auteurs',
        path: 'auteurs',
        routeBasePath: 'auteurs',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'courants',
        path: 'courants',
        routeBasePath: 'courants',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'methode',
        path: 'methode',
        routeBasePath: 'methode',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
      navbar: {
        title: 'philoconda',
        logo: {
          alt: 'philo',
          src: 'img/philosophy.svg',
        },
        items: [
          {
            to: '/docs/',
            label: 'Leçons',
            position: 'left',
            activeBaseRegex: `/docs/`,
          },
          {
            to: '/notions/',
            label: 'Notions',
            position: 'left',
            activeBaseRegex: `/notions/`,
          },
          {
            to: '/auteurs/',
            label: 'Auteurs',
            position: 'left',
            activeBaseRegex: `/auteurs/`,
          },
          {
            to: '/courants/',
            label: 'Courants',
            position: 'left',
            activeBaseRegex: `/courants/`,
          },
          {
            to: '/methode/intro',
            label: 'Méthode',
            position: 'left',
            activeBaseRegex: `/methode/`,
          },
          {
            href: 'https://www.profauda.fr/',
            label: 'Accueil-Auda',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `©Rolland Auda, 2026-2027. Construit avec Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
