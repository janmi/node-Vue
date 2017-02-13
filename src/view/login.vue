<style lang="less">
  .m-login{
    position: fixed;
    top: 0;
    left: 0;
    display:flex;
    align-items: center;
    justify-content:center;    
    flex-flow: column;
    width:100%;
    height: 100%;
    h2{
      width:100%;
      margin-bottom: 1rem;
      text-align: center;
      font-size: 0.426667rem;
    }
    .m-login-body{
      width:100%;
      padding:10%;
      box-sizing: border-box;
      background-color: #fff;
    }
    .m-login-item{
      width:100%;
      margin-bottom: 1rem;
      input{
        border-radius: 0.08rem;
        width: 100%;
        padding:0.2rem 0.066667rem;
        box-sizing: border-box;
        outline: none;
      }
      a{
        display:inline-block;
        width: 100%;
        padding:0.2rem 0;
        border-radius: 0.08rem;
        color: #fff;
        text-align: center;
        background-color: #42b983;
      }
    }
  }
</style>
<template>
  <div id="login" class="m-login">
    <div class="m-login-body">
      <h2>登录</h2>
      <div class="m-login-item">
        <input type="text" v-model="accesstoken" placeholder="请输入Access Token" />
      </div>
      <div class="m-login-item">
        <a href="javascript:;" @click="login">登录</a>
      </div>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'
  export default {
    name: 'login',
    components: { Toast },
    data () {
      return {
        accesstoken: '',
        url: 'https://cnodejs.org/api/v1/accesstoken'
      }
    },
    methods: {
      login () {
        const that = this
        if (that.accesstoken === '') {
          Toast('请出入Access Token')
          return false
        }
        that.axios.post(that.url, {accesstoken: that.accesstoken, isLogin: true}).then((responses) => {
          const ret = responses.data
          if (ret.success) {
            window.localStorage.setItem('user', ret.loginname)
            that.$router.push({name: 'user'})
          } else {
            Toast(ret.error_msg)
          }
        })
        .catch((error) => {
          Toast(error)
        })
      }
    }
  }
</script>