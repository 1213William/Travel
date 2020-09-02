<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>

    城市选择
  </div>
</template>

<script>
export default{
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    background: $bgColor
    color #fff
    font-size .32rem
    position relative
    .header-back
      position absolute
      top 0
      left 0
      margin-left .15rem
      color #fff


</style>

