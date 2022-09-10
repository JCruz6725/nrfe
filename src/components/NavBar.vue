<script>
export default {
  name: 'NavBar',
  props: {
    resumes: String
  }
}
 </script>

<template>
  <div class="container">



    <ul class="nav nav-tabs" id="myTab" role="tablist">



<template v-for = "(resume_link, index) in resumes" :key="index">

      <li class="nav-item" role="presentation">
        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"> {{ resume_link }}</button>
      </li>


</template>


    </ul>

  <div class="tab-content" id="myTabContent">

<template v-for="(resume_link, index) in resumes" :key="index">

    <div class="tab-pane fade" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">

      {{ resume_link }}

    </div>


</template>


</div>




  
  </div>
</template>

