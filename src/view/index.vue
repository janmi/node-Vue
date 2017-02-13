<!-- 首页 -->
<style lang="less"></style>
<template>
  <div id="index">
    <navbar @tab="tabGetData" :nav="navs"></navbar>
    <list :list="lists"></list>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import List from '../components/list.vue'

export default {
  name: 'app',
  components: {
    Navbar, List
  },
  data () {
    return {
      navs: {
        active: 0,
        items: [
          {
            name: '全部',
            type: ''
          }, {
            name: '精华',
            type: 'good'
          }, {
            name: '分享',
            type: 'share'
          }, {
            name: '问答',
            type: 'ask'
          }, {
            name: '招聘',
            type: 'job'
          }]
      },
      lists: []
    }
  },
  created () {
    this.getListData()
  },
  methods: {
    getListData (type = '') {
      const that = this
      that.axios.get('https://cnodejs.org/api/v1/topics?tab=' + type)
      .then(function (response) {
        const ret = response.data
        if (ret.success) {
          that.lists = ret.data
        } else {
          console.log(ret.error_msg)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    tabGetData (options) {
      this.getListData(options.txt)
      this.navs.active = options.index
    }
  }
}
</script>

