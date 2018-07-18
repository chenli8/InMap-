<style lang="less">
    html,
    body{
        height: 100%;
    }
    ul,li{
        list-style:none;
        color:rgba(255, 255, 255, 0.7);
        cursor:pointer;
    }
.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.flex-v {
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.flex-1 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.flex-align-center {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.flex-pack-center {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.flex-pack-justify {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}


.box-sizing {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        height: 100%;
        border-radius: 4px;
        .layout-row{
            height: 100%;
        }
    }
    .layout-breadcrumb{
       // padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 600px;
        margin: 0px 0 0px 15px;
        overflow: hidden;
        background: #fff;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
        height: 48px;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
        .layout-menu-left{
        float: left;
    height: 100%;
    width: 15%;
    padding-top:20px;
    box-sizing:border-box;
    }
    .ivu-col-span-19{
        float: right;
    height: 100%;
    width: 85%;
    }
    .ivu-menu{
        margin-left:-40px;
    }
    .ivu-menu-item{
        height:35px;
        text-align:center;
        line-height:35px;
    }
    .ivu-menu-item-active{
     color: rgb(255, 255, 255);
     background: rgb(73, 80, 96);
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex" class="layout-row">
            <Col :span="spanLeft" class="layout-menu-left">
                <Menu :active-name="activeName" theme="dark" width="auto" @on-select="changeMenu">
                    <MenuItem v-for="router in routers" :name="router.path" :key='router.name'>
                        <Icon :type="router.icon" :size="iconSize" ></Icon>
                        <span class="layout-text" >{{router.name}}</span>
                    </MenuItem>
                </Menu>
            </Col>
            <Col :span="spanRight" class="flex flex-v">
                <div class="layout-content flex-1">
                  <router-view></router-view>
                </div>
                <div class="layout-copy">
                    2011-2017 &copy; TalkingData
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
   export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19,
                activeName: 'dot1',
                routers: [{
                    icon: 'ios-navigate',
                    path: 'dot1',
                    name: '散点1',
                    router: 'sensor-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'dot2',
                    name: '散点2',
                    router: 'light-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'dot3',
                    name: '散点3',
                    router: 'path-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'dot4',
                    name: '散点4',
                    router: 'sensor-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'dot5',
                    name: '散点5',
                    router: 'light-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'dot6',
                    name: '散点6',
                    router: 'path-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'dot7',
                    name: '散点7',
                    router: 'path-map'
                },
                 {
                    icon: 'ios-navigate',
                    path: 'boundMap1',
                    name: '围栏1',
                    router: 'path-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'boundMap2',
                    name: '围栏2',
                    router: 'path-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'boundMap3',
                    name: '围栏3',
                    router: 'path-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'boundMap4',
                    name: '围栏4',
                    router: 'path-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'boundMap5',
                    name: '围栏5',
                    router: 'path-map'
                },{
                    icon: 'ios-navigate',
                    path: 'boundMap6',
                    name: '围栏6',
                    router: 'path-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'honeyMap',
                    name: '蜂窝',
                    router: 'path-map'
                },
                 {
                    icon: 'ios-navigate',
                    path: 'sensorMap',
                    name: '热力图',
                    router: 'path-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'gridMap1',
                    name: '聚合1',
                    router: 'path-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'gridMap2',
                    name: '聚合2',
                    router: 'path-map'
                },
                
                ]
            }
        },
        components:{
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
            changeMenu(active){
                this.$router.push({
                    path: '/' + active
                })
            }
        }
    }
</script>