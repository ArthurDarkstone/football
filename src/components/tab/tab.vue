<template>
  <mt-navbar>
    <mt-tab-item class="tab-item">
      <router-link class="her" to="/race">比赛</router-link>
    </mt-tab-item>
    <mt-tab-item class="tab-item">
      <router-link class="her" to="/data">数据</router-link>
    </mt-tab-item>
  </mt-navbar>
</template>

<script>
  export default {
  	date() {
  		return {
  		}
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
