import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog.vue')
  },
  {
    path: '/:id',
    name: 'Article',
    props: route => ({ id: parseInt(route.params.id) }),
    component: () => import(/* webpackChunkName: "article" */ '@/views/Article.vue'),
    // beforeEnter(to, from){
    //   const exists = sourceData.destinations.find(
    //     destination => destination.id === parseInt(to.params.id)
    //   )

    //   if (!exists) return { 
    //     name: 'NotFound',
    //     // params: { pathMatch: to.path.split('/').slice(1) },
    //     // query: to.query,
    //     // hash: to.hash
    //   }
    // },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
