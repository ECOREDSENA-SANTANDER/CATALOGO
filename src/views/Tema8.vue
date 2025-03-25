<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Líneas de tiempo
  
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/Linea_tiempo.svg", alt="alt")
        .col-lg-6
          .crd.bg1.p-4.mb-4
            p.mb-0 Una línea del tiempo es una representación gráfica de una secuencia cronológica de los eventos de una historia, proceso o narración. Las líneas del tiempo, que se presentan en formato horizontal o vertical, les brinda a los usuarios un medio simplificado para comprender cómo los distintos eventos, personas y acciones desempeñaron un rol, o lo desempeñarán, en un proceso o período determinado. Las líneas del tiempo también se pueden combinar con texto y gráficos para producir infografías, que sirven para presentar fácilmente estadísticas, eventos históricos y otra información.
  
          p Se presenta la información en una secuencia lineal aportando datos específicos y concretos (con la posibilidad de estar cronológicamente organizados) acompañados, cada uno, de una imagen o ícono. En este recurso es posible clasificar la información a partir de: 
          .row.justify-content-start.align-items-center.ps-3
            .col-lg-6        
              ul.lista-ul--color      
                li
                  i.lista-ul__vineta.txt--green
                  | Palabras clave 
                li
                  i.lista-ul__vineta.txt--green
                  |  Periodos de tiempo 
                li
                  i.lista-ul__vineta.txt--green
                  | Etapas 
                li
                  i.lista-ul__vineta.txt--green
                  | Fases             
  

      Separador
      #t_8_1.titulo-segundo.color-acento-contenido
        h2 8.1 Línea de tiempo - vertical
      
      //h3.titulo-tercero Tipo 1
      LineaTiempoE.color-primario.mb-3
        .row(titulo="2014 - Present" subtitulo="Title, Company")
          .col-lg-6.mb-4.mb-lg-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
        .row(titulo="2014 - Present" subtitulo="Title, Company")
          .col-lg-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen      
          .col-lg-6.mb-4.mb-lg-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t8/LineaTiempoE.txt')" target="_blank" type="application/pdf")
            span Ver código fuente

      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones       
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              p Las líneas del tiempo están conformados por cuatro componentes básicos:
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-angle-right.txt--green
                  | Fechas: Marcar cuando un evento específico tiene lugar en una línea del tiempo.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Descripciones: Describir un evento determinado.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Encabezados (opcionales): Aportan más contexto en una línea del tiempo cuando se los agrega junto con una descripción.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Imágenes (optativas): Añaden interés gráfico e información adicional.
              .tarjeta.color-primario.p-3.mb-4
                .row.justify-content-around.align-items-center
                  .col-auto
                    img(src="@/assets/template/document.svg").img65
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1 Formato instruccional - línea de tiempo
                        p.mb-0 Formato de Diseño Instruccional para la creación de una línea de tiempo. 
                      .col-sm-auto
                        a.boton.color-botones.texto-blanco(href="https://docs.google.com/document/d/1f4bPp_jRW5aIfr-p7DORAtjSh_EB787rw67z0VBF2ew/edit?usp=sharing" target="_blank")
                          span Descargar
                          i.fas.fa-file-download   
              .row.justify-content-start
                .col-auto
                  a.anexo.bg2(href="https://drive.google.com/file/d/1d8bzZ4-G9sGMdbtpHMS3Q-xVXlvythoQ/view?usp=sharing" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Formato instruccional - muestra        
  

      Separador
      #t_8_2.titulo-segundo.color-acento-contenido
        h2 8.2 Línea de tiempo - horizontal
  
      .tarjeta.tarjeta--gris.p-4.mb-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="1761")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.          
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen    
          .row(titulo="1798")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.        
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen  
          .row(titulo="1887")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.          
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
      
      .row.justify-content-center.mb-5
        .col-auto
          a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t8/LineaTiempoC.txt')" target="_blank" type="application/pdf")
            span Ver código fuente
      
      .row.mb-5
        .col-lg-12.order-2.order-lg-1
          TabsA.color-acento-botones       
            .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
              p Las líneas del tiempo están conformados por cuatro componentes básicos:
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-angle-right.txt--green
                  | Fechas: Marcar cuando un evento específico tiene lugar en una línea del tiempo.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Descripciones: Describir un evento determinado.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Encabezados (opcionales): Aportan más contexto en una línea del tiempo cuando se los agrega junto con una descripción.
                li 
                  i.fas.fa-angle-right.txt--green
                  | Imágenes (optativas): Añaden interés gráfico e información adicional.
              .tarjeta.color-primario.p-3.mb-4
                .row.justify-content-around.align-items-center
                  .col-auto
                    img(src="@/assets/template/document.svg").img65
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1 Formato instruccional - línea de tiempo
                        p.mb-0 Formato de Diseño Instruccional para la creación de una línea de tiempo. 
                      .col-sm-auto
                        a.boton.color-botones.texto-blanco(href="https://docs.google.com/document/d/1f4bPp_jRW5aIfr-p7DORAtjSh_EB787rw67z0VBF2ew/edit?usp=sharing" target="_blank")
                          span Descargar
                          i.fas.fa-file-download   
              .row.justify-content-start
                .col-auto
                  a.anexo.bg2(href="https://drive.google.com/file/d/1oqnS7wrYfximsJfBX5I7WobKelEWW9k1/view?usp=sharing" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Formato instruccional - muestra    


  </template>

<script>
import LineaTiempoA from '../components/LineaTiempoA.vue'
import LineaTiempoB from '../components/LineaTiempoB.vue'
import LineaTiempoD from '../components/LineaTiempoD.vue'

export default {
  name: 'Tema8',
  components: {
    LineaTiempoA,
    LineaTiempoB,
    LineaTiempoD,
  },
  data: () => ({
    // variables de vue
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
    ],
    datosLineaTiempoD: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
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
