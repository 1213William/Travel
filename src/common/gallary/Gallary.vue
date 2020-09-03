<template>
  <div class="container" @click="handleGallaryClick">
<!--    gallary-->
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
            v-for="(item, index) in imgs"
            :key="index"
        >
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default{
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
      }
    }
  },
  data () {
    return{
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer:true,


        // 设置自动翻页的时间
        // autoplay: 2000
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
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

