<template>
  <NavBar :resume_title="resume_title"/>


  <img alt="Vue logo" src="./assets/logo.png">


  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
//import axios from 'axios'

//function getUser(user){
//  return axios.get('https://johndjangodev.herokuapp.com/profile/'+user+'/SW')
//}

export default {
  name: 'App',
  components: {
    NavBar,
    HelloWorld
  },
  data() {
    return {
      resume_title: ['Software Engineer', 'Warehouse Helper'],
    }


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
