<template>
  <div class="shooter">
  	<dl v-for="itemAll of turns">
      <dt>
  			<div class="type3">{{ itemAll.turn_name }}</div>
  		</dt>
  		<dt>
  		   <div class="type3"></div>
  			<div class="type1">球队1</div>
  			<div class="type1">球队2</div>
  			<div class="type3">{{ itemAll.turn_name }}</div>
  		</dt>
  		<dd v-for="(item, index) of itemAll.games">
  			<div class="type3" v-text="index+1"></div>
        <div class="type1">
  				<img v-lazy="item.team_a_logo"/>
  				<span v-html="item.schedule_team_a"></span>
  			</div>
  			<div class="type1">
  				<img v-lazy="item.team_b_logo"/>
  				<span v-html="item.schedule_team_b"></span>
  			</div>
  			<div class="type3" v-text="item.count"></div>
  		</dd>
  	</dl>
  </div>
</template>

<script>
  export default {
  	props: {
  	  turns: {
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
.shooter
  h3
  	text-align: left
  p
  	text-align: left
  dl
  	background: #F0FFFF
  	font-size: 1rem
	dt
    display: flex
    padding: .5rem 0
    border-bottom: 1px solid #d0cece
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
	  	  width: 1.2rem
	  .type3
	  	flex: 2
</style>
