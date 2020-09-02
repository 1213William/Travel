<template>
<div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommed :rList="rList"></home-recommed>
    <home-weekend :weekend-list="weekendList"></home-weekend>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommed from './components/Recommed'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'
import axios from 'axios'
export default{
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommed,
        HomeWeekend,
    },
    data () {
      return{
        lastCity: '',
        swiperList: [],
        iconList: [],
        rList: [],
        weekendList: [],
      }

    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)

      },
      getHomeInfoSucc (res) {
        res = res.data
        if(res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.rList = data.recommendList
          this.weekendList = data.weekendList
        }
      }

    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated () {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
}
</script>


<style>

</style>




