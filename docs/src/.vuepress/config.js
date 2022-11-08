const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Landscape Categories',
        link: '/guide/',
      },
      {
        text: 'Useful links',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/Definitions/': [
        {
          title: 'C Wood and forest land',
          collapsable: false,
          children: [
            'C1 Broadleaved high forest',
            'C2 Coniferous high forest ',
            'C3 Mixed high forest'
            'C4 Scrub',
            'C5 Clear felled/new plantings in forest areas'
          ]
        },
        {
          title: 'D Moor and Heathland',
          collapsable: false,
          children: [
            'D1 Upland heath',
            'D2 Upland grass moor (b) grass moor',
            'D2 Upland grass moor (b) blanket peat grass moor',
            'D3 Bracken',
            'D4 Unenclosed lowland areas (a) rough grassland',
            'D4 Unenclosed lowland areas (b) heath',
            'D6 Upland mosaics (a) heath/grass',
            'D6 Upland mosaics (b) heath/bracken',
            'D6 Upland mosaics (c) heath/blanket peat',
            'D7 Eroded area (a) peat',
            'D7 Eroded area (b) mineral soils',
            'D8 Coastal heath'
          ]
        },
        {
          title: 'E Agro-pastoral land',
          collapsable: false,
          children: [
            'E1 Cultivated land',
            'E2 Grassland (a) improved pasture',
            'E2 Grassland (b) rough pasture'
          ]
        },
        {
          title: 'F Water and wetland',
          collapsable: false,
          children: [
            'F1 Open water, coatal',
            'F2, Open water, inland',
            'F3 Wetland vegetation (a) peat bog',
            'F3 Wetland vegetation (b) freshwater marsh',
            'F3 Wetland vegetation (c) saltmarsh'
          ]
        },
        {
          title: 'G Rock and coastal land',
          collapsable: false,
          children: [
            'G2 Bare rock (a) inland',
            'G2 Bare rock (b) coastal',
            'G3 Other coastal features (a) dunes',
            'G3 Other coastal features (b) sand beach',
            'G3 Other coastal features (c) shingle beach',
            'G3 Other coastal features (d) mudflats'
          ]
        },
        {
          title: 'H Developed land',
          collapsable: false,
          children: [
            'H1 Built-up land (a) urban area',
            'H1 Built-up land (b) major transport route',
            'H2 Quarries, mineral working and derelict land (a) quarries and mineral working',
            'H2 Quarries, mineral working and derelict land (b) derelict land',
            'H3 Isolated rural developments (a) farmsteads',
            'H3 Isolated rural developments (b) other'
          ]
        },
        {
          title: 'I Unclassified land',
          collapsable: false,
          children: [
            'I Unclassified land'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
