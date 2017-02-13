<!-- 文章详情页 -->
<style lang="less">
  @import url(../assets/less/module.less);
  .detail-head{
    position: relative;
    padding: 0.2rem;
    background-color: #fff;
    &:after{
      width: 100%;
      .border-half-bottom(#d9d9d9);
    }
    h2{
      margin-bottom: 0.4rem;
      font-size: 0.426667rem;
    }
    p{
      margin-bottom: 0.2rem;
      span{
        margin-right: 0.4rem;
      }
    }
  }
  .detail-body{
    position: relative;
    padding:0.2rem;
    padding-bottom: 1rem;
    font-size: 0.373333rem;
    background-color: #fff;
    word-break: break-word;
    &:after{
      width: 100%;
      .border-half-bottom(#d9d9d9);
    }
    img{
      max-width: 100%;
    }
  }
  .detail-foot{
    background-color: #fff;
  }
  .reply-total{
    position: relative;
    padding:0.2rem;
    text-align: right;
    &:after{
      width: 100%;
      .border-half-bottom(#d9d9d9);
    }
  }
  .reply-list{
    padding:0.2rem;
    .reply-item{
      padding: 0.266667rem;
      position: relative;
      &:after{
        width: 100%;
        .border-half-bottom(#d9d9d9);
      }
      &:last-child:after{display:none;}
      .reply-item-head{
        line-height: 0.8rem;
        margin-bottom: 0.333333rem;
        img{
          display:inline-block;
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          vertical-align: top;
        }
        .floor{
          float: right;
        }
      }
      .reply-item-body{
        width: 100%;
        min-height: 1.5rem;
        margin-bottom: 0.266667rem;
        color: #000;
        font-size: 0.373333rem;
        word-break: break-word;
        word-break:break-all;
        overflow: hidden;
      }
      .reply-item-foot{
        p{
          float: right;
        }
      }
    }
  }
</style>
<template>
  <div id="detail" v-if="!isLoading">
    <div class="detail-head" >
      <h2>{{detail.title}}</h2>
      <p><span>作者：{{detail.author.loginname}}</span> <span>发布时间：{{detail.create_at | time}}</span> </p>
      <p><span>阅读数量：{{detail.visit_count}}</span> <span>留言：{{detail.reply_count}}</span></p>   
    </div>
    <div class="detail-body" v-html="detail.content"></div>
    <div class="detail-foot">
      <div class="detail-reply">
        <p class="reply-total">共({{detail.reply_count}})条回复</p>
        <ul class="reply-list">
        <template v-for="(item, index) in replys">
          <li class="reply-item">
            <p class="reply-item-head">
              <span class="floor">#{{index + 1}}</span>
              <img :src="item.author.avatar_url" alt="" />
              <span>{{item.author.loginname}}</span>
            </p>
            <div class="reply-item-body" v-html="item.content"></div>
            <div class="reply-item-foot">
              <span>{{item.create_at | time}}</span>
              <p><span>点赞：10</span><span>回复</span></p>
            </div>
          </li>
        </template>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'detail',
    data () {
      return {
        detail: {},
        replys: [],
        isLoading: true,
        url: 'https://cnodejs.org/api/v1/topic/'
      }
    },
    created () {
      const that = this
      // 组件创建完后获取数据
      that.getDeatilData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'getDeatilData'
    },
    methods: {
      getDeatilData () {
        const that = this
        return that.axios.get(that.url + that.$route.params.id)
        .then(response => {
          that.isLoading = false
          const ret = response.data
          if (ret.success) {
            that.detail = ret.data
            that.replys = ret.data.replies
          } else {
            console.log(ret.error_msg)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>