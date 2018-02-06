import Vue from 'vue'
import Router from 'vue-router'
import { ipcRenderer } from 'electron'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'setting-page',
      component: require('@/components/SettingPage').default
    },
    {
      path: '/rest',
      name: 'rest-page',
      meta: {
        fullScreen: true
      },
      component: require('@/components/RestPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.afterEach((to, from) => {
  ipcRenderer.send('fullScreen', to.meta.fullScreen === true)
})

export default router
