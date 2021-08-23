<template>
  <nav>
      <section id="menu">
          <ul>
              <li class="nav-item"><NuxtLink to="/">Home</NuxtLink></li>
              <li class="nav-item"><NuxtLink to="/characters">Charaters</NuxtLink></li>
              <li class="nav-item"><NuxtLink to="/episodes">Episodes</NuxtLink></li>
          </ul>
      </section>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    background-color: #141414;
    transition: opacity 0.5s ease-in-out;
    @apply 
        text-white text-xl font-bold
        flex justify-start items-center
        sm:px-10
        h-20 w-screen
        fixed top-0
        z-10
        px-0;
}

.nav-item {
    @apply 
        border-none
        rounded-lg
        py-2
        px-2
        sm:px-4
        opacity-60
        outline-none
        text-center
        relative
        transition-opacity delay-100
        text-white;
}   

.nav-item:hover {
    @apply opacity-100;
    animation: zoomOut 0.2s forwards;
}

.nav-item:active {
    @apply 
        border-none 
        outline-none;
    animation: zoomIn .2s;
}

ul {
    @apply flex items-center;
}

@media screen and (min-width: 1024px) {
    @keyframes zoomOut {
        to {
            transform: scale(1.2, 1.1);
        }
        
    }
}  

@media screen and (max-width: 1000px) {
    @keyFrames zoomIn {
        to {
            opacity: .5;
            transform: scale(0.8);
        }
    }
}



</style>