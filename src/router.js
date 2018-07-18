const routers = [{
        path: '/dot1',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/dotMap/dotMap1.vue'], resolve)
    }, {
        path: '*',
        redirect: '/dot1'
    },
    {
        path: '/dot2',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/dotMap/dotMap2.vue'], resolve)
    },
    {
        path: '/dot3',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/dotMap/dotMap3.vue'], resolve)
    },
    {
        path: '/dot4',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/dotMap/dotMap4.vue'], resolve)
    },
    {
        path: '/dot5',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/dotMap/dotMap5.vue'], resolve)
    },
    {
        path: '/dot6',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/dotMap/dotMap6.vue'], resolve)
    },
    {
        path: '/dot7',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/dotMap/dotMap7.vue'], resolve)
    },
    {
        path: '/boundMap1',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/boundMap/boundMap1.vue'], resolve)
    }, {
        path: '/boundMap2',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/boundMap/boundMap2.vue'], resolve)
    },
    {
        path: '/boundMap3',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/boundMap/boundMap3.vue'], resolve)
    },
    {
        path: '/boundMap4',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/boundMap/boundMap4.vue'], resolve)
    },
    {
        path: '/boundMap5',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/boundMap/boundMap5.vue'], resolve)
    },
    {
        path: '/boundMap6',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/boundMap/boundMap6.vue'], resolve)
    },
    {
        path: '/gridMap1',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/gridMap/gridMap.vue'], resolve)
    },
    {
        path: '/gridMap2',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/gridMap/gridMap2.vue'], resolve)
    },
    {
        path: '/honeyMap',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/honeyMap/honeyMap.vue'], resolve)
    },
    {
        path: '/sensorMap',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/sensorMap/map.vue'], resolve)
    },

];

export default routers;