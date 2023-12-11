<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planificación y control de procesos
    .row.mb-5
      .col-lg-auto.px-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 390px" ,alt='')
      .col.bg-c8
        .p-4
          p Para los grupos empresariales y de servicio es importante poner  en funcionamiento el diseño de una cadena de valor y de control que permita llevar  la  trazabilidad de los recursos usados, el grupo humano, las materias primas,  la infraestructura mecánica, entre otros, de esto depende que los administrativos proyecten el futuro económico  y desarrollen   estrategias que mejoren la  eficacia y permitan  proveer al mercado de altos parámetros de calidad inmersos en sus productos, lo  que significa una  alta ventaja competitiva para la empresa.
          p De esta forma, aplicar tácticas puntuales y herramientas estratégicas permiten agilizar de manera significativa la obtención de un producto o la prestación de un servicio, incluso contribuye a la mejora continua de procesos y procedimientos relacionados.
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p El hecho de equipar las empresas con tecnología emergente y de punta y la renovación tecnológica de equipos, guías y accesorios, más el conocimiento polivalente de la mano de obra directa, arroja como resultado que la capacidad de respuesta de los procesos productivos sea mucho más rápida y eficiente. La sinergia que se busca en los equipos de trabajo, utilizando un preciso balanceo de líneas de producción contribuye al uso eficiente del tiempo para una respuesta rápida a los proveedores del servicio.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width: auto" ,alt='').m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Estrategias de aplicación en la planificación de  producción
    p.mb-5 Es innegable que la planificación permite elevar la productividad, a continuación se pueden conocer sus principales ventajas:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Flujo de la cadena de valor y mapeo de actividades
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p Cada estrategia que se diseña para conseguir trasladar un producto o servicio a un cliente se considera un eslabón más en la cadena de valor, la cadena transita por los espacios locativos de la entidad y la meta final es llegar a un proveedor.
        p Para fortalecer con acciones, una clara caracterización de la cadena de valor, así como de todas las operaciones y eventos que generan desperdicios, es relevante aprender y trabajar la metodología de mapeo de procesos.
        p.mb-0 La intención de una cadena de valor es transportar los productos o servicios al consumidor de la manera más eficiente, a tiempo y con un mínimo de inventario.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img3.png', style="width: auto" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
