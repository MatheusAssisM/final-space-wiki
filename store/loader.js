export const state = () =>({
    isLoading: true,
})

export const mutations = {
    set(state, [key, value]) {
        state[key] = value
    }
}