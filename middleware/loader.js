export default ({app}) => {
    app.router.beforeEach((to, from, next) => {
        app.store.commit('loader/set', ['isLoading', true] );
        next()
    })

    app.router.onReady(() => {
        setTimeout(() => {
            app.store.commit('loader/set', ['isLoading', false] );
        }, 1000)
    })
}