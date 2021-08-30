<template>
  <div>
    <img v-if="showImage" src="../static/assets/homeimage.png" alt="">
    <!-- <vue-typed-js v-else
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
    </vue-typed-js> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImage: true
    }
  },

  created() {
    setTimeout(() => {
      this.showImage = true
    }, 10000)
  }
}
</script>

<style>
.title {
  @apply 
      text-base sm:text-4xl 2xl:text-6xl 
      font-bold 
      text-center;
      animation: change_image 1s 8s forwards;
}

/* 
@keyframes change_image {
  to {
    opacity: 0;
  }
} */


</style>