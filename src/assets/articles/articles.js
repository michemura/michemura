export var articles = [
  {
    title: 'Primer Artículo de pruebas',
    slug: 'primer-articulo-de-pruebas',
    time: '23 Enero 2024',
  },
  {
    title: 'Segundo Artículo de pruebas',
    slug: 'segundo-articulo-de-pruebas',
    time: '23 Enero 2024',
  },
  {
    title: 'Tercer Artículo de pruebas',
    slug: 'tercer-articulo-de-pruebas',
    time: '23 Enero 2024',
  },
  {
    title: 'Cuarto Artículo de pruebas',
    slug: 'cuarto-articulo-de-pruebas',
    time: '23 Enero 2024',
  },
  {
    title: 'Quinto Artículo de pruebas',
    slug: 'quinto-articulo-de-pruebas',
    time: '23 Enero 2024',
  },
  {
    title: 'Sexto Artículo de pruebas',
    slug: 'sexto-articulo-de-pruebas',
    time: '23 Enero 2024',
  },
  {
    title: 'Séptimo Artículo de pruebas',
    slug: 'septimo-articulo-de-pruebas',
    time: '23 Enero 2024',
  },
  {
    title: 'Octavo Artículo de pruebas',
    slug: 'octavo-articulo-de-pruebas',
    time: '23 Enero 2024',
  },
  {
    title: 'Noveno Artículo de pruebas',
    slug: 'noveno-articulo-de-pruebas',
    time: '23 Enero 2024',
  },
  {
    title: 'Décimo Artículo de pruebas',
    slug: 'decimo-articulo-de-pruebas',
    time: '23 Enero 2024',
  },
]

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '

articles.forEach(article => {
  article.content = loremIpsum.repeat(2000 / loremIpsum.split(' ').length)
})
