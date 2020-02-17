module.exports = {
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        logo: '/BMHlogotext.svg',
        locales: {
          '/': {
            // text for the language dropdown
            selectText: 'Jazyk',
            // label for this locale in the language dropdown
            label: 'Česky',
            // text for the edit-on-github link
            editLinkText: 'Upravit s pomocí GitHubu',
            // config for Service Worker 
            serviceWorker: {
              updatePopup: {
                message: "Je dostupný nový obsah.",
                buttonText: "Obnovit"
              }
            },
            // algolia docsearch options for current locale
            algolia: {},
            copyright: 'Copyright © 2020 B M H spol. s. r. o  |  Ochrana soukromí',
            blogpath: '/blog/',
            blogreadmore: 'přečíst',
            aboutnav: [
              { text: 'Domů', link: '/' },
              { text: 'O nás', link: '/o-nas/' },
              { text: 'Naše služby', link: '/sluzby/' }
            ],
            nav: [
                { text: 'Reference', link: '/reference/' },
                { text: 'Blog', link: '/blog/' },
                { text: 'Kontakt', link: '/kontakt/' }
            ],
            servicesName: 'Naše služby',
            services: [
                { text: 'Kanalizace', link: '/sluzby/kanalizace/', img: '/img/kanalizace.jpg' },
                { text: 'Vodovody', link: '/sluzby/vodovody/', img: '/img/vodovod.jpg' },
                { text: 'Revizní šachty', link: '/sluzby/revizni-sachty/', img: '/img/revizni_sachty.jpg' },
                { text: 'Monitoring', link: '/sluzby/monitoring/', img: '/img/robotika.jpg' }
            ],
            sidebar: {
              '/': [/* ... */],
              '/nested/': [/* ... */]
            }
          },
          '/en/': {
            selectText: 'Language',
            label: 'English',
            editLinkText: 'Edit this page on GitHub',
            serviceWorker: {
              updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
              }
            },
            copyright: 'Copyright © 2020 B M H spol. s. r. o  |  Ochrana soukromí',
            blogpath: '/en/blog/',
            blogreadmore: 'read more',
            nav: [
                { text: 'Home', link: '/en/' },
                { text: 'Blog', link: '/en/blog/' },
                { text: 'About company', link: '/en/about/' }
            ],
            servicesName: 'Our services',
            services: [
                { text: 'Sewerage', link: '/en/services/sewerage/', img: '/img/kanalizace.jpg'  },
                { text: 'Water mains', link: '/en/services/water-mains/', img: '/img/vodovod.jpg' },
                { text: 'Sewer manholes', link: '/en/services/sewer-manholes/', img: '/img/revizni_sachty.jpg' },
                { text: 'Robotics', link: '/en/services/robotics/', img: '/img/robotika.jpg' }
            ],
            algolia: {},
            sidebar: {
              '/en/': [/* ... */],
              '/en/nested/': [/* ... */]
            }
          }
        }
    },
    locales: {
        '/': {
            lang: 'cs-CZ', // this will be set as the lang attribute on <html>
            description: 'BMH cz'
        },
        '/en/': {
            lang: 'en-US',
            description: 'BMH eng'
        }
    }
}