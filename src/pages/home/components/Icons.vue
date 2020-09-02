<template>
    <div class="icons">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon"
                     v-for="item of page"
                     :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>

        <!-- <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div> -->
    </div>
</template>
<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            swiperOptions: {
              autoplay: false,
            },

        }
    },
    props:{
      iconList: Array
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index/8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    },

}
</script>

<style lang="stylus" scoped>
    @imoprt '~styles/varibles.styl'
    @impoer '~styles/mixins.styl'
    .icons >>> .swiper-container
        height 0
        overflow hidden
        padding-bottom 50%
    .icons
        margin-top .2rem
        .icon
            position relative
            overflow hidden
            float left
            width 25%
            padding-bottom 25%
            height 0
            .icon-desc
                text-align center
                position absolute
                bottom 0
                left 0
                right 0
                height .44rem
                line-height .44rem
                color $darkTextColor
                ellipsis()
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    display block
                    margin 0 auto
                    height 100%


</style>

