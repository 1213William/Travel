<template>
  <ul class="list" :cities="cities">
    <li class="item"
        v-for="(item,key) of cities"
        :key="key"
        @click="handleLetterClick"
    >
      {{key}}
    </li>
  </ul>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      // console.log(e.target.innerText)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
