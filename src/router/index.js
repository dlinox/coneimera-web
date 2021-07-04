import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/Home.vue'

import Actividades from '../views/Actividades.vue'
import Concursos from '../views/Concursos.vue'
import Cronograma from '../views/Cronograma.vue'
import Embajadores from '../views/Embajadores.vue'
import Sponsors from '../views/Sponsors.vue'
import MiniCursos from '../views/MiniCursos.vue'
import Ponencias from '../views/Ponencias.vue'
//rutas temporales
import Papers from '../views/Concursos/Paper.vue'
import Proyectos from '../views/Concursos/Proyectos.vue'
import Programacion from '../views/Concursos/Programacion.vue'
import Drones from '../views/Concursos/Drones.vue'
import Plc from '../views/Concursos/Plc.vue'
import Contactadores from '../views/Concursos/Contactadores.vue'
import Conocimientos from '../views/Concursos/Conocimientos.vue'


Vue.use(VueMeta)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actividades',
    name: 'Actividades',
    component: Actividades
  },
  {
    path: '/concursos',
    name: 'Concursos',
    component: Concursos
  },
  {
    path: '/cronograma',
    name: 'Cronograma',
    component: Cronograma
  },
  {
    path: '/embajadores',
    name: 'Embajadores',
    component: Embajadores
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: Sponsors
  },
  {
    path: '/minicursos',
    name: 'MiniCursos',
    component: MiniCursos
  },
  {
    path: '/ponencias',
    name: 'Ponencias',
    component: Ponencias
  },

  //rutas temporales
  {
    path: '/concurso-de-papers',
    name: 'Paper',
    component: Papers
  },
  {
    path: '/concurso-de-proyectos',
    name: 'Poyectos',
    component: Proyectos
  },
  {
    path: '/concurso-de-programacion',
    name: 'Programacion',
    component: Programacion
  },
  {
    path: '/concurso-de-drones',
    name: 'Drones',
    component: Drones
  },
  {
    path: '/concurso-de-programacion-en-plc',
    name: 'Plc',
    component: Plc
  },
  {
    path: '/concurso-de-contactadores',
    name: 'Contactadores',
    component: Contactadores
  },
  {
    path: '/concurso-de-conocimientos',
    name: 'Conocimientos',
    component: Conocimientos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
