<template>
  <div class="all">
    <i class="iconfont icon-fanhui" @click="back"></i>
    <div class="race">
      <scroll
        ref="scroll"
        class="race-content">
  	     <div>
  		    <div class="time-panel">
  		    	<div class="row">
  		    		<div class="team">
  		    			<div><img :src="race.teama_logo" alt="球队logo"></div>
  		    			<p v-text="race.teama_name"></p>
  		    		</div>
  		    		<div class="content">
  		    			<p>
                  <span v-if="race.schedule_turn_name" v-text="race.schedule_turn_name"></span>
                  <span v-text="new Date(race.schedule_time*1000).toLocaleTimeString().substring(0,new Date(race.schedule_time*1000).toLocaleTimeString().length-3)"></span>
                </p>
  		    			<h4 v-text="race.schedule_score_a+' - '+race.schedule_score_b"  v-if="race.schedule_status"></h4>
  		    			<h4 v-text="notStart" v-else></h4>
  		    		</div>
  		    		<div class="team">
  		    			<div><img :src="race.teamb_logo" alt=""></div>
  		    			<p v-text="race.teamb_name"></p>
  		    		</div>
  		    	</div>
            <div class="">
              <mt-cell :title=" '裁判:' + race.schedule_judge"></mt-cell>
            </div>
  		    </div>
  	     </div>
  	  </scroll>
    </div>
  </div>
</template>

<script>
  import Scroll from 'components/scroll/scroll'
  import { getDetail } from 'api/race'
  export default {
  	data() {
  		return {
        race: {},
        notStart: '未开始'
  		}
  	},
    watch: {
     '$route': function(){
       const id = this.$route.params && this.$route.params.id
       console.log(id)
       this._getDetail(id)
     }
    },
    mounted () {
      const id = this.$route.params && this.$route.params.id
      console.log(id)
      this._getDetail(id)
    },
    methods: {
      back(){
        history.back()
      },
      _getDetail(id) {
        getDetail(id).then(res => {
          this.race = res.data.data
        })
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.all
  .icon-fanhui
    position: absolute
    top: 0
    left: 0
    font-size: 1.5rem
    padding: .8rem
    z-index: 20
    color: #fff
  .race
    position: fixed
    width: 100%
    .race-content
      height: 100%
      overflow: hidden
    .time-panel
      h3
        padding: .4rem 0
        font-size: .8rem
        background: #e6e6e6
        text-align: left
        text-indent: 1rem
      .row
        display: flex
        justify-content: center
        align-items: center
        border-bottom: 1px solid $color-border
        .team
        	flex: 2
        	padding: .8rem 0
        	img
        	  height: 3rem
        	p
        	  font-size: .8rem
        	  line-height: 1rem
        .content
        	flex: 3
        	p
        	  font-size: .8rem
        	  line-height: 1.2rem
        	h4
        	 font-size: 1.2rem
        	 line-height: 1.5rem
        	 color: $color-g
</style>
