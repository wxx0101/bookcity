import Vue from 'vue'
import Router from 'vue-router'
import Bookcity from "../views/Bookcity"
import Bookshelf from "../views/Bookshelf"
import btnInput from "../views/btnInput"
import xiangQing from "../views/my-xiangqing"
import myRead from "../views/my-read"
import myLogin from "../views/my-login"

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      name: 'Bookcity',
      component: Bookcity
    },
    {
      path: '/Bookshelf',
      name: 'Bookshelf',
      component: Bookshelf
    },
    {
      path: '/btnInput',
      name: 'btnInput',
      component: btnInput
    },
    {
      path: '/myLogin',
      name: 'myLogin',
      component: myLogin
    },
    {
      path: '/xiangQing/:id',
      name: 'xiangQing',
      component: xiangQing
    },
    {
      path: '/myRead',
      name: 'myRead',
      component: myRead
    },
  ]
})
route.beforeEach((to,from,next)=>{
  if(to.path == '/myRead'){
    if(window.sessionStorage.username){
      next()
    }else{
      next('/myLogin')
    }
  }else{
    next()
  }
})
route.afterEach((to,from) => {
      document.title = "哈哈"
})


export default route