import Vue from 'vue'
import Router from 'vue-router'
import DragBlock from '@/components/DragBlock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DragBlock',
      component: DragBlock
    }
  ]
})
