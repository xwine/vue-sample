import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './assets/libs/util';
import App from './app.vue';
import comp from './assets/component/mine/index'

Vue.use(VueRouter);
Vue.use(comp);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    Util.title(to.meta.title);
    next();
});



new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
