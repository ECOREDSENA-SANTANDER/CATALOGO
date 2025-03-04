import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from 'ecored-pkg-fliz/plugin/components/Inicio.vue'
import Curso from 'ecored-pkg-fliz/plugin/components/plantilla/Curso.vue'
import Glosario from 'ecored-pkg-fliz/plugin/components/Glosario.vue'
import Referencias from 'ecored-pkg-fliz/plugin/components/Referencias.vue'
import Creditos from 'ecored-pkg-fliz/plugin/components/Creditos.vue'
import Complementario from 'ecored-pkg-fliz/plugin/components/Complementario.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/curso',
      name: 'curso',
      component: Curso,
      redirect: {
        name: 'tema1',
      },
      children: [
        {
          path: 'tema1',
          name: 'tema1',
          component: () =>
            import(/* webpackChunkName: "tema1" */ '../views/Tema1.vue'),
        },
        {
          path: 'tema2',
          name: 'tema2',
          component: () =>
            import(/* webpackChunkName: "tema2" */ '../views/Tema2.vue'),
        },
        {
          path: 'tema3',
          name: 'tema3',
          component: () =>
            import(/* webpackChunkName: "tema3" */ '../views/Tema3.vue'),
        },
        {
          path: 'tema4',
          name: 'tema4',
          component: () =>
            import(/* webpackChunkName: "tema4" */ '../views/Tema4.vue'),
        },
        {
          path: 'tema5',
          name: 'tema5',
          component: () =>
            import(/* webpackChunkName: "tema5" */ '../views/Tema5_mal.vue'),
        },
        {
          path: 'tema6',
          name: 'tema6',
          component: () =>
            import(/* webpackChunkName: "tema6" */ '../views/Tema6.vue'),
        },
        {
          path: 'tema7',
          name: 'tema7',
          component: () =>
            import(/* webpackChunkName: "tema7" */ '../views/Tema7.vue'),
        },
        {
          path: 'tema8',
          name: 'tema8',
          component: () =>
            import(/* webpackChunkName: "tema8" */ '../views/Tema8.vue'),
        },
        {
          path: 'tema9',
          name: 'tema9',
          component: () =>
            import(/* webpackChunkName: "tema9" */ '../views/Tema9.vue'),
        },
        {
          path: 'tema10',
          name: 'tema10',
          component: () =>
            import(/* webpackChunkName: "tema10" */ '../views/Tema10.vue'),
        },
      ],
    },
    {
      path: '/creditos',
      name: 'creditos',
      component: Creditos,
    },
  ],
  scrollBehavior(to, from) {
    if (to.hash) {
      const newRoute = {
        selector: to.hash,
        offset: { y: 100 },
        behavior: 'smooth',
      }
      if (to.name === from.name) {
        return newRoute
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(newRoute)
          }, 500)
        })
      }
    } else {
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'auto',
        })
      }, 100)
    }
  },
})

export default router
