export const state = () =>({
    isLoading: false,
})

export const mutations = {
    set(state, [key, value]) {
        state[key] = value
    }
}