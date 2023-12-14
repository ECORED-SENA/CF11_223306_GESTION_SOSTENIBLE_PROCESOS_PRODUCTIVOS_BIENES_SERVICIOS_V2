<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Uno de los aspectos fundamentales en la producción de bienes y servicios es conocer en qué consiste la cadena de suministro y abastecimiento, pues estas determinan el conjunto de actividades y medios necesarios para el proceso de distribución y venta, este análisis va desde la compra de materias primas, su transformación y entrega.
    p El objetivo de este espacio de formación es dar a conocer todos los elementos necesarios, que en cuanto a este tema, permiten la toma de decisiones en cada una de las fases que se desarrollan dentro de una organización, garantizando de cierta forma, que los procesos de producción y distribución sean realmente efectivos y eficaces.
    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
