<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item border-1px">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item border-1px">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item border-1px">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller='seller'></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/babel">
import header from './components/header/header.vue'

const ERR_OK = 0;

export default {
  // data定义为函数这样其他组件改变也会反应到data
  // 否则只是静态的
  data () {
    return {
      seller: {}
    }
  },
  // 处理mock数据
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = response.data;
        console.log(this.seller);
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height 40px
    line-height 40px
    .tab-item
      flex 1
      text-align center
      border-1px(rgba(7,17,27,0.1))
      & > a
        display block
        font-size 14px
        color rgb(77,85,93)
        &.active
          color :rgb(240,20,20)
</style>
