<template>
  <div id="app">
    <h1>Vuex counter app</h1>
    <h1>{{ get_counter }}</h1>
    <button @click="inc">+1</button>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
  name: 'App',
  methods:{
    ...mapActions({
      inc:'home_page_store/incCounterAction'
    })
  },
  mounted:function () {
    console.log(this.$store);
  },
  computed:{
    ...mapGetters({
      get_counter:'home_page_store/getCounter'
    })
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
