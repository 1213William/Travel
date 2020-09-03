<template>
  <div class="container">
<!--    gallary-->
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default{
  name: 'CommonGallary',
  data () {
    return{
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 设置自动翻页的时间
        // autoplay: 2000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  //.container >>> .swiper-pagination
  //  overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom  0
    background: #000
    .wrapper
      width 100%
      height 0
      overflow hidden
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        bottom .1rem
        color #fff

</style>

