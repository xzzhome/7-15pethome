import Vue from 'vue'
import Router from 'vue-router'
import helloWorld from "../components/HelloWorld";
import EleTest from "../components/EleTest";
import EleTest2 from "../components/EleTest2";
import user from "../components/User";



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: helloWorld},
    {path: '/ele', component: EleTest},
    {path: '/ele2', component: EleTest2},
    {path: '/user', component: user},
  ]
})
