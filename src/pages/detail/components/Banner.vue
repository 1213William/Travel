<template>
  <div>
    <div class="banner">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          大连圣亚海洋(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe7cb;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%

    .banner-img
      width 100%
    .banner-info
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        margin-top .13rem
        .banner-icon
          font-size .24rem


</style>

