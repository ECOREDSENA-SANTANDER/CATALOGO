export default {
  global: {
    Name: 'Catálogo componentes web RED SENA SANTANDER',
    Description: '',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/element_01.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/element_02.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Encabezados',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Párrafos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Listados',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Bloques de texto destacado',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Citas',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Imágenes',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Video',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Tablas',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Llamados a la acción',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo: 'Botones',
            hash: 't_1_10',
          },
          {
            numero: '1.11',
            titulo: 'Animaciones',
            hash: 't_1_11',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Infografía estática',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Infografía interactiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Puntos calientes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ventana modal',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Slider de diapositivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Slider simple',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Slider con numerales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Slide con títulos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Carrusel de tarjetas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Acordeón',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Acordeón (con viñeta en la izquierda) - tipo 1',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Acordeón (con viñeta en la izquierda) - tipo 2',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Acordeón con numeral / pasos',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Pestañas o Tabs',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Pestañas verticales',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Pestañas horizontales - sencillas',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Pestañas horizontales - iconos',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Líneas de tiempo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Línea de tiempo - vertical',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Línea de tiempo - Horizontal',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Rutas / Pasos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Pasos - Verticales',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Pasos - Horizontales',
            hash: 't_9_2',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Tarjetas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Tipo avatar',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Conectadas',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Animadas',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Tarjetas con número',
            hash: 't_10_4',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Audio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Videos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '12.1',
            titulo: 'Spot animado',
            hash: 't_12_1',
          },
          {
            numero: '12.2',
            titulo: 'Motion Graphics',
            hash: 't_12_2',
          },
          {
            numero: '12.3',
            titulo: 'Video clase',
            hash: 't_12_3',
          },
          {
            numero: '12.4',
            titulo: 'Información del programa',
            hash: 't_12_4',
          },
        ],
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Nuevos componentes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
