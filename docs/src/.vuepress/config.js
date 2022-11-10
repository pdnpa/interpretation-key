const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Land Cover Interpretation Key',
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
    sidebar: [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '/docs/introduction'
          ]
        },
        {
          title: 'C Wood and forest land',
          collapsable: true,
          children: [
            '/docs/forest/broadleaved-high',
            '/docs/forest/coniferous-high',
            '/docs/forest/mixed-high',
            '/docs/forest/scrub',
            '/docs/forest/clear-felled',
          ]
        },
        {
          title: 'D Moor and Heathland',
          collapsable: true,
          children: [
            '/docs/moorland/upland-heath',
            '/docs/moorland/blanket-peat-grass-moor',
            '/docs/moorland/upland-grass-moor',
            '/docs/moorland/bracken',
            '/docs/moorland/unenclosed-rough-grassland',
            '/docs/moorland/unenclosed-heath',
            '/docs/moorland/upland-mosaics-heath-grass',
            '/docs/moorland/upland-mosaics-heath-bracken',
            '/docs/moorland/upland-mosaics-heath-blanket-peat',
            '/docs/moorland/eroded-peat',
            '/docs/moorland/eroded-mineral-soils',
            '/docs/moorland/coastal-heath',
          ]
        },
        {
          title: 'E Agro-pastoral land',
          collapsable: true,
          children: [
            '/docs/agro-pastoral/cultivated',
            '/docs/agro-pastoral/improved',
            '/docs/agro-pastoral/rough',
          ]
        },
        {
          title: 'F Water and wetland',
          collapsable: true,
          children: [
            '/docs/water-wetland/open',
            '/docs/water-wetland/inland',
            '/docs/water-wetland/peat-bog',
            '/docs/water-wetland/marsh',
            '/docs/water-wetland/saltmarsh',
          ]
        },
        {
          title: 'G Rock and coastal land',
          collapsable: true,
          children: [
            '/docs/rock/inland',
            '/docs/rock/coastal',
            '/docs/rock/dunes',
            '/docs/rock/sand-beach',
            '/docs/rock/shingle-beach',
            '/docs/rock/mudflats',
          ]
        },
        {
          title: 'H Developed land',
          collapsable: true,
          children: [
            '/docs/urban/urban',
            '/docs/urban/transport',
            '/docs/urban/quarries',
            '/docs/urban/derelict',
            '/docs/urban/farmsteads',
            '/docs/urban/other',
          ]
        },
        {
          title: 'I Unclassified land',
          collapsable: true,
          children: [
            '/docs/noclass/unclassified',
          ]
        }
      ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
