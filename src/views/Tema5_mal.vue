<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Slider de imágenes2

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/Slider.svg", alt="alt")
      .col-lg-6
        .crd.bg1.p-4.mb-4
          p.mb-0 El Slider de imágenes es un componente web que permite mostrar de manera secuencial múltiples imágenes y textos. En algunos casos se puede hacer uso de componentes interactivos sencillos dentro de cada una de las diapositivas.
        p Es una secuencia de diapositivas cuyo texto es corto y se refiere únicamente a la definición, explicación o especificación de la imagen que se está mostrando. Se le dará un uso óptimo al momento de explicar gráficos estadísticos, descripción de procesos físicos, químicos o biológicos; tipos de circuitos, conexiones etc. Todo aquello donde el protagonismo lo lleve la imagen.

    Separador

    .titulo-segundo.color-acento-contenido
      h2 Estructura del componente

    .bg--gradientBlue.p-5
      SlyderB(:datos="datosSlyder")
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Slide_imagenes.txt')" target="_blank" type="application/pdf")
          span Ver código fuente

    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
            ul.lista-ul.mb-4
              li
                i.fas.fa-angle-right.txt--green
                | Titulo corto e ilustrativo (cuando aplica).
              li
                i.fas.fa-angle-right.txt--green
                | Cada diapositiva debe ir acompañada de un texto corto de máximo 40 palabras que acompañe a una  foto o ilustración.
            .tarjeta.color-primario.p-3.mb-4
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/template/document.svg").img65
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-1 Formato instruccional - slider de imágenes
                      p.mb-0 Formato de Diseño Instruccional para la creación de sliders de imágenes.
                    .col-sm-auto
                      a.boton.color-botones.texto-blanco(href="https://docs.google.com/document/d/1PPRatnr8cI2Hxkv8hzg_e3qw3N0FVQs3yvO0rZLNaJE/edit?usp=sharing" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
            .row.justify-content-start
              .col-auto
                a.anexo.bg2(href="https://drive.google.com/file/d/1xt2_2znZujBom5pjSFBXrlVJSVxbkIiT/view?usp=sharing" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Formato instruccional - muestra

</template>

<script>
export default {
  name: 'Tema5Mal',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
