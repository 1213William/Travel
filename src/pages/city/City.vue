<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
        :hotCities="hotCities"
        :cities="cities"
        :letter="letter"
    ></city-list>
    <city-alphabet
        :cities="cities"
        @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List1'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default{
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data () {
    return{
      cities: {},
      hotCities: [],
      letter: ''

    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
          .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
        for(let i=0; i<this.cities.length; i++){
          console.log(i)
        }
      }
    },
    handleLetterChange (bet) {
      this.letter = bet
      // console.log(this.letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>


</style>
