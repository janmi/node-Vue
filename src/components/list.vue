<style lang="less">
@import url('../assets/less/module.less');
  .m-list{
    margin: 0.2rem 0 1.6rem;
    &-item{
      width: 100%;
      margin-bottom: 0.266667rem;
      padding: 0.2rem;
      box-sizing: border-box;
      background-color: #fff;
      .m-list-head {
        position: relative;
        overflow:hidden;
        img{
          float: left;
          margin-right: 0.2rem;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
        }
        p:last-child{
          color: #e2e2e2;
          font-size: 0.32rem;
        }
        .m-list-tag{
          position: absolute;
          top: 0;
          right: 0.2rem;
        }
      }
      .m-list-body {
        position: relative;
        padding:0.133333rem 0;
        color: #000;
        font-size: 0.373333rem;
        &:after{
          width: 100%;
          .border-half-bottom(#d9d9d9);
        }
      }
      .m-list-foot {
        display: flex;
        padding-top: 0.2rem;
        span {
          display:block;
          flex: 1;
          width: 1%;
          text-align: center;
          img {
            display:inline-block;
            width: 0.466667rem;
            height: 0.466667rem;
            margin-right: 0.133333rem;
            border-radius: 50%;
            vertical-align: top;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="m-list">
    <template v-for="(item, index) in list">
    <router-link :to="{ name: 'detail', params: { id:  item.id}}">
      <div class="m-list-item">
        <div class="m-list-head">
          <img :src="item.author.avatar_url"  alt="" />
          <p>{{item.author.loginname}}</p>
          <p>{{item.create_at | time}} <span style="color:#42b983">{{item.tab | tab}}</span></p>
          <div class="m-list-tag">
            <i class="iconfont icon-essence"></i>
            <i class="iconfont icon-top"></i>
          </div>    
        </div>
        <div class="m-list-body">{{item.title}}</div>
        <div class="m-list-foot">
          <span><i class="iconfont"></i>{{item.visit_count}}</span>
          <span><i class="iconfont"></i>{{item.reply_count}}</span>
          <span><img :src="item.author.avatar_url" alt="" />{{item.last_reply_at | time}}</span>
        </div>
      </div>
    </router-link>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'list',
    props: ['list'],
    mounted () {
      // console.log(this.list)
    }
  }
</script>