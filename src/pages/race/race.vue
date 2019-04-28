<template>
  <div class="">
    <Tab></Tab>
    <div class="race">
      <scroll
        ref="scroll"
        class="race-content"
        :data="races"
        :pulldown="true"
        @pulldown="loadTop()"
        :pullup="true"
        @scrollToEnd="loadBottom()">
  	     <div>
  		    <div class="time-panel" v-for="itemAll in races">
  		      <h3 v-text="itemAll.time"></h3>
  		    	<router-link  :to="{ path: '/' + $route.params.leg + '/race/' + item.schedule_id }" class="row" v-for="(item,index) in itemAll.game" :key="index">
  		    		<div class="team">
  		    			<div><img :src="item.teama_logo" alt="球队logo"></div>
  		    			<p v-text="item.teama_name"></p>
  		    		</div>
  		    		<div class="content">
  		    			<p>
                  <span v-if="item.schedule_turn_name" v-text="item.schedule_turn_name"></span>
                  <span v-text="new Date(item.schedule_time*1000).toLocaleTimeString().substring(0,new Date(item.schedule_time*1000).toLocaleTimeString().length-3)"></span>
                </p>
  		    			<h4 v-text="item.schedule_score_a+' - '+item.schedule_score_b"  v-if="item.schedule_status"></h4>
  		    			<h4 v-text="notStart" v-else></h4>
  		    		</div>
  		    		<div class="team">
  		    			<div><img :src="item.teamb_logo" alt=""></div>
  		    			<p v-text="item.teamb_name"></p>
  		    		</div>
  		    	</router-link>
  		    </div>
  	     </div>
  	    <loading v-if="!races.length"></loading>
  	  </scroll>
    </div>
  </div>
</template>

<script>
  import Tab from 'components/tab/tab'
  import Scroll from 'components/scroll/scroll'
  import Loading from 'components/loading/loading'
  import { getRace } from 'api/race'
  export default {
  	data() {
  		return {
  			races: [],
  			notStart: '未开始',
        allLoaded: false,
        league_id: 1,
        limit: 3,
        topoffset: 0,
        botoffset: 0,
        order: 2
  		}
  	},
  	created() {
      const league = this.$route.league_id
      this._getRace()
  	},
  	methods: {
  	  _getRace() {
        const params = {
          league_id: this.$route.params.leg,
          limit: this.limit,
          offset: this.topoffset,
          order: this.order
        }
  	  	getRace(params).then((res) => {
          // console.log(res)
  	  	  if(res.status === 201) {
            this.races = res.data.data
            // console.log(this.races)
  	  	  }
  	  	}).catch(err => {
          console.log(err)
        })
  	  },
      loadTop() {
        this.order = 1
        const params = {
          league_id: this.$route.params.leg,
          limit: this.limit,
          offset: this.topoffset,
          order: this.order
        }
  	  	getRace(params).then((res) => {
          // console.log(res)
  	  	  if(res.status === 201) {
            this.races = [
              ...res.data.data.reverse(),
              ...this.races
            ]
            // console.log(this.races)
  	  	  }
  	  	})
        this.topoffset += this.limit
        this.$refs.scroll.refresh()
      },
      loadBottom() {
        this.botoffset += this.limit
        this.order = 2
        const params = {
          league_id: this.$route.params.leg,
          limit: this.limit,
          offset: this.botoffset,
          order: this.order
        }
  	  	getRace(params).then((res) => {
          // console.log(res)
  	  	  if(res.status === 201) {
            // console.log(res.data.data)
            // console.log(this.races.length)
            if (JSON.stringify(res.data.data) === '{}') {
              // console.log(666666666)
              this.loadTop()
            } else {
              this.races = [
                ...this.races,
                ...res.data.data
              ]
              // console.log('nore')
            }
  	  	  }
  	  	})
        this.$refs.scroll.refresh()
      }
  	},
  	components: {
      Tab,
  	  Loading,
      Scroll
  	}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.race
  position: fixed
  width: 100%
  top: 7rem
  bottom: 0
  .race-content
    height: 100%
    overflow: hidden
  h2
    padding: .8rem 0
    color: $color-g
    border-bottom: 1px solid #e9e9e9
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
