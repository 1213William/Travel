<template>
    <div>
       <div class="title">热销推荐</div>
        <ul>
              <router-link
                  class="item border-bottom"
                  v-for="item of rList"
                  :key="item.id"
                  tag="li"
                  :to="/detail/ + item.id"
              >
                <img class="item-img" :src="item.imgUrl" alt="">

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommed',
    props: {
      rList: Array
    }
}
</script>


<style lang="stylus" scoped>
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item
        display flex
        height 1.9rem
        overflow hidden
        // background red
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            .item-title
                line-height .54rem
                font-size .32rem
            .item-desc
                line-height .4rem
                color #ccc
                font-size .24rem
            .item-button
                margin-top .2rem
                background #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff

</style>
