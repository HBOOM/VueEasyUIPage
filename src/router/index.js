import Vue from 'vue'
import Router from 'vue-router'
import defaultCom from '@/components/default'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultCom
    }
  ]
})
