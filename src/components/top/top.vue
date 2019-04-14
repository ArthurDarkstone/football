<template>
  <header>
  	<div class="title">
      <!-- <i class="back" @click="back" v-if="isBack"><</i> -->
      黑科足球
  	</div>
    <!-- <transition name="slide"> -->
  </header>
</template>

<script>
export default {
  data() {
    return{
      // isBack: this.$store.state.back
    }
  },
  methods: {
    // back(){
    //   history.back()
    // }
  },
  mounted() {
    setTimeout(() => {
    },20)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
  .title
    width: 100%
    height: 3.2rem
    line-height: 3.2rem
    font-size: 1.2rem
    text-align: center
    color: $color-w
    background: $color-g
    position: relative
    .back
      position: absolute
      top: 0
      left: 0
      font-size: 1.5rem
      padding: 0 .5rem
      z-index: 20
      color: #fff
    .icon-sidebar
      position: absolute
      top: 0
      right: 0
      font-size: 2rem
      padding: .6rem .5rem
      z-index: 20
      color: #fff

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease

  .slide-enter, .slide-leave-to
    transform: translate3d(50%, 0, 0)

</style>
