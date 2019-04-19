<template lang="html">
  <div class="all">
    <router-link class="item" v-for="(item, index) of leagues" :key="item.league_id" :to="{ path: '/' + item.league_id + '/race', query: { league_id: item.league_id, league_type: item.league_type } }">
      <span>
        <img v-lazy="item.league_url" />
        <span>{{ item.league_name }}</span>
      </span>
    </router-link>
  </div>
</template>

<script>
import { getLeague } from '@/api/home'
export default {
  data () {
    return {
      leagues: [],
      league_id: ''
    }
  },
  created () {
    this.league_id = this.$route.query
    this._getLeague()
  },
  methods: {
    _getLeague() {
      getLeague(1).then(res => {
        console.log(res)
        this.leagues = res.data.data
      })
    }
  }
}
</script>

<style lang="css" scoped>
 .all {
   display: flex;
   flex-flow: row wrap;
   justify-content: flex-start;
   align-items: center;
 }
 .item {
   width: 33%;
   height: auto;
   margin-top: 16px;
 }
 .item img {
   display: block;
   width: 50px;
   height: 50px;
   margin: 0 auto;
 }
 .item span {
   width: 100%;
   line-height: 32px;
   text-align: center;
 }
</style>
