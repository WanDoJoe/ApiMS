<template>
  <div id="app">
    <Login v-if="this.user.oid==''"
           v-on:listenToLoginEvent="showLogin"></Login>
   <Home v-else></Home>
  </div>
</template>

<script>
import Home from "./components/Home";
import Login from "./components/pages/Login";
export default {
  name: 'App',
  components: {Login, Home},
  data(){
    return {
      user:{
             username:'',
             oid:''
         }
      }
    },
    methods: {
      showLogin: function(params){
        var datajson=JSON.parse(params);
        console.log("datajson")
        console.log(datajson)
        this.user.username=datajson.username;
        this.user.oid=datajson.oid;
      }
    }

}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
