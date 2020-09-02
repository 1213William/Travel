<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default{
    name: "HomeSwiper",
    data() {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: 3000,
            },

        }
    },
    props: {
      swiperList: Array
    },
    computed: {
      showSwiper () {
        return this.swiperList.length
      }
    }
}
</script>


<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet
        background-color #fff
    .wrapper
        width 100%
        overflow hidden
        height 0
        padding-bottom 31.25%
        .swiper-img
            width 100%

</style>


