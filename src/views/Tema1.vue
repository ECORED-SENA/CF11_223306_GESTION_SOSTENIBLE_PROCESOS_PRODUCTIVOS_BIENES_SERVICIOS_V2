<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cadenas de abastecimiento, de aprovisionamiento, o de suministros
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta es quizás la mejor contribución que se ha hecho para la mejora de los procesos logísticos dentro de las organizaciones pues permite tener el control de los diferentes bienes y servicios, establecer procesos de negociación, tener manejo frente al almacenamiento de materias primas e insumos de productos acabados y piezas semielaboradas, soportados por información técnica documentada, el uso de canales de distribución adecuados, etc. La implementación de  dichas cadenas permite que se entregue al cliente un producto o se le ofrezca un servicio con las mejores condiciones y que este satisfaga sus expectativas.
    .row.align-items-end
      .col-lg-7.mb-4.mb-lg-0
        .row.mb-3
          .col-auto
            h3.txt-c1.mb-0 #[b ¿Qué es una cadena de suministros o abastecimiento?]
        p La definimos como la filosofía conceptual que realiza integración, dotación y comercialización de todos los componentes tecnológicos a centros de almacenamiento, distribuidores y detallistas, con el objeto de que los bienes sean manufacturados y mercadeados en las cantidades adecuadas, en los sitios y en los momentos correctos, con renta para todas las entidades involucradas y con prácticas amigables en los niveles de servicio requeridos para satisfacer las condiciones del cliente final.
        .cajon.color-primario.p-4
          p.mb-0 Toda empresa está inmersa, de alguna forma, en alguna cadena de suministro, ya sea como proveedor, como cliente, pues abriga las necesidades de los canales de distribución de determinado producto (envío, carga operatividad, entre otros factores.)
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: auto" ,alt='').m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-secundario
      h2 1.1 Componentes de la cadena de suministros
    .row.bg-c2.align-items-center.mb-5.p-4.p-lg-0
      .col-md-auto
        figure
          img(src='@/assets/curso/tema1/img3.svg', style="width: auto" ,alt='').m-auto
      .col
        p.mb-0 Estos componentes deben ser parte activa de una organización, pues permiten la administración de muchos procesos, tanto internos como externos, entre los que se encuentran el almacenamiento, traslado, acopio de los productos, los cuales se sustentan a través de documentos oficiales, que son la base para la toma de decisiones asertivas, que facilitan el cumplimento de los requerimientos del consumidor.
    p.mb-5 A continuación, se describen los principales componentes de la cadena de suministros.
    .tarjeta.tarjeta--azul.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b")
          .row.m-1.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Proveedores]
              p Estrategas en la cadena de suministros encargados de transportar, adjudicar, ofrecer, comercializar, mercantilizar, o arrendar el uso de manufacturas y servicios; algunas de sus acciones puntuales son:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Satisfacen la demanda, y las necesidades que requiere la empresa.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Responden al plan de costos de producción.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Son responsables de no generar cuellos de botella en el proceso.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Son buenos negociantes y permiten llegar a acuerdos con el cliente.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Implementan procesos sostenibles para mejorar las relaciones con el cliente.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema1/img1.png', alt='')
          .row.m-1.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Transporte]
              p Trabajan en el envío de los materiales, los bienes terminados y los insumos entre corporaciones y consumidores. Son los responsables de crear el nivel de confianza para la manipulación de inventarios entre proveedores y clientes; entre sus labores se encuentran:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Manipular continuamente el inventario disponible, más para el cumplimiento de entregas a clientes.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Como operadores logísticos responden a las necesidades del cliente.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Intervienen en los costos operativos, para establecer el precio de venta del producto.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema1/img2.png', alt='')
          .row.m-1.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Fabricantes]
              p Son los que convierten las materias primas e insumos en bienes para proveer la necesidad de los clientes.
              p Algunas alternativas estratégicas que aplican son:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Máxima utilización de la tecnología emergente para elevar índices de desempeño y productividad.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Opción estratégica de establecer procesos sostenibles, amigables y sustentables para tener capacidad de respuesta competitiva.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Elaboran planes de mantenimiento preventivo muy detallados, son conscientes que, si detienen sus procesos, perjudican ostensiblemente el cliente.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema1/img3.png', alt='')
    .row.mb-4
      .col-auto
        h3.txt-c1.mb-0 #[b Conceptos generales]
    p.mb-5 El concepto de la cadena de suministro ha evolucionado desde la década de 1920, las corporaciones de índole automotriz de Norteamérica trabajaron con algunas de las siguientes premisas:
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row.align-items-center(titulo="Hazlo por ti mismo (<i>Ford</i>)")
            .col.mb-4.mb-lg-0
              p.mb-0 Manejo total de la cadena. La empresa integra el suministro de materiales e insumos, inclusive la construcción de infraestructura tecnológica y mecánica para su época.
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img4.svg', style="width: 140px" ,alt='')
          .row.align-items-center(titulo="Descentralización")
            .col.mb-4.mb-lg-0
              p.mb-0 La no centralización de sistemas de costeo de producción. Esta se establece con la creación en cada área de centros de costos, especificando con mucha mayor precisión todos y cada uno de los valores que intervienen en el precio de venta del producto o la prestación del servicio.
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img5.svg', style="width: 140px" ,alt='')
          .row.align-items-center(titulo="Estructurar el entorno")
            .col.mb-4.mb-lg-0
              p.mb-0 Estructurar el entorno de la cadena de suministros con el fin de que la parte logística tenga una capacidad de respuesta de carácter eficiente, eficaz y de flexibilidad; por lo tanto, el cumplimiento exacto del esquema de requerimientos específicos de cada interés del cliente, se refleja en suministrar productos con alto contenido de sus exigencias.
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style="width: 140px" ,alt='')
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img4.png', style="width: auto" ,alt='').m-auto
    .row.mb-4
      .col-auto
        h3.txt-c1.mb-0 #[b ¿Cómo ha evolucionado el concepto?, posteriormente para la década]
    .row.bg-c3.mb-5
      .col-12
        .px-5.py-4
          .row.align-items-end
            .col-lg-8.mb-4.mb-lg-0
              ul.lista-ul--separador
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Cuando llega el año de 1945, en el surgimiento de la Segunda Guerra Mundial, el continente europeo comienza la revolución industrial, monta a gran escala factorías para el suministro de maquinaria especializada.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Implementan logísticas de transporte para la distribución de maquinaria y equipo a las tropas desde y hacia países lejanos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Establecen el montaje estructurado para el delicado transporte de alimentos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Desarrollan infraestructuras tecnológicas y emergentes para llevar medicamentos a regiones apartadas.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | Diseñan completos aparatos de logística en relevancia para definir batallas.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img8.svg', style="width: auto" ,alt='').m-auto
    p.mb-5 Para épocas más modernas, y en aprovechamiento del montaje fabril que dejó la guerra, ingeniosos empresarios en las décadas consecuentes, comienzan a:
    .row.bg-c4.mb-5
      .col-12
        .px-5.py-4
          .row.align-items-end
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img5.png', style="width: auto" ,alt='').m-auto
            .col-lg-8
              ul.lista-ul--separador
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | 
                  p.mb-0 #[b Generar] empresas paralelas en los años 1960-1970 y les encomiendan la responsabilidad a otras corporaciones para que les hagan suministro de materiales e insumos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | 
                  p.mb-0 #[b Demostrar] que la filosofía que acompaña el modelo de Ford eleva los costos de producción y a la par muestran factores ocultos que no se tenían presentes.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | 
                  p.mb-0 #[b Identificar] que la fortaleza del abastecimiento no estaba en congruencia con el diseño del bien, por lo tanto, mucha materia prima e insumos se desperdiciaban.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #583CB6")
                  | 
                  p.mb-0 #[b Reconocer] que la información no era confiable, los costos no eran los estimados y el cliente a disgusto migraba hacia la competencia.
    .tarjeta.color-primario
      .p-4
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/img9.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-1 #[b Ítems que han marcado la definición del concepto de cadena de suministros]
                p.text-small En las décadas posteriores el concepto de cadena de suministros ha tomado más fuerza. En el siguiente anexo se identifican los principales ítems que han fortalecido su definición. 
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  span Ver documento
                  i.fas.fa-file-download
    Separador
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2 Técnicas de aplicación de la cadena de suministros
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        p Las entidades y corporaciones de amplio recorrido soportan las estructuras jerárquicas con base en departamentos que separan sus funciones para mayor productividad, áreas de sistema de gestión de la calidad, ingeniería, economía, finanzas, gerencia, entre otras, las cuales implementan sistemas estratégicos de acción autónoma, sistemas de incentivos, filosofías colaborativas de integración con proveedores, acciones, que de alguna manera, generan medidas de choque integrales para obtener ventajas competitivas.
        p La aplicación administrativa de la cadena de suministro radica en la planificación, la organización y la vigilancia eficaz y productiva de los flujos en y entre los mecanismos de la cadena, es una malla compleja y dinámica de subestructuras, corporaciones y personas con objetivos diferentes pero alineados con la planeación estratégica.
        .cajon.color-primario.p-4
          p.mb-0 En la aplicación técnica de una cadena de suministros uno de los puntos de mayor beneficio para los sectores productivos se identifica, entre otras cosas, con la difícil tarea de predecir la demanda para la compra acertada de materiales e insumos, pues las condiciones de comportamiento de los mercados globales y regionales es incierta precisamente por la gran variedad de productos y sus mínimos ciclos de vida.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img6.png', style="width: auto" ,alt='').m-auto
    p.mb-5 En el siguiente recurso se nombran otras aplicaciones con referencia al uso de la cadena de suministros:
    .row.justify-content-center
      .col-10.col-md-8.col-lg.bg-c5.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img10.svg', style="width: auto" ,alt='')
          p #[b Tiempos]
          p.mb-0 Establecer los tiempos en la ejecución de las actividades, que, en ocasiones, se tornan incompletas y fraccionadas, elevando los costos del proceso.
      .col-10.col-md-8.col-lg.bg-c5.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img11.svg', style="width: auto" ,alt='')
          p #[b Pronósticos]
          p.mb-0 Construir con precisión pronósticos del estado real de la infraestructura para establecer relación de compromisos anticipados con los clientes.
      .col-10.col-md-8.col-lg.bg-c5.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img12.svg', style="width: auto" ,alt='')
          p #[b Soporte técnico]
          p.mb-0 Estructurar soporte técnico para la creación de áreas del servicio post venta y en atención a requerimientos del cliente.
    .row.justify-content-center.mb-5
      .col-10.col-md-8.col-lg.bg-c5.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img13.svg', style="width: auto" ,alt='')
          p #[b Planes de acción]
          p.mb-0 Establecer con anticipación planes de acción para atender altas demandas; entrega satisfactoria de los pedidos, en relación a las necesidades de flujo de manufactura de bienes y servicios, en atención al aprovisionamiento de materias primas e insumos.
      .col-10.col-md-8.col-lg.bg-c5.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img14.svg', style="width: auto" ,alt='')
          p #[b Control]
          p.mb-0 Mantener el control del proceso con respecto al perfeccionamiento de nuevos productos y su venta.
      .col-10.col-md-8.col-lg.bg-c5.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img15.svg', style="width: auto" ,alt='')
          p #[b Estrategias sostenibles]
          p.mb-0 Someter a reestructuración los procesos logísticos existentes para implementar estrategias sostenibles y amigables en miras al cuidado del medio ambiente.
    p El montaje de sistemas de gestión de calidad del producto es hoy una obligación, la competitividad exige que los productos y servicios estén en el tiempo requerido, al costo negociado y en el lugar donde se solicitó.
    .row.bg-c6.mb-5
      .col-12
        .px-5.py-4.py-lg-0
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Para un cliente es muy satisfactorio que un proveedor integre a sus plantas locativas y procesos las tecnologías emergentes, amigables y sostenibles que garanticen el acceso a nuevas filosofías regresivas, en la que se reconozca la información respecto al tipo de transporte que se emplea, los tiempos de entrega, las fichas de origen de materiales e insumos, las cuales facilitan la identificación del compromiso que la organización tiene con el medio ambiente.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img7.png', style="width: auto" ,alt='').m-auto
    .row.mb-4
      .col-auto
        h3.txt-c1.mb-0 #[b La aplicación sostenible, en la implementación de redes logísticas]
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img17.svg', style="width: auto" ,alt='').m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Cuando se encadenan las diferentes áreas logísticas y locativas con el uso indiscriminado de infraestructuras digitales y de procedimiento, se asume la creación e integración organizada de una red logística en la que circula información documentada y digital con objetivos claros frente al aumento extremo de la productividad.
              br
              br
              | El prototipo, montaje y diseño de la red logística, se caracteriza por mostrarse de acuerdo con un argumento valioso: contar con la infraestructura logística adecuada para cubrir las demandas del mercado de una manera rápida y beneficiosa.
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img8.png', style="width: auto" ,alt='').m-auto
      .col-lg-8
        p La creación y disposición para los departamentos internos de una estructurada de red logística, repercute en la configuración para implementar flexibilidad y capacidad de acogerse a principios de uso de energías renovables y de cadenas de suministro sostenibles y empoderadas con las decisiones de mantenerse al tanto de surgimiento de tecnologías emergentes; aún más con el diseño de esta clase de redes logísticas, las decisiones de oficio serán de alta trascendencia y, con ellas, las organizaciones permanecerán mucho más largo tiempo.
        p.mb-0 La ubicación locativa de las áreas, los principios elementales de acopio y las políticas institucionales de envío de bienes manufacturados, son componentes concluyentes en el desarrollo de la cadena de suministro. Las cifras indiscutibles en la decisión del total de las locaciones, las áreas de distribución, posición, forma y tamaño son los componentes claves del diseño de la red logística de cualquier emprendimiento. Implica  entender, la operatividad, facilidad de transporte y flexibilidad competitiva del proceso.
    p.mb-5 Para garantizar el óptimo funcionamiento de la red logística, la organización debe contar con el número pertinente de colaboradores atendiéndola y las condiciones óptimas de distribución y operatividad dentro de la empresa, por ende, las entidades que hacen construcción de una red logística de suministro deben tener en cuenta una serie de criterios, tales como los que se exponen en el siguiente recurso:
    SlyderF(columnas="col-md-6 col-xl-4")
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img18.svg' alt='AvatarTop')
        p.text-center Se debe establecer por dónde comenzar la implementación de la red logística.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img19.svg' alt='AvatarTop')
        p.text-center Se debe diagnosticar si por costos se pueden unificar varios departamentos en una sola red.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img20.svg' alt='AvatarTop')
        p.text-center Se debe identificar la importancia de la aplicación de las estrategias de la red, el rol que desempeña cada uno.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img21.svg' alt='AvatarTop')
        p.text-center Se debe garantizar que las redes no queden sobrecargadas estructuralmente, es decir deben quedar bien dimensionadas.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img22.svg' alt='AvatarTop')
        p.text-center Se debe determinar el nivel de inventario a sostener.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img23.svg' alt='AvatarTop')
        p.text-center Se debe determinar los conglomerados de clientes, colaboradores, consumidores, segmentos, que se pueden atender.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img24.svg' alt='AvatarTop')
        p.text-center Se debe garantizar que la estructura de la red logística sea lo suficientemente sólida y con buen grado de flexibilidad para acondicionarse a las necesidades y cambios sostenibles de los consumidores y compradores.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img25.svg' alt='AvatarTop')
        p.text-center Se debe pronosticar la distancia y el tiempo de planificación.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img26.svg' alt='AvatarTop')
        p.text-center Se debe garantizar el acondicionamiento de los procesos sostenibles y amigables, energías renovables y tecnologías emergentes.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img27.svg' alt='AvatarTop')
        p.text-center El nuevo sistema plantea catalogar las mínimas posibilidades de realizar malas inversiones, y de elevadas variaciones en los costos.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img28.svg' alt='AvatarTop')
        p.text-center Se deben emplear estrategias de salud y seguridad en los puestos de trabajo.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img29.svg' alt='AvatarTop')
        p.text-center Se debe diagnosticar condiciones y opciones de redes logísticas amigables sostenibles y de bajo costo desde la perspectiva del cuidado del medio ambiente.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img30.svg' alt='AvatarTop')
        p.text-center Se deben diagnosticar todas las alternativas para que esta implementación sea la óptima y permita el posicionamiento de la empresa frente a la competencia.
    Separador
    #t_1_3
    .titulo-segundo.color-secundario
      h2 1.3 Selección y compra de insumos
    .row.bg-c2.align-items-center.mb-5.p-4.p-lg-0
      .col-md-auto
        figure
          img(src='@/assets/curso/tema1/img31.svg', style="width: auto" ,alt='').m-auto
      .col
        p.mb-0 Construir un esquema de adquisición de materias primas e insumos, nos condiciona a certificar la continuidad de las operaciones con el cumplimiento de los ciclos pactados en la planificación. Esto demanda la toma de decisiones en cumplimiento de la diversidad de los insumos y materias primas almacenadas y del punto de equilibrio y la existencia que hay que a mantener en stock para cuidar que el proceso de manufactura no sufra estancamiento; cada producto requiere una atención especial para no entorpecer su comercialización.
    .row.align-items-center.mb-4
      .col-lg-10
        .row
          figure.fig-p1
            img(src='@/assets/curso/tema1/img32.svg', style="width: auto" ,alt='').m-auto
          .col-12.bg-c7
            .p-4
              p.text-white #[b Pero, ¿Qué son las materias primas?]
              p.text-white Componente de un bien a manufacturar y que realmente es relevante para el ensamble del mismo, sin él no puede se puede sustentar la cantidad para la demanda de cada artículo que se almacena en centros de distribución y que la empresa requiere para sus operaciones.
          figure.fig-p2
            img(src='@/assets/curso/tema1/img33.svg', style="width: auto" ,alt='').m-auto
      .col-lg-2
        figure
          img(src='@/assets/curso/tema1/img34.svg', style="width: auto" ,alt='').m-auto
    p Puntualmente, se establecen parámetros estandarizados que determinan las unidades o el total a adquirir de materiales e insumos, según sus características y especificidades en fichas técnicas. Son delimitados por el consumo, las medidas de negociación y fechas de entrega y el ciclo de abastecimiento, lo que facilita la selección y evaluación de proveedores, algunos parámetros pertinentes para contactarlos son:
    .row.bg-c4.mb-5
      .col-12
        .p-5
          .row.mb-3
            .col-auto
              h3.txt-c1.mb-0 #[b Criterios para la selección de proveedores]
          p.mb-5 Dentro del proceso de adquisición de materias primas es fundamental establecer algunos parámetros para la selección de proveedores, a continuación se hace una descripción de algunos de ellos.
          SlyderF(columnas="col-md-6 col-xl-4")
            .tarjeta.color-acento-contenido1.p-4
              .row.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/img35.svg' alt='AvatarTop')
              p Análisis de la ruta crítica del proceso interno, limitaciones o ventajas con respecto a su competencia.
            .tarjeta.color-acento-contenido1.p-4
              .row.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/img36.svg' alt='AvatarTop')
              p Catalogar los ciclos de entrega del insumo o materia prima.
            .tarjeta.color-acento-contenido1.p-4
              .row.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/img37.svg' alt='AvatarTop')
              p Establecer la forma sostenible y amigable de la tecnología empleada en su logística de construcción.
            .tarjeta.color-acento-contenido1.p-4
              .row.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/img38.svg' alt='AvatarTop')
              p Solicitar muy específicamente cronogramas y metas de producción.
            .tarjeta.color-acento-contenido1.p-4
              .row.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/img39.svg' alt='AvatarTop')
              p Establecer parámetros de Capacidad instalada operativa.
            .tarjeta.color-acento-contenido1.p-4
              .row.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/img40.svg' alt='AvatarTop')
              p Información documentada sobre los estándares de tiempo en cumplimiento de sus ciclos de operatividad.
            .tarjeta.color-acento-contenido1.p-4
              .row.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/img41.svg' alt='AvatarTop')
              p Solicitar certificaciones de calidad, fichas técnicas y en su defecto certificación de origen.
            .tarjeta.color-acento-contenido1.p-4
              .row.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/img42.svg' alt='AvatarTop')
              p Información documentada en la cantidad de unidades a producir.
            .tarjeta.color-acento-contenido1.p-4
              .row.mb-3
                .col-6
                  img(src='@/assets/curso/tema1/img43.svg' alt='AvatarTop')
              p Certificar los sistemas amigables y logísticos de la cadena de distribución del producto.
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-lg-auto.px-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img9.png', style="width: 390px" ,alt='')
          .col.bg-c8
            .p-4
              figure.mb-3
                img(src='@/assets/curso/tema1/img31.svg', style="width: auto" ,alt='')
              p.mb-0 Cuando las entidades corporativas dan comienzo a nuevos emprendimientos y proyectos empresariales, ponerlos en funcionamiento debe desplegar una completa cantidad de estrategias para suplir elementos que no pongan en aprietos su funcionamiento. Se deben tener en cuenta diseños, colores y estilos, inicios de temporada, nuevas tendencias, entre otros, estos elementos condicionan la selección precisa de insumos y materias primas.
    p.mb-5 Al analizar de manera detenida el procedimiento de selección y compra de insumos, los departamentos de compras tienen presente otros condicionamientos:
    .row.bg-c3.mb-5
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check(style="color: #583CB6")
                  | Trazabilidad en el crecimiento empresarial año a año de las corporaciones.
                li.d-flex
                  i.fas.fa-check(style="color: #583CB6")
                  | Incremento pronosticado del presupuesto de las ventas de las corporaciones, nuevos compradores que están dispuestos a convertirse en clientes potenciales.
                li.d-flex
                  i.fas.fa-check(style="color: #583CB6")
                  | Novedosos esquemas publicitarios que venden la idea de manera sostenible y amigable.
                li.d-flex
                  i.fas.fa-check(style="color: #583CB6")
                  | Madurez de la compañía y adquisición de ventajas competitivas durante el tiempo.
                li.d-flex
                  i.fas.fa-check(style="color: #583CB6")
                  | Las ventas presentan decrecimiento desmesurado debido a la presencia de nuevos competidores.
                li.d-flex
                  i.fas.fa-check(style="color: #583CB6")
                  | La inevitable decadencia de la compañía por sistemas de producción convencionales.
                li.d-flex
                  i.fas.fa-check(style="color: #583CB6")
                  | El inventario de bienes manufacturados ingresa a un estancamiento significativo en su rotación.
                li.d-flex
                  i.fas.fa-check(style="color: #583CB6")
                  | El análisis que el cliente final realiza, al no existir oxigenación en la variedad de artículos que produce la compañía, o estos esperan que se les aplique descuento por la obsolescencia.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img44.svg', style="width: auto" ,alt='').m-auto
    p.mb-5 Las plantas fabriles y de servicio realizan esquemas de información que se validan a través de un sistema digital de registro y de estructuración y que permiten la clasificación de inventarios de los materiales según la normatividad establecida; estos esquemas facilitan:
    .row.bg-c4.mb-5
      .col-12
        .p-5
          .row.mb-3
            .col-auto
              h3.txt-c1.mb-0 #[b Ventajas de los esquemas de información]
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img45.svg', style="width: auto" ,alt='').m-auto
            .col-lg-8
              .tarjeta.tarjeta--azul
                .p-4
                  SlyderA
                    .row.justify-content-center
                      .col-10
                        p.mb-0 #[b 1. Equilibrio]
                        p Facilita la disposición de inventarios disminuyendo la cantidad de bienes y su diversidad a números equilibrados.
                        p.mb-0 #[b 2. Trazabilidad]
                        p Elimina las imperfecciones del sistema al volverse digital y no manual; en tiempo real establece trazabilidad porcentual a los puntos de equilibrio requeridos para el proceso y las improvisaciones son cosas del pasado por la tipificación, exacta y transparente de los datos de los materiales.
                        p.mb-0 #[b 3. Orden]
                        p Maximiza el uso del espacio físico al tener que almacenar solo lo necesario, registra digitalmente las áreas requeridas y cae en una ordenación eficiente de los inventarios, facilitando la labor cuando se requiere asignarlos.
                        p.mb-0 #[b 4. Exactitud]
                        p Sin lugar a dudas el cálculo con exactitud de las necesidades de inventario mejora ostensiblemente.
                    .row.justify-content-center
                      .col-10
                        p.mb-0 #[b 5. Facilidad]
                        p Crea la política instruccional de concentrarse en menor inventario de artículos y se lucra el grupo de colaboradores en administrar más fácilmente el proceso.
                        p.mb-0 #[b 6. Eficiencia]
                        p Disminuye la elaboración de inventarios de manera manual.
                        p.mb-0 #[b 7. Control]
                        p Se tiene un control más preciso respecto a la rotación de productos, identificando el de mayor acogida por el cliente o el que necesita ser transformado.
                        p.mb-0 #[b 8. Efectividad]
                        p Contribuye en disminución de errores de despacho de insumos y materiales.
                        p.mb-0 #[b 9. Rapidez]
                        p Facilita el desarrollo de tareas y los procesos administrativos, la información se encuentra consignada en un solo lugar y por ende se adquiere con mayor rapidez y facilidad.
    p.mb-5 El diseño de fichas técnicas para la iIdentificación de cada material existente permite la conformación de una base de datos que facilita su clasificación y ordenamiento. La repartición de los materiales, en conformidad con la planificación de procesos logísticos, justifican la utilización de un esquema de símbolos, códigos, colores, imágenes, patrones y elaboración de matrices de tolerancia y equivalencia que facilitan acciones de identificación, clasificación y ordenamiento de forma precisa ágil y fácil.
    .row.mb-4
      .col-auto
        h3.txt-c1.mb-0 #[b Gestión de compras sostenibles]
    .row.bg-c2.align-items-center.mb-5.p-4.p-lg-0
      .col-md-auto
        figure
          img(src='@/assets/curso/tema1/img46.svg', style="width: auto" ,alt='').m-auto
      .col
        p.mb-0 La misión que implica la normatividad de compra sostenible, como estrategia de desarrollo sustentable amigable de buenas prácticas de compra, es un reto para todas las empresas, pues esta además de disminuir costos y el uso excesivo de materiales e insumos, disminuye los impactos ambientales que pueden afectar las generaciones futuras; además, es un compromiso con la sociedad y el medio ambiente. A continuación la definición más precisa de compra sostenible.
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        .row
          figure.fig-p1
            img(src='@/assets/curso/tema1/img32.svg', style="width: auto" ,alt='').m-auto
          .col-12.bg-c7
            .p-4
              p.text-white #[b Compra sostenible]
              p.text-white Hace referencia a la integración de parámetros éticos, y de transparencia en la adquisición de bienes y servicios que puedan emplearse en un proceso logístico y que no generen daños significativos al medio ambiente.
          figure.fig-p2
            img(src='@/assets/curso/tema1/img33.svg', style="width: auto" ,alt='').m-auto
        .cajon.color-acento-botones.p-4
          p.mb-0 Recordar que: cuando se encuadra un marco de referencia de compra sostenible, se diferencia del consumo sostenible, porque es el resultado final del primero, la responsabilidad es del que produce y en menor parte activa del que consume.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img47.svg', style="width: auto" ,alt='').m-auto
    .row.mb-4
      .col-auto
        h3.txt-c1.mb-0 #[b Políticas para proveedores sostenibles]
    p.mb-5 La legislación referente a la compra sostenible es casi nula en entornos nacionales, está primordialmente enlazada a las adquisiciones del sector público. Honestamente, en relación al carácter netamente voluntario de gran parte de las iniciativas coligadas a la compra sostenible, las administraciones no han desarrollado normativas o leyes que exijan a las empresas a promover prácticas sostenibles en su gestión de compras, más allá del acatamiento de la Ley. Se presentan algunas consideraciones que se han dado al respecto:
    .tarjeta.tarjeta--azul.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b")
          .row.m-1.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Políticas: proveedores sostenibles]
              p A continuación, se presentan algunas consideraciones sobre la política europea que se han dado en materia de sostenibilidad empresarial. 
              p En el continente europeo, las incipientes decisiones que hacen referencia a la contratación responsable o sostenible desde el sector público, se encumbran a los años 80, aunque hasta los años 90 no se pone visible la jerarquía y el potencial de la compra pública con criterios ambientales.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema1/img10.png', alt='')
          .row.m-1.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Políticas: proveedores sostenibles]
              p En el Convenio de Ámsterdam del año 1997, se registra que la integración del factor medioambiental en todas las políticas corporativas es condición relevante para lograr un desarrollo sustentable y sostenible. A partir de esa década surgen las primeras subestructuras de compra sustentable y limpia, y se echan a rodar, proyectos de convenio público verde a nivel regional, nacional, e internacional.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema1/img11.png', alt='')
          .row.m-1.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Políticas: proveedores sostenibles]
              p En el período 2003, la Comisión Europea, en su comunicación sobre “Política Integrada de Productos”, exhibe una táctica para reforzar y reorientar la política medioambiental relativa a los productos, con esencia de promover el perfeccionamiento de un mercado de productos más ecológicos y crear los escenarios generales para que los productos sean más considerados con el medio a lo largo de todo su ciclo de vida.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema1/img12.png', alt='')
          .row.m-1.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Políticas: proveedores sostenibles]
              p Ante el limbo legal existente sobre la posibilidad e importancia de reunir criterios ambientales y sociales en los contratos públicos de forma correcta, se desarrollaron y aprobaron dos Directivas, que en la actualidad regulan el marco jurídico de la contratación pública a nivel de la Unión Europea.
              p Directiva 2004/17/EC: 31 de marzo de 2004, coordina los procedimientos de contratación de entidades que operan en el sector del agua, la energía, el transporte y los servicios postales.
              p Directiva 2004/18/EC: 31 de marzo de 2004, coordina los procedimientos de adjudicación de contratos públicos de obra, suministro y servicio.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema1/img13.png', alt='')
    .row.mb-4
      .col-auto
        h3.txt-c1.mb-0 #[b Registro y evaluación y reevaluación de proveedores]
    .row.bg-c9.align-items-center.mb-5
      .col-lg-auto.pt-5.pt-lg-0
        figure
          img(src='@/assets/curso/tema1/img14.png', style="width: auto" ,alt='').m-auto
      .col
        .p-4
          p Actualmente, un sinnúmero de   empresas, en su mayoría multinacionales, han introducido políticas de compromiso social sostenible encaminadas a sus proveedores, y en las que se les comunica a éstos de los principios y valores éticos tomados por la empresa, así como de la responsabilidad que se espera del proveedor en este sentido, tanto directamente como en su propia cadena logística de suministro, sub-proveedores, productores, entre otros, especialmente llamativa. 
          p En este sentido, como ejemplo, está la política adoptada por el gigante sueco del equipamiento, IKEA, por el rumbo de colaboración para con los proveedores. Sin embargo, en sus inicios, la multinacional fue fuertemente criticada por haber impuesto ‘inesperadamente’ a sus proveedores unas condiciones muy estrictas para las que no estaban preparados, generando así cierto grado de catástrofe industrial, en muchos de los casos, en naciones frágiles.
          p.mb-0 Como contestación a tales críticas, la multinacional ajustó sus políticas y estándares, dando pie a la asistencia, la trazabilidad y el margen de tiempo para acoplarse.
    p.mb-5 La descomposición en valores corporativos y transparencia es otra de las preocupaciones, por lo que cada proveedor debe comprometerse a firmar un pacto o declaración en contra de corrupción, junto con un manual que integre políticas de transparencia en la firma de contratos. Además de una política anticorrupción, se instan también al acatamiento de unas reglas para la prevención de ésta, así como una política de pesquisa que describe cómo los colaboradores y proveedores deben proceder ante dudas de estafas, corrupción, fraude u otras experiencias ilícitas.
    .row.mb-4
      .col-auto
        h3.txt-c1.mb-0 #[b Documentación, ciclo de vida del bien o servicio]
    .row.bg-c10.align-items-center.mb-5
      .col-lg-8
        .p-4
          p Cuando se nombran las diferentes etapas por la que pasa un producto a partir de su creación y con destino a un punto de venta, se puede pronosticar la propensión en el avance de las ventas de un determinado bien, pero se debe tener presente factores definidos, porque no todos los productos son similares. Más aún, se deben tener en consideración las particularidades del mercado en el que se distribuye y de la entidad que lo procesa. 
          p.mb-0 A continuación se exponen las fases del ciclo de vida del producto listo para su comercialización:
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img15.png', style="width: auto" ,alt='').m-auto
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Fase número uno")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b Introducción]
            p.mb-0 Es el instante en el que se crea el bien y se pone en marcha en espacios comerciales. En esta fase, los clientes o compradores potenciales desconocen el bien, incluso puede que no coexista una necesidad determinada ni una demanda que justifique su aparición. En derivación de lo anterior, la demanda es mínima. Para fomentar la inclusión del producto al mercado es indispensable promocionar con campañas publicitarias.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img50.svg', style="width: auto" ,alt='').m-auto
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Fase número dos")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b Crecimiento]
            p.mb-0 La particularidad transcendental de esta etapa es el incremento de las demandas. A medida que el bien se va dando a conocer, acrecienta el interés de los clientes y, a la vez, los beneficios. Para fortalecer este incremento, la empresa debe acrecentar la logística para satisfacer la petición del mercado. La competencia puede aportar productos al mercado que generan competitividad.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img51.svg', style="width: auto" ,alt='').m-auto
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Fase número tres")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b Madurez]
            p.mb-0 Es la fase de máximos históricos, o de entierro del producto, en el que se logra la trazabilidad en ventas del bien. El impulso debe concentrarse en mejorar la atención de los clientes, con el propósito de cumplir con las expectativas previstas. Es la etapa en la que más tácticas se colocan en camino para que el bien siga vigente en la mente del cliente.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img52.svg', style="width: auto" ,alt='').m-auto
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Fase número cuatro")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b Declive]
            p.mb-0 Es la etapa final del ciclo de vida porque el producto malgasta su interés ante los clientes y los negocios caen en picada. Es el instante de las súper ofertas y rebajas. En este mismo camino, se debe situar la estrategia publicitaria a notificar esas oportunidades de lograr el producto a bajo costo.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img53.svg', style="width: auto" ,alt='').m-auto
    .row.mb-4
      .col-auto
        h3.txt-c1.mb-0 #[b Estrategias y oportunidades de mitigación]
    p.mb-5 Una subestructura de mitigación es un instrumento que reconoce y soluciona los acontecimientos que suelen ser peligrosos y que se prevé que ocurrirán en determinado proyecto.  Se describen algunas estrategias para el manejo de diferentes riesgos dentro de las organizaciones.
    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img54.svg', style="width: auto" ,alt='').m-auto
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Aceptación del riesgo")
            .col-12
              p Se identifica y se reconoce el riesgo, pero, se determina que estos no afectan el desarrollo de objetivos empresariales y que pueden ser aceptados.
              p Es necesario aclarar que si es importante desarrollar estrategias para convertir dichos riesgos en procesos adaptables dentro de las tareas que se llevan dentro de la organización.
          .row(numero="2" titulo="Evitación del riesgo")
            .col-12
              p La forma de evitar el riesgo es impidiendo que se lleve a cabo la actividad que lo genera, por ende, se debe buscar una estrategia o actividad que implique un riesgo menor.
          .row(numero="3" titulo="Mitigación del riesgo")
            .col-12
              p Se establecen estrategias para disminuir el impacto, es decir se quiere evitar grandes efectos con el desarrollo de planes para controlarlo, esta estrategia se utiliza cuando los riesgos son inevitables.
          .row(numero="4" titulo="Transferencia del riesgo")
            .col-12
              p Sucede cuando el riesgo se transmite a otra área de la organización o a alguna empresa para que sea resuelto y manejado.
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
