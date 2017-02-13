<style lang="less">
  @import url(../assets/less/module.less);
  .m-user-head{
    position: relative;
    width: 100%;
    height: 4rem;
    padding-top: 1.5rem;
    background-color: #fff;
    overflow: hidden; 
    text-align: center;
    &:before{
      position: absolute;
      top: -2rem;
      left: 0;
      display: block;
      content: '';
      width: 150%;
      height: 4rem;
      border-bottom-left-radius: 40%;
      border-bottom-right-radius: 40%;
      background-color: #42b983;
      transform: translateX(-17%);
    }
    .user-head-pic{
      position: relative;
      display:block;
      margin: 0 auto;
      width: 2rem;
      height: 2rem;
      border:1px solid #fff;
      border-radius: 50%;
    }
    p{
      padding: 0.2rem 0;
      text-align: center;
    }
  }
  .m-user-nav{
    position: relative;
    margin-top: 1rem;
    &:before, &:after{
      width: 100%;
    }
    &:before{
      .border-half-top(#d9d9d9);
      top:-1px;
    }
    &:after{
      .border-half-bottom(#d9d9d9);
    }
    a{
      position: relative;
      display: block;
      padding:0 0.2rem;
      width: 100%;
      height:1.066667rem;
      line-height:1.066667rem;
      box-sizing: border-box;
      background-color: #fff;
      &:after{
        width: 100%;
        .border-half-bottom(#d9d9d9);
      }
      &:last-child:after{
        display:none;
      }
    }
  }
</style>
<template>
  <div id="user">
    <div class="m-user-head">
      <img :src="userPic" class="user-head-pic" alt="" />
      <router-link v-if="!isLogin" :to="{ name: 'login'}">您还未登录，请先登录</router-link>
      <p>{{userName}}</p>
    </div>
    <div class="m-user-body"></div>
    <div class="m-user-nav">
      <router-link :to="{ name: 'article'}">发表主题</router-link>
      <router-link :to="{ name: 'msg'}">我的消息</router-link>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'
  export default {
    name: 'user',
    components: { Toast },
    data () {
      return {
        isLogin: false,
        userName: null,
        userPic: 'https://img.alicdn.com/bao/uploaded/i1/TB1k6ZQOXXXXXbQXpXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg',
        url: 'https://cnodejs.org/api/v1/user/'
      }
    },
    mounted () {
      this.getUserData()
    },
    methods: {
      getUserData () {
        const that = this
        const name = window.localStorage.getItem('user')
        if (name) {
          console.log(name)
          that.axios.get(that.url + name).then((responses) => {
            const ret = responses.data
            console.log(ret)
            if (ret.success) {
              that.isLogin = true
              that.userName = 'ret.loginname'
              that.userPic = ret.avatar_url
            } else {
              Toast(ret.error_msg)
            }
          })
          .catch((error) => {
            Toast(error)
            console.log(error)
          })
        }
      }
    }
  }
</script>