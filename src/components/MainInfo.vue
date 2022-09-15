<template>
<div class="container bg-secondary rounded">
  <div class="hstack gap-3"> 
    <div> {{ j }} </div>
    <div class="ms-auto">Second item</div>

    <div class="vr"></div>
    <div>Third item</div>

    <div class="vr"></div>
    <div>Third item</div>
  </div>   


</div> 
</template>

<script> 
  
 
export default {
  name: 'MainInfo',
  props: {
  j: String,
  }
}
  
</script>
