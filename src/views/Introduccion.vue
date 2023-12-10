<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1.mb-5
      .col-12
        .px-5.pt-4.pt-lg-0
          .row.align-items-center.mb-4.mb-lg-0
            .col-lg-auto.mb-4
              figure
                img(src='@/assets/curso/intro/img1.svg', style="width: auto" ,alt='').m-auto
            .col
              p.mb-0 Se da la bienvenida a este componente formativo denominado “La cadena de suministros y la planificación de la producción.”, el cual inicia con el siguiente video en el que se presenta la importancia de la compra y venta de bienes y/o servicios.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
