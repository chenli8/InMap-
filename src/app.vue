<style>
.layout{
    background:red;
}
</style>
<template>
    <div class='layout'>
        <Row type="flex" class="layout-row">
            <Col :span="spanLeft" class="layout-menu-left">
                <Menu :active-name="activeName" theme="dark" width="auto" @on-select="changeMenu">
                    <div class="layout-logo-left"></div>
                    <MenuItem v-for="router in routers" :name="router.path">
                        <Icon :type="router.icon" :size="iconSize"></Icon>
                        <span class="layout-text">{{router.name}}</span>
                    </MenuItem>
                </Menu>
            </Col>
            <Col :span="spanRight" class="flex flex-v">
                <div class="layout-header">
                    <Button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
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
                activeName: 'sensorMap',
                routers: [{
                    icon: 'ios-navigate',
                    path: 'sensorMap',
                    name: '散点地图分布',
                    router: 'sensor-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'lightMap',
                    name: '光感地图分布',
                    router: 'light-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'pathMap',
                    name: '轨迹',
                    router: 'path-map'
                }
                ]
            }
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