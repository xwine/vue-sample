const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },  {
        path: '/arbit',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/arbit.vue'], resolve)
    }
];
export default routers;