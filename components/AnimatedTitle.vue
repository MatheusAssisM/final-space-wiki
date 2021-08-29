<template>
  <vue-typed-js 
    :strings="[
      'Final Space All charaters',  
      'Final Space All episodes', 
      'Final Space Wiki'
    ]"
    :typeSpeed="50"
    :startDelay="1000"
    :backSpeed="50"
  >
    <h1 class="title"><span class="typing"></span></h1>
  </vue-typed-js>
</template>

<script>
export default {
}
</script>

<style>
.title {
  @apply 
      text-base sm:text-4xl 2xl:text-6xl 
      font-bold 
      text-center;
}
</style>