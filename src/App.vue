<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from 'components/top/top'
export default {
  name: 'app',
  data() {
    return{
    }
  },
  methods: {
  },
  components: {
    Top
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#app
  text-align: center
</style>
