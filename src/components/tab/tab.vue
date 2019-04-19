<template>
  <div class="tab">
    <ul>
      <router-link :to="{ path: '/' + league_id + '/race', query: { ...que } }" tag="li">比赛</router-link>
      <router-link :to="{ path: '/' + league_id + '/data', query: { ...que } }" tag="li">数据</router-link>
    </ul>
  </div>
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

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
	.tab
		ul
			display: flex
			justify-content: center
			width: 100%
			height: 3.8rem
			line-height: 3.8rem
			font-size: 1.1rem
			li
				flex: 1
				border-bottom: 2px solid $color-border
			  & .router-link-active
				  color: $color-g
				  border-bottom: 2px solid $color-g
</style>
