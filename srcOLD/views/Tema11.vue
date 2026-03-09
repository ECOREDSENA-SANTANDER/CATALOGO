<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 11
        h1 Audio
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/audio/audio_00.svg", alt="alt")
        .col-lg-6
          .crd.bg1.p-4.mb-4
            p.mb-0 Archivo en formato MP3 que se puede combinar con otros componentes interactivos para reforzar la explicación de un tema o concepto. Por ejemplo, se puede utilizar en conjunto con un slider de diapositivas para dar lugar a un sonoviso.  
  
          //.tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/template/document.svg").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Formato instruccional - Audio
                    p.mb-0 Formato de Diseño Instruccional para la implementación de audios.
                  .col-sm-auto
                    a.boton.color-botones.texto-blanco(href="https://docs.google.com/document/d/11fnsHlnUr7UEYg6ePqdXt2ngB_1xo4X_ChKeFEcInlE/edit?usp=sharing" target="_blank")
                      span Descargar
                      i.fas.fa-file-download      
  

      .row
        .col-md-6
          TarjetaAudio.color-primario.mb-4(
            texto="Texto de muestra  "
            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-md-6  
          TarjetaAudio.color-secundario.mb-4(
            texto="Texto de muestra "
            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
          )
        .col-md-6
          TarjetaAudio.color-acento-contenido.mb-4(
            texto="Texto de muestra "
            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
            no-barra
          )
        .col-md-6
          TarjetaAudio.color-acento-botones.mb-4(
            texto="Texto de muestra "
            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
          )
      
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco.b--rad(:href="obtenerLink('/downloads/t11/Audio.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      
      hr.my-5

      .titulo-segundo.color-acento-contenido
        h2 Ejemplos destacados
  
      img(src='@/assets/curso/temas/audio/15.svg', alt='Texto que describa la imagen')
      .row.justify-content-center.g-0.mb-4
        .col-lg-4
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-contenido.mb-3(
              texto="Mom, can you come with me to the doctor's office?"
              :audio="require('@/assets/curso/temas/audio/5.mp3')"
          )
              p.mb-0 Mamá, ¿puedes venir conmigo al consultorio del doctor?
        .col-lg-4
          .tarjeta.clr--pink02.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="How are you doing, Doctor? Nice to meet you."
              :audio="require('@/assets/curso/temas/audio/6.mp3')"
            )
              p.mb-0 ¿Cómo está, doctor? Es un placer conocerlo.
        .col-lg-4
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="Ok, Coach. I will follow your advice."
              :audio="require('@/assets/curso/temas/audio/7.mp3')"
            )
              p.mb-0 Muy bien, entrenador. Voy a seguir su consejo.
      
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco.b--rad(:href="obtenerLink('/downloads/t11/Audio2.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
    
      

      
  
  </template>

<script>
export default {
  name: 'Tema11',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
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

<style lang="sass">
.clr--pink
  background-color: #FFAFB2
.clr--pink02
  background-color: #FFDFE0
</style>
