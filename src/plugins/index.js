export default{
    install(Vue){
        Vue.component("commonTou",() => import("../components/commonTou"))
        Vue.component("myInput",() => import("../components/my-input"))
        Vue.component("classCommon",() => import("../views/classCommon"))
    }
}