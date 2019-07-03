import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
    {
        path: '/',
        redirect:'/partOne',
        children:[
            {
                path:'partOne',
                name:'partOne',
                component: () => import('@/views/PartOne')
            },
            {
                path:'partTwo',
                name:'partTwo',
                component: () => import('@/views/PartTwo')
            },
            {
                path:'partThree',
                name:'partThree',
                component: () => import('@/views/PartThree')
            },
            {
                path:'partFour',
                name:'partFour',
                component: () => import('@/views/PartFour')
            },
            {
                path:'partFive',
                name:'partFive',
                component: () => import('@/views/PartFive')
            }
        ],
        component: Home
    },
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})

