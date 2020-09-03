<template>
  <div>
    <router-link
        tag="div"
        to="/"
        class="header-abs"
        v-show="showAbs"
    >
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle"
    >
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      }else {
        this.showAbs = true
      }
      // console.log(document.documentElement.scrollTop)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    text-align center
    line-height .8rem
    .header-abs-back
      color #ffffff
      font-size .4rem
      margin-left -.06rem
  .header-fixed
    z-index 2
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    background: $bgColor
    color #fff
    font-size .32rem
    position fixed
    top 0
    right 0
    left 0
    .header-fixed-back
      position absolute
      top 0
      left 0
      margin-left .15rem
      color #fff
</style>

