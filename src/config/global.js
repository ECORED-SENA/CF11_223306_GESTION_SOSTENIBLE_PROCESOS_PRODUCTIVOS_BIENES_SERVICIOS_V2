export default {
  global: {
    componenteFormativo:
      'La cadena de suministros y la planificación de la producción',
    descripcionCurso:
      'Cuando se hace referencia a la planificación de bienes y servicios es fundamental tener claro el concepto de cadena de suministro, el cual se define como el componente que regula el flujo de materias primas e insumos, la información, el recurso humano y establece la trazabilidad de la capacidad productiva y las cargas de trabajo, la estrategia es determinar qué tan preciso puede ser el equilibrio entre estos componentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Cadenas de abastecimiento, de aprovisionamiento, o de suministros ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes de la cadena de suministros',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de aplicación de la cadena de suministros',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Selección y compra de insumos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Control de inventarios',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Almacenamiento y distribución',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Canales de distribución del producto y/o servicio',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planificación y control de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Estrategias de aplicación en la planificación de producción',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Flujo de la cadena de valor y mapeo de actividades',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Control de procesos productivos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Indicadores de gestión',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.2 Flujo de la cadena de valor y mapeo de actividades',
      referencia:
        'Rogle. (s.f). <i>Mapa de la cadena de valor. Flujo de información en el VSM I UPV</i>. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vKtC4KvPg8Y',
    },
    {
      tema: '2.4 Indicadores de gestión',
      referencia:
        'Felizzola, H Luna, C. (2014). Lean Six Sigma en pequeñas y medianas empresas: un enfoque metodológico. <i>Ingeniare. Revista chilena de ingeniería, 22(2), 263-277</i>.',
      tipo: 'Artículo',
      link:
        'https://scielo.conicyt.cl/scielo.php?pid=S0718-33052014000200012&script=sci_arttext&tlng=e',
    },
  ],
  glosario: [
    {
      termino: 'Cuadros de control',
      significado:
        'planilla, matriz o formato disponible para el registro de la información.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'término o expresión cuantitativa o cualitativa de la conducta, constantes o propiedades de un proceso o procedimiento.',
    },
    {
      termino: 'Información documentada',
      significado:
        'el uso de datos relevantes para desarrollar las actividades de una empresa.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'conglomerado de destrezas administrativas o de las directrices que una persona posee para ser capaz de direccionar las acciones que ejecuta un grupo humano.',
    },
    {
      termino: 'Listas de chequeo',
      significado:
        'plantillas de inspección que con corresponsabilidad se diseñan para reconocer la veracidad de actividades estandarizadas.',
    },
    {
      termino: 'Manual de calidad',
      significado:
        'información digital del sistema de gestión de la calidad de las corporaciones.',
    },
    {
      termino: 'Plan de mejora',
      significado:
        'esta actividad está centrada en realizar una propuesta para mejorar el método actual de producción.',
    },
    {
      termino: 'Sistema de gestión de calidad',
      significado:
        'es el registro documentado de todos y cada uno de los pasos de la logística estructurada de la compañía.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ararat, A. (2010). <i>Estudio de Métodos y Tiempos en el Proceso Productivo de la Línea de Camisas Interior de MAKILA CTA., para mejorar la productividad de la empresa</i>. Santiago de Cali: Universidad Autónoma de Occidente. ',
      link: 'https://red.uao.edu.co/handle/10614/1175',
    },
    {
      referencia:
        'Hernández, J. & Vizán, A. (2013). <i>Lean Manufacturing</i>. EOI Escuela de organización industrial. ',
      link:
        'https://www.eoi.es/es/savia/publicaciones/20730/lean-manufacturing-concepto-tecnicas-e-implantacion',
    },
    {
      referencia:
        'Proaño, D. (2017). <i>Metodología para elaborar un plan de mejora continua</i>. 3C Empresa: investigación y pensamiento crítico, Edición Especial, 50-56. ',
      link: 'http://dx.doi.org/10.17993/3cemp.2017.especial.50-56',
    },
    {
      referencia:
        'Ramos, D. (2018). <i>Las siete herramientas estadísticas de calidad</i>. Artículo de Qualiex- Blog de Calidad. ',
      link: 'https://blogdelacalidad.com/las-siete-herramientas-de-la-calidad/',
    },
    {
      referencia: 'Ruiz, D. (2014). Manual de estadística. ',
      link: 'https://www.eumed.net/cursecon/libreria/drm/24.pdf',
    },
    {
      referencia:
        'Salazar, P,Del Castillo, G.  (2018) Fundamentos básicos de estadística. Primera Edición. ',
      link: '',
    },
    {
      referencia:
        'Sipper, D y Bulfín, R. Jr. Planeación y control de la producción. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Víctor Manuel Isaza Córdoba',
          cargo: 'Experto temático',
          centro:
            'Centro del Diseño y la Metrología - Regional Distrito capital',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro:
            'Centro del Diseño y la Metrología - Regional Distrito capital',
        },
        {
          nombre: 'Sandra patricia Hoyos Sepúveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
