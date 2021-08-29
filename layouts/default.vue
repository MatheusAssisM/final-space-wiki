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
  watch: {
    $route() {
      this.$router.beforeEach((to, from, next) => {
        this.$store.commit('loader/set', ['isLoading', true])
        next()
      })
      this.$router.onReady(() => {
        setTimeout(() => {
          this.$store.commit('loader/set', ['isLoading', false])
        }, 1000);
      })
    }
  }
}
</script>

<style scoped>
.body {
  background-color: #141414;
  color: #fff;
}
</style>