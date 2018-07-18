const routers = [{
    path: '/index2',
    meta: {
        title: '热力图'
    },
    component: (resolve) => require(['./admin/index.vue'], resolve)
}];

export default routers;