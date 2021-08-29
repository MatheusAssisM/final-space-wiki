export const state = () => ({
    allCharacters: []
})

export const mutations = {
    set(state, [key, value]) {
        state[key] = value
    }
}

export const actions = {
    async getAllCharacters({ commit }) {
        let result = await this.$apiFinalSpace.get('/character/')
        commit('set', ['allCharacters', result.data])
        return result.data
    }
}