<template>
    <div 
        class="loader"
        :class="isLoading? 'in_out' : 'out_in'"
    >
    </div>
</template>

<script>
export default {
    computed: {
        isLoading() {
            return this.$store.state.loader.isLoading;
        } 
    }
}
</script>

<style>
.loader {
    background-image: linear-gradient(to right, #000000, #434343);
    width: 100%;
    min-height: 100vh;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}

.in_out {
    display: block;
    animation: in_out 1s forwards;
}

.out_in {
    display: block;
    animation: out_in 1s forwards;
}

@keyframes in_out {
    from {
        transform: translateX(-100%);
    }

}

@keyframes out_in {
    to {
        transform: translateX(100%);
    }
}


</style>