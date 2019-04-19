<template>
  <div class="data">
    <tab></tab>
    <ol>
      <li v-for="(item,index) in types" v-text="item.title" :class="curType===index ? activeClass : ''" @click="onRank(item,index)"></li>
    </ol>
    <div class="rank">
      <scroll ref="scroll" class="rank-content" :data="datas">
        <div v-if="$route.query.league_type == 1">
          <score :score="datas" v-if="0==curType && datas.length" @updateScroll="freshScroll"/>
          <shooter :shooter="datas" v-if="1==curType && datas.length" @updateScroll="freshScroll"/>
          <yellow :yellow="datas" v-if="2==curType && datas.length" @updateScroll="freshScroll"/>
          <red :red="datas" v-if="3==curType && datas.length" @updateScroll="freshScroll"/>
        </div>
        <div v-else>
          <group :group="datas" v-if="0==curType && datas.length" @updateScroll="freshScroll"/>
          <schedule :turns="datas" v-if="1==curType && datas.length" @updateScroll="freshScroll"/>
          <shooter :shooter="datas" v-if="2==curType && datas.length" @updateScroll="freshScroll"/>
          <yellow :yellow="datas" v-if="3==curType && datas.length" @updateScroll="freshScroll"/>
          <red :red="datas" v-if="4==curType && datas.length" @updateScroll="freshScroll"/>
        </div>
        <loading v-if="!datas.length"></loading>
      </scroll>
    </div>
  </div>
</template>

<script>
  import Loading from 'components/loading/loading'
  import Scroll from 'components/scroll/scroll'
  import Tab from 'components/tab/tab'
  import Score from 'pages/rank/score'
  import Shooter from 'pages/rank/shooter'
  import Yellow from 'pages/rank/yellow'
  import Red from 'pages/rank/red'
  import Schedule from 'pages/rank/turn'
  import Group from 'pages/rank/group'
  import { getRank } from 'api/rank'
  export default {
    data() {
      return {
        types: [],
        curLeague: {
          title: '啥啥杯',
          league: this.$route.params.leg
        },
        curLeaguesIndex: 0,
        curType: 0,
        activeClass: 'on',
        scores: [],
        shooters: [],
        yellows: [],
        reds: [],
        schedules: [],
        groups: []
      }
    },
    computed: {
      datas() {
        let obj = {}
        if (this.$route.query.league_type == 1) {
          obj = {
            0: this.scores,
            1: this.shooters,
            2: this.yellows,
            3: this.reds
          }
        } else {
          obj = {
            0: this.groups,
            1: this.schedules,
            2: this.shooters,
            3: this.yellows,
            4: this.reds
          }
        }
        return obj[this.curType]
      }
    },
    created() {
      if (this.$route.query.league_type == 1) {
        this._getRank('team_ranking', this.curLeague)
        this.types = [
          {title:'积分',type:'team_ranking'},
          {title:'射手',type:'goal_ranking'},
          {title:'黄牌',type:'yellow_ranking'},
          {title:'红牌',type:'red_ranking'}
        ]
      } else {
        this._getRank('group', this.curLeague)
        this.types = [
          {title:'小组赛',type:'group'},
          {title:'淘汰赛',type:'schedule'},
          {title:'射手',type:'goal_ranking'},
          {title:'黄牌',type:'yellow_ranking'},
          {title:'红牌',type:'red_ranking'}
        ]
      }
    },
    methods: {
      // DOM渲染刷新滚动区域
      freshScroll() {
        this.$refs.scroll.refresh()
      },
      // 获取当前的联赛

      // 获取排行榜
      onRank(item,index){
        this._clearRank()
        this.curType = index
        this._getRank(item.type, this.curLeague)
      },
      // 根据联赛类型和榜单类型进行数据加载
      _getRank(type ,league) {
        getRank(type,league).then((res)=>{
          console.log(res)
          if(res.status === 201){
            let obj = {
              'team_ranking':() => {
                this.scores = res.data.data
              },
              'goal_ranking':() => {
                this.shooters = res.data.data
              },
              'yellow_ranking':() => {
                this.yellows = res.data.data
              },
              'red_ranking':() => {
                this.reds = res.data.data
              },
              'schedule':() => {
                this.schedules = res.data.data
              },
              'group':() => {
                this.groups = res.data.data
              }
            }
            if (typeof obj[type] !== 'function') {
               throw new Error('Invalid type.');
             }
            obj[type]()
          }
        })
      },
      // 清除各个排行榜数据
      _clearRank(){
        this.scores = []
        this.shooters = []
        this.yellows = []
        this.reds = []
        this.schedules = []
        this.groups = []
      }
    },
    components: {
      Score,
      Shooter,
      Yellow,
      Red,
      Schedule,
      Group,
      Loading,
      Scroll,
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.data
  ol
    display:flex
    background: #fff
    font-size: 1rem
    color: #000
    box-sizing: border-box
    li
      flex: 1
      height: 2.1rem
      line-height: 2.1rem
      box-sizing: border-box
    .on
      border-bottom: 1px solid $color-g
  .rank
    position: fixed
    width: 100%
    top: 9.15rem
    bottom: 0
    .rank-content
      height: 100%
      overflow: hidden
</style>
