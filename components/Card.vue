<template>
    <div class="card p-0 m-0 grid grid-cols-1 grid-row-3 overflow-hidden lg:animation-none">
        <section id="image" class="row-span m-0 p-0 image-card">
            <img :src="item.img_url" alt="" loading="lazy">
        </section>

        <section id="content" class="title row-start-2 flex justify-center items-start h-1">
            <span class="font-medium text-lg" :title="item.name">{{item.name | truncWord}}</span>
        </section>

        <section id="footer" class="row-start-3 pl-1 h-10">
            <span class="">Specie: </span>
            <span class="tag rounded text font-thin text-sm p-1" :title="item.species">
               {{item.species | truncWord}}
            </span>
        </section>
    </div>
</template>

<script>

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.card {
    border-top-left-radius: 30%;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 30%;
    width: 250px;
    height: 400px;
    position: relative;
    background-color: #fff1;
    box-shadow: 0px 0px 5px #000000;
}


.tag {
    background-color: #43525A;
}


@media screen and (min-width: 1024px) {
    .card:after {
        content: "";
        position: absolute;
        top: -110%;
        left: -210%;
        width: 200%;
        height: 200%;
        transform: rotate(30deg);
        background: rgba(255, 255, 255, 0.13);
        background: linear-gradient(
            to right, 
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.13) 77%,
            rgba(255, 255, 255, 0.5) 92%,
            rgba(255, 255, 255, 0.0) 100%
        );
    }
    
    .card:hover:after {
      opacity: 1;
      top: -30%;
      left: -30%;
      transition-property: left, top, opacity;
      transition-duration: 0.7s, 0.7s, 0.15s;
      transition-timing-function: ease;
    }
    .card:hover {
        animation: zoomOut 0.3s forwards;
    }
    
    @keyframes zoomOut {
        to {
            transform: scale(1.2, 1.1);
            margin: 10px;
        }
        
    }
}

</style>