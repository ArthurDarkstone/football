<template>
  <div class="group">
  	<dl v-for="itemAll of group">
  		<dt>
  			<div class="type3">{{ itemAll.group_name }}</div>
  		</dt>
      <dt>
        <div class="type0"></div>
        <div class="type1">球队</div>
        <div class="type2">胜</div>
        <div class="type2">负</div>
        <div class="type2">平</div>
        <div class="type3">进/失</div>
        <div class="type3">积分</div>
  		</dt>
  		<dd v-for="(item, index) of itemAll.group_team">
        <div class="type2" v-text="++index"></div>
  			<div class="type1">
  				<img :src="item.team_logo"/>
  				<span v-html="item.team_name"></span>
  			</div>
  			<div class="type2" v-text="item.gt_win">13</div>
  			<div class="type2" v-text="item.gt_lose">4</div>
  			<div class="type2" v-text="item.gt_equal">2</div>
  			<div class="type3" v-text="item.gt_goal+'/'+item.gt_fumble">41/27</div>
  			<div class="type3" v-text="item.gt_integral"></div>
  		</dd>
  	</dl>
    <p>
      <ul>
        <span>黑科院系杯小组赛名次决定方法</span>
        <li>（一）每队胜一场得3分，平一场得1分，负一场得0分</li>
        <li>（二）小组赛结束，积分多的名次列前</li>
        <li>（三）如果两队或两队以上积分相同，依下列顺序排列名次</li>
        <li><span class="sad">a.相互比赛积分多者，名次列前</span></li>
        <li><span class="sad">b.相互比赛净胜球多者，名次列前</span></li>
        <li><span class="sad">c.相互比赛进球多者，名次列前</span></li>
        <li><span class="sad">d.小组赛净胜球多者，名次列前</span></li>
        <li><span class="sad">e.小组赛进球多者，名次列前</span></li>
        <li><span class="sad">f.全部比赛红黄牌扣分少者，名次列前</span></li>
        <li><span class="sad">g.点球决定</span></li>
      </ul>
      <div class="ps">
        小组赛一名球员累计两张黄牌禁赛一场，半决赛前不清零（3场小组赛（ A、B、C组两场）＋¼决赛累计两张半决赛停赛，
      </div>
      <div class="ps">
        如果3场小组赛（A、B、C组两场）＋¼决赛累计一张或者没有，半决赛不停赛），禁赛之后黄牌清零,半决赛红牌，决赛禁赛。
      </div>
    </p>
  </div>
</template>

<script>
  export default {
  	props: {
  	  group: {
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
.group
  ul
    margin-top: 20px
    span
      font-weight: bold
      display: block
      text-align: center
      font: blod
      margin-bottom: 10px
    li
      line-height: 30px
      .sad
        margin-left: 50px
        font-weight: lighter
        text-align: left
        line-height: 16px
  .ps
    text-indent: 2.2rem
    text-align: left
    line-height: 1.2rem
  h3
  	text-align: left
  p
  	text-align: left
  dl
  	background:	#F0FFFF
  	font-siez: 1rem
	dt
    display: flex
    padding: .5rem 0
    border-bottom: 1px solid #d0cece
    background:	#F8F8FF
	  .type0
	  	flex: 1
	  	text-align:left
	  .type1
	  	flex: 4
	  .type2
	  	flex: 1
	  .type3
	  	flex: 2
	dd
	  display: flex
	  border-bottom: 1px solid #d0cece
	  padding: 1.2rem 0
	  font-size: 1rem
	  position: relative
	  .type0
	  	flex: 1
	  	text-align:left
	  .type1
	  	flex: 4
	  	text-align: left
	  	text-indent: 2rem
	  	img
	  	  width: 1.4rem
	  	  position: absolute
	  	  top: 1rem
	  	  left: 1.8rem
	  .type2
	  	flex: 1
	  .type3
	  	flex: 2
</style>
