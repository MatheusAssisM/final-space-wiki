<template>
<div>
  <header>
    <NavBar />
  </header>
  <main>
    <div class="body container-xl mx-auto pt-36 min-h-screen">
      <PageChangerAnimation />
      <Nuxt />
    </div>
  </main>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.body {
  background-color: #141414;
  color: #fff;
}
</style>