<style lang="less">
  @import url('../assets/less/module.less');
  .m-nav{
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    &-fixed{
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      width: 100%;
      background-color: #fff;
      &:after{
        width: 100%;
        .border-half-bottom(#d9d9d9);
      }
    }
    &-item{
      position: relative;
      flex:1;
      text-align: center;
      &.active:after{
        content:'';
        position: absolute;
        bottom:0;
        left:0;
        width: 100%;
        border-bottom: 2px solid #42b983;
      }
    }
  }
</style> 
<template>
  <div class="m-nav">
    <div class="m-nav-fixed">
    <template v-for="(item, index) in nav.items">
      <a href="javscript:;" @click="emitEvent('tab', item.type, index)" data-type="item.type" class="m-nav-item" :class="{'active': index === nav.active}">{{item.name}}</a>
    </template>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    props: ['nav'],
    methods: {
      emitEvent (event, txt, i) {
        const options = {
          txt: txt,
          index: i
        }
        this.$emit(event, options)
      }
    }
  }
</script>  