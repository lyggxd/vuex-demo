import modules from './modules'

export default {
    state: {
        count: 0,
        todos: [
            { id: 1, text: 'done job', done: true },
            { id: 2, text: 'todo job', done: false }
        ]
    },
    getters: {
        doneTodos: (state) => (state.todos.filter(todo => todo.done)),
        doneTodosCount: (state, getters) => (getters.doneTodos.length),
        getTodoById: (state) => (id) => (state.todos.find(todo => id === todo.id))
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.amount
        }
    },
    actions: {
        increment(ctx, payload) {
            ctx.commit('increment', payload)
        },
        incrementAsync(ctx, payload) {
            setTimeout(() => {
                ctx.commit('increment', payload)
            }, 1000)
        },
        removeMovie({ commit }, { id }) {
            commit('movies/remove', { id })
            commit('my/removeFromSeen', { id })
            // commit('my/removeFromWant', { id })
        }
    },
    modules,
    strict: true,
    plugins: [],
}