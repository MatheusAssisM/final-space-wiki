<template>
<div>
  <section class="title">
    <AnimatedTitle />
  </section>
  <section class="content">

    <div 
      data-aos="flip-left" 
      data-aos-offset="300"
      data-aos-easing="linear"
      class="text_section"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque velit deserunt excepturi aut soluta dignissimos voluptatibus id corrupti hic, totam doloribus harum tempore. Voluptas, rem enim incidunt ipsum neque labore.
      </p>
    </div>

    <div 
      data-aos="flip-left" 
      data-aos-offset="300"
      data-aos-easing="linear"
      class="text_section"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum dolor officiis! Neque possimus doloribus consequuntur eligendi magnam, iste adipisci accusantium consequatur. Hic voluptatum eius quia, commodi fuga assumenda sed.
      </p>
    </div>
  </section>
  <img 
    data-aos="fade-right" 
    data-aos-duration="2000"
    data-aos-delay="300"
    src="../static/assets/mooncake.png" alt="">
</div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  created() {
    AOS.init();
  }
}
</script>

<style scoped>
.title {
  @apply flex justify-center;
  margin-bottom: 29rem;
}

.content {
  min-height: 100vh;
  overflow: hidden;
  @apply grid-cols-2 grid;
}

.text_section {
  @apply flex justify-center;
  width: 100%;
}

.text_section > p{
  width: 50%;
}
</style>