// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Grid from './components/Grid.vue'

const history = createWebHistory()

const routes = [
  { path: '/', component: Grid, props: true },
  { path: '/photo/:id', component: Grid, props: true }
]
const router = createRouter({ routes, history })
export default router;