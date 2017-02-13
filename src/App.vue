<style lang="less">
@import url('assets/less/reset.less');
</style>
<template>
  <div id="app">
    <router-view></router-view>
    <tabbar :tabItem="tab"></tabbar>  
  </div>
</template>

<script>
import Tabbar from './components/tabbar.vue'
export default {
  name: 'app',
  components: { Tabbar },
  data () {
    return {
      tab: [{
        icon: 'icon-home',
        tit: '首页',
        linkName: 'index'
      }, {
        icon: 'icon-new',
        tit: '发表',
        linkName: 'article'
      }, {
        icon: 'icon-msg',
        tit: '消息',
        linkName: 'msg'
      }, {
        icon: 'icon-user',
        tit: '我的',
        linkName: 'user'
      }]
    }
  }
}
</script>

