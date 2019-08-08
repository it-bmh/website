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
            nav: [
                { text: 'Domů', link: '/' },
                { text: 'Blog', link: '/blog/' },
                { text: 'O společnosti', link: '/o-spolecnosti/' }
            ],
            servicesName: 'Naše služby',
            services: [
                { text: 'Kanalizace', link: '/sluzby/kanalizace/' },
                { text: 'Vodovody', link: '/sluzby/vodovody/' },
                { text: 'Revizní šachty', link: '/sluzby/revizni-sachty/' },
                { text: 'Robotika', link: '/sluzby/robotika/' }
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
            nav: [
                { text: 'Home', link: '/en/' },
                { text: 'Blog', link: '/en/blog/' },
                { text: 'About company', link: '/en/about/' }
            ],
            servicesName: 'Our services',
            services: [
                { text: 'Sewerage', link: '/en/services/sewerage/' },
                { text: 'Water mains', link: '/en/services/water-mains/' },
                { text: 'Sewer manholes', link: '/en/services/sewer-manholes/' },
                { text: 'Robotics', link: '/en/services/robotics/' }
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