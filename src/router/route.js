import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import StudentComp from "@/components/StudentComp";
import CompA from "@/components/CompA";
import CompB from "@/components/CompB";
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:StudentComp
        },
        {
            path:'/compa',
            component:CompA
        },
        {
            path:'/compb',
            component:CompB
        },
        {//默认路由
            path:'/',
            redirect:'/home'
        }
    ]
})