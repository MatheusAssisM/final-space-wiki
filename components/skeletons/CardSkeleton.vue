<template>
    <div class="card-skeleton p-0 m-0 flex">
    </div>
</template>

<script>
export default {

}
</script>

<style>
.card-skeleton {
    border-top-left-radius: 30%;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 30%;
    width: 250px;
    height: 400px;
    background-image: linear-gradient(to bottom, #000, #fff4);
    box-shadow: 0px 0px 2px #000000;
    animation: pulse 3s infinite alternate;
}

@keyframes pulse {
    to {
        opacity: 0.3;
    }
}
</style>