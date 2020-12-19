module.exports = {
  title: 'Resources for technical writers',
  description: 'Test site built with VuePress',
  base: '/',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css' }]
  ],
  serviceWorker: true,
  plugins: ['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: 'Copy successfully and then paste it for use.', // default is 'Copy successfully and then paste it for use.'
    duration: 300, // prompt message display time.
    showInMobile: false // whether to display on the mobile side, default: false.
  }],
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
      md.use(require('markdown-it-ins'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-abbr'))
    }
  },
  themeConfig: {
    logo: './logo.svg',
    nav: [
      { icon: 'fas fa-book', iconClass: 'has-text-danger', text: 'Documentation', link: '/docs/' },
      { icon: 'fab fa-lg fa-github', iconClass: 'is-medium', text: 'GitHub', link: 'https://github.com/ivancheban/vuepress-theme-bulma' },
      ],
    displayAllHeaders: true,
    serviceWorker: true,
    sidebar: [
      {
        title: 'Documentation',
        icon: 'fas fa-star',
        iconClass: 'has-text-warning',
        collapsable: true,
        children: [
          '/docs/',
          '/docs/hugo-api'
        ]
      }
    ],
    displayAllHeaders: false,
    repo: 'ivancheban/vuepress-theme-bulma',
    repoLabel: 'Contribute!',
    docsRepo: 'ivancheban/vuepress-theme-bulma',
    docsDir: 'demo',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit me!',
    lastUpdated: 'Last Updated',
  },
}
