<template>
  <div class="assist">
  	<dl>
  		<dt>
  		  <div class="type3">排名</div>
  			<div class="type1">球员</div>
  			<div class="type1">球队</div>
  			<div class="type3">黄牌</div>
  		</dt>
  		<dd v-for="(item, index) in yellow">
  			<div class="type3" v-text="item.rank"></div>
  			<div class="type1" v-text="item.player_name"></div>
  			<div class="type1" v-text="item.team_name"></div>
  			<div class="type3" v-text="item.pt_yellow_card"></div>
  		</dd>
  	</dl>
  </div>
</template>

<script>
  export default {
  	props: {
  	  yellow: {
  		type: Array,
  		required: true
  	  }
  	},
  	mounted() {
      setTimeout(() => {
      	this.$emit('updateScroll')
      },20)
  	}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.assist
  h3
  	text-align: left
  p
  	text-align: left
  dl
  	background: #F0FFFF
  	font-size: 1rem
	dt
    display: flex
    border-bottom: 1px solid #d0cece
    padding: .5rem 0
    background:	#F8F8FF
	  .type1
	  	flex: 4
	  	text-align: center
	  .type3
	  	flex: 2
	dd
	  display: flex
	  border-bottom: 1px solid #d0cece
	  padding: 1rem 0
	  font-size: 1rem
	  position: relative
	  .type1
	  	flex: 4
	  	text-align: center
	  	img
	  	  width: 1.4rem
	  	  position: absolute
	  	  top: 1rem
	  	  left: 3.5rem
	  .type3
	  	flex: 2
</style>
