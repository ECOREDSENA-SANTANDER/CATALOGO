<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Pestañas o Tabs
  
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/Pestanas.svg", alt="alt")
        .col-lg-6
          .crd.clr-paleYellow.p-4.mb-4
            p.mb-0 La navegación por pestañas se refiere a la posibilidad de que varios paneles con información estén contenidos dentro de una sola ventana principal, usando pestañas para alternar entre ellos.
  
          p Se presenta la explicación o información en una especie de panel que provee toda la información en la pantalla principal conservando la introducción estática y ahondando a partir de pestañas, permitiendo la navegación entre ellas. Es recomendable usarla en:
          .row.justify-content-center.align-items-center.ps-3
            .col-lg-6
              ul.lista-ul--color
                li
                  i.lista-ul__vineta.txt--green
                  | Tipologías
                li
                  i.lista-ul__vineta.txt--green
                  | Etapas
                li
                  i.lista-ul__vineta.txt--green
                  | Definiciones
            .col-lg-6
              ul.lista-ul--color
                li
                  i.lista-ul__vineta.txt--green
                  | Procesos
                li
                  i.lista-ul__vineta.txt--green
                  | Secciones/subtemas
                li
                  i.lista-ul__vineta.txt--green
                  | Nomenclaturas
  
            p Es útil cuando se abordan temas como normas, decretos, leyes, condiciones etc.
  
  
      Separador
      #t_7_1.titulo-segundo.color-acento-contenido
        h2 7.1 Pestañas verticales
  
      TabsA.color-primario.mb-4
        .tarjeta.color-acento-contenido--borde.p-4(titulo="PASO 1")
          h4 PASO 1: The splendor
          p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of
            strong user style sheets
            |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .tarjeta.color-acento-contenido--borde.p-4(titulo="PASO 2")
          h4 PASO 2: The splendor
          .row
            .col-xl-6.mb-4
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-xl-6
              p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of
                strong user style sheets
                |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t7/TabsA.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      
      .row
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto de máximo de 4 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | Cada diapositiva debe ir acompañada de un texto de maximo 140 palabras que pueden ir acompañada de una  foto o ilustración.
              //.tarjeta.color-primario.p-3.mb-4
                .row.justify-content-around.align-items-center
                  .col-auto
                    img(src="@/assets/template/document.svg").img65
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1 Formato instruccional - Pestañas o tabs
                        p.mb-0 Formato de Diseño Instruccional para la creación de pestañas o tabs.
                      .col-sm-auto
                        a.boton.color-botones.texto-blanco(href="https://docs.google.com/document/d/1QOVDmKmX036aLaKuyGMBevxp_fjucW5ShQiXjb3ONtM/edit?usp=sharing" target="_blank")
                          span Descargar
                          i.fas.fa-file-download
              //.row.justify-content-start
                .col-auto
                  a.anexo.bg2(href="https://drive.google.com/file/d/1xk7zYRKzXEl5bDRpXRwLytK_kgMW5FY7/view?usp=sharing" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Formato instruccional - muestra
  

      Separador
      #t_7_2.titulo-segundo.color-acento-contenido
        h2 7.2 Pestañas horizontales - sencillas
  
      TabsC.color-primario.mb-4
        .py-3.py-md-4(titulo="The splendor of the mystery")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Celebrate your failures 1
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
        .py-3.py-md-4(titulo="Don’t lie to yourself")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6
              h4 Celebrate your failures 2
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .py-3.py-md-4(titulo="The splendor of the mystery")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Celebrate your failures 3
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t7/TabsC.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      
      .row
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto de máximo de 6 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | Cada diapositiva debe ir acompañada de un texto de maximo sugerido de 140 palabras que pueden ir acompañada de una  foto o ilustración.
              //.tarjeta.color-primario.p-3.mb-4
                .row.justify-content-around.align-items-center
                  .col-auto
                    img(src="@/assets/template/document.svg").img65
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1 Formato instruccional - Pestañas o tabs
                        p.mb-0 Formato de Diseño Instruccional para la creación de pestañas o tabs.
                      .col-sm-auto
                        a.boton.color-botones.texto-blanco(href="https://docs.google.com/document/d/1-1ZkRCH5WZ7uZL3XgwvsahD1WGvRPsLGM3E1kIXHJU8/edit?usp=sharing" target="_blank")
                          span Descargar
                          i.fas.fa-file-download
              //.row.justify-content-start
                .col-auto
                  a.anexo.bg2(href="https://drive.google.com/file/d/1JrsYPz5-vLHIv6LFhfljklTCqYp6rb22/view?usp=sharing" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Formato instruccional - muestra
  

      Separador
      #t_7_3.titulo-segundo.color-acento-contenido
        h2 7.3 Pestañas horizontales - iconos
  
      TabsB.color-primario.mb-4
        .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Celebrate your failures 1
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
        .py-4.py-md-5(titulo="Don’t lie to yourself" :icono="require('@/assets/componentes/ej-04.svg')")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6
              h4 Celebrate your failures 2
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t7/TabsB.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              ul.lista-ul.mb-4
                li
                  i.fas.fa-angle-right.txt--green
                  | Titulo corto de máximo de 6 palabras
                li
                  i.fas.fa-angle-right.txt--green
                  | Icono asociado al título
                li
                  i.fas.fa-angle-right.txt--green
                  | Cada diapositiva debe ir acompañada de un texto de maximo sugerido de 140 palabras que pueden ir acompañada de una  foto o ilustración.
              //.tarjeta.color-primario.p-3.mb-4
                .row.justify-content-around.align-items-center
                  .col-auto
                    img(src="@/assets/template/document.svg").img65
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1 Formato instruccional - Pestañas o tabs
                        p.mb-0 Formato de Diseño Instruccional para la creación de pestañas o tabs.
                      .col-sm-auto
                        a.boton.color-botones.texto-blanco(href="https://docs.google.com/document/d/1-1ZkRCH5WZ7uZL3XgwvsahD1WGvRPsLGM3E1kIXHJU8/edit?usp=sharing" target="_blank")
                          span Descargar
                          i.fas.fa-file-download
              //.row.justify-content-start
                .col-auto
                  a.anexo.bg2(href="https://drive.google.com/file/d/1c5aIZTy2B928AM10e0blNUS2_GU7X8Xg/view?usp=sharing" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Formato instruccional - muestra


</template>

<script>
export default {
  name: 'Tema7',
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
