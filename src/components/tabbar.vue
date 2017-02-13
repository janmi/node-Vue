<style lang="less">
@import url('../assets/less/module.less');
  .m-tab{
    width: 100%;
    height: 1.2rem;
    &-fixed{
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.2rem;
      padding-top: 0.2rem;
      background-color: #fafafa;
      &:before{
        width: 100%;
        .border-half-top(#d9d9d9);
      }
    }
    &-item{
      display:block;
      flex:1;
      height:100%;
      text-align: center;
      &.active{
        background-color: #eee;
        color: #26a2ff;
      }
    }
    .iconfont{
      display:block;
      margin: 0 auto;
      width: 0.6rem;
      height: 0.6rem;
      background-color: #999;
    }
  }
</style>
<template>
  <div class="m-tab">
    <div class="m-tab-fixed">
    <template v-for="item in tabItem">
    <router-link :to="{ name: item.linkName}" class="m-tab-item">
        <i class="iconfont" :class="[item.icon]"></i>
        {{item.tit}}
    </router-link>
    </template>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tabbar',
    props: ['tabItem']
  }
</script>