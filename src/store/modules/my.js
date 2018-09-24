export default {
    namespaced: true,
    state: {
        seenIds: [1,3,4],
        // wantIds: []
    },
    getters: {
        seenList(state, getters, rootState) {
            return rootState.movies.list.filter(
                (item) => (state.seenIds.includes(item.id))
            )
        }
    },
    mutations: {
        addToSeen(state, { id }) {
            state.seenIds.push(id)
        },
        // addToWant(state, { id }) {
        //     state.wantIds.push(id)
        // },
        removeFromSeen(state, { id }) {
            state.seenIds = state.seenIds.filter(
                (item) => (item !== id)
            )
        },
        // removeFromWant(state, { id }) {
        //     state.wantIds = state.wantIds.filter(
        //         (item) => (item !== id)
        //     )
        // }
    },
    actions: {
        addToSeen({ commit }, { id }) {
            commit('addToSeen', { id })
        },
        // addToWant({ commit }, { id }) {
        //     commit('addToWant', { id })
        // },
        removeFromSeen({ commit }, { id }) {
            commit('removeFromSeen', { id })
        },
        // removeFromWant({ commit }, { id }) {
        //     commit('removeFromWant', { id })
        // }
    }
}