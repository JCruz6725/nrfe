<template>
  <NavBar :resume_title="resume_title"/>
  <MainInfo :j="r.email"/>

  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import MainInfo from './components/MainInfo.vue'
//import axios from 'axios'

//function getUser(user){
//  return axios.get('https://johndjangodev.herokuapp.com/profile/'+user+'/SW')
//}



//hard code the data that suppose to be comming in from th api backend...

let j = {
      //resume_title: ['Software Engineer', 'Warehouse Helper'],
      r:
      {
    email: "john.cruz6725@gmail.com",
    full_name: "John Cruz",
    location: "Houston, Tx",
    resume: [
        {
            id: 1,
            account_email: "john.cruz6725@gmail.com",
            title: "SW",
            summary: "asdf",
            programming_skills: "asdf",
            industry_tools: "fasddsa",
            office_tools: "asdfasd",
            related_courses: "fasdfasdf"
        }
    ],
    professional: [
        {
            id: 1,
            account_email: "john.cruz6725@gmail.com",
            resume_title: "SW",
            employer_name: "asdfasd",
            position: "fasdfas",
            time_at: "dfasd",
            title_of_project: "fasdfas",
            tech_used: "dfasdfa",
            summary: "sdfasdfa"
        }
    ],
    project: [
        {
            id: 1,
            account_email: "john.cruz6725@gmail.com",
            resume_title: "SW",
            project_name: "asdfa",
            title_on_project: "sdfa",
            tech_used: "sdasdfas",
            summary: "df",
            external_link: "https://github.com/"
        }
    ],
    education: [
        {
            id: 1,
            account_email: "john.cruz6725@gmail.com",
            institution_name: "asdfasdf",
            location: "asdfasdf",
            degree: "asdfasdf",
            time_at: "asdfasdfasdf"
        }
    ]
},
  
    };

  
  
  
export default {
  name: 'App',
  components: {
    NavBar,
    MainInfo,
    HelloWorld,
  },
  props: {
    j : j
  },
    
}
  //console.log(j.r.email);
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
