export default {
    namespaced: true,
    state: {
        list: [{
            id: 1,
            name: 'The Shawshank Redemption',
            year: 1994
        }, {
            id: 2,
            name: '霸王别姬',
            year: 1993
        }, {
            id: 3,
            name: 'Léon',
            year: 1994
        }, {
            id: 4,
            name: 'Forrest Gump',
            year: 1994
        }]
    },
    mutations: {
        add(state, { name, year }) {
            const { list } = state;
            const lastId = list[list.length - 1].id;
            list.push({
                id: lastId + 1,
                name,
                year
            })
        },
        remove(state, { id }) {
            state.list = state.list.filter(
                (item) => (item.id !== id)
            )
        }
    },
    actions: {
        add({ commit }, { name, year }) {
            commit('add', { name, year })
        },
        remove({ commit }, { id }) {
            commit('remove', { id })
        }
    }
}