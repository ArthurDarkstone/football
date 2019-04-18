<template>
  <mt-navbar>
    <mt-tab-item class="tab-item">
      <router-link class="her" :to="{ path: '/' + league_id + '/race', query: { ...que } }">比赛</router-link>
    </mt-tab-item>
    <mt-tab-item class="tab-item">
      <router-link class="her" :to="{ path: '/' + league_id + '/data', query: { ...que } }">数据</router-link>
    </mt-tab-item>
  </mt-navbar>
</template>

<script>
  export default {
  	date() {
  		return {
        league_id: '',
        que: {}
  		}
  	},
    created() {
      this.league_id = this.$route.params.leg
      console.log(this.$route.query)
      this.que = this.$route.query
    },
  	mounted() {
      setTimeout(() => {
      },20)
  	}
  }
</script>

<style scoped>
 .her {
   font-size: 15px;
   display: block;
   width: 100%;
 }
</style>
