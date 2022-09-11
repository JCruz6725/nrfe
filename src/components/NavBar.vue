<script>
export default {
  name: 'NavBar',
  props: {
    resume_title: String
  }
}
</script>

<template>
  <div class="container">



    <ul class="nav nav-tabs" id="myTab" role="tablist">



<template v-for = "(title, i) in resume_title" :key="i">

      <li class="nav-item" role="presentation">
        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"> {{ title }}</button>
      </li>


</template>


    </ul>

  <div class="tab-content" id="myTabContent">

<template v-for="(title, i) in resume_title" :key="i">

    <div class="tab-pane fade" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">

      {{ title }}

    </div>


</template>


</div>




  
  </div>
</template>

