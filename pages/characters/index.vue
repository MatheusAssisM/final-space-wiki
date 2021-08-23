<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 2xl:gap-6 gap-4 mt-4 mb-4 p-4">
        <div v-for="character of characters" :key="character.id" class="p-0 m-0 flex justify-center">
            <Card
                v-if="!skeleton"
                :item="character"
            />
            <CardSkeleton 
                v-else
            />
        </div>
    </div>
</template>

<script>
import Card from '~/components/Card.vue'
import CardSkeleton from '~/components/skeletons/CardSkeleton.vue'

export default {
    components: {
        Card,
        CardSkeleton
    },
    data() {
        return {
            skeleton: true,
            characters: []
        }
    },

    methods: {
        async getAllCharaters() {
            let allCharacters = await this.$store.dispatch('finalSpace/getAllCharacters')
            this.characters = allCharacters
            return 
        }
    },

    async mounted() {
        await this.getAllCharaters()
        this.skeleton = false
    }
}
</script>