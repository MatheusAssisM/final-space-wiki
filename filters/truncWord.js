import Vue from 'vue'

Vue.filter('truncWord', (value, limit=24, slice=24) => {
    if(!value) return ''
    if(value.length > limit) {
        return value.substring(0, slice) + '...'
    }
    return value
})

