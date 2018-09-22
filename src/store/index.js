
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
    modules: {},
    strict: true,
    plugins: [],
}