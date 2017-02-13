<style lang="less">
@import url(../assets/less/module.less);
  .new-article-tit {
    padding:0.266667rem;
    text-align: center;
    font-size: 0.373333rem;
  }
  .article-form{
    height:100%;
    font-size: 0.373333rem;
    background-color: #fff;
    .article-form-item{
      position: relative;
      padding:0.2rem;
      &:after{
        width:100%;
        .border-half-bottom(#d9d9d9);
      }
      .article-form-txt{
        width:100%;
        padding: 0.2rem 0.2rem;
        border:none;
        outline: none;
        box-sizing: border-box;
      }
      .article-form-textarea{
        width:100%;
        min-height: 6rem;
        padding: 0.066667rem 0.2rem;
        border:none;
        box-sizing: border-box;
        resize: none;
        outline: none;
      }
      .article-form-tab{
        display:inline-block;
        padding:0.133333rem 0.466667rem;
        margin-right: 0.266667rem;
        border: 1px solid #d9d9d9;
        border-radius: 0.08rem;
        color: #42b983;
        background-color: #fff;
        input{
          display:none;
        }
      }
      .article-form-tab.active{
        color: #fff;
        background-color: #42b983;
      }
    }
  }
  .article-form-btn{
    position: fixed;
    bottom:0;
    left: 0;
    width:100%;
    font-size: 0.373333rem;
    a{
      display: block;
      width: 100%;
      height:1.066667rem;
      line-height:1.066667rem;
      text-align: center;
      color: #fff;
      background-color: #42b983;
    }
  }
</style>
<template>
  <div id="new-article">
    <h2 class="new-article-tit">发布新主题</h2>
    <div class="article-form">
      <div class="article-form-item">
        <input class="article-form-txt" v-model="title" type="text" placeholder="标题..." />
      </div>
      <div class="article-form-item">
        <label for="share" class="article-form-tab" :class="{'active': tab === 'share'}">
          分享
          <input type="radio" id="share" value="share" v-model="tab">
        </label>
        <label for="ask" class="article-form-tab" :class="{'active': tab === 'ask'}">
          问答
          <input type="radio" id="ask" value="ask" v-model="tab">
        </label>
        <label for="job" class="article-form-tab" :class="{'active': tab === 'job'}">
          招聘
          <input type="radio" id="job" value="job" v-model="tab">
        </label>
      </div>
      <div class="article-form-item">
        <textarea class="article-form-textarea" v-model="content" name="" id="" placeholder="内容..."></textarea>
      </div>
    </div>
    <div class="article-form-btn">
      <a href="javascript:;" @click="postData">发布</a>
    </div>
  </div>
</template>
<script>
  import { Toast, MessageBox } from 'mint-ui'
  export default {
    name: 'newArticle',
    components: { Toast, MessageBox },
    data () {
      return {
        title: '',
        tab: '',
        content: '',
        url: 'https://cnodejs.org/api/v1/topics'
      }
    },
    methods: {
      openConfirm (id) {
        const that = this
        MessageBox({
          title: '提示',
          message: '发布成功',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: '马上查看',
          cancelButtonText: '在发一篇'
        }).then((action) => {
          console.log(action)
          if (action === 'confirm') {
            that.$router.push({name: 'detail', params: { id: id }})
          } else {
            that.title = ''
            that.tab = ''
            that.content = ''
          }
        }).catch((x) => {
          console.log(x)
        })
      },
      postData () {
        const that = this
        // that.openConfirm('ret.topic_id')
        const options = {
          title: that.title,
          tab: that.tab,
          content: that.content,
          loadingTxt: '提交中...'
        }
        if (!that.title) {
          Toast('请填写标题')
          return false
        }

        if (!that.tab) {
          Toast('请选择发布类型')
          return false
        }

        if (!that.content) {
          Toast('请填写内容')
          return false
        }
        that.axios.post(that.url, options).then((responses) => {
          const ret = responses.data
          if (ret.success) {
            that.openConfirm(ret.topic_id)
          } else {
            Toast(ret.error_msg)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>