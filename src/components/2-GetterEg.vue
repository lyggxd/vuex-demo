<template>
    <div>
        <h2>getter</h2>
        <div>doneTodosCount = {{doneTodosCount}}</div>
        <!-- <div>getTodoById(2): {{getTodoById(2)}}</div> -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'GetterEg',
    computed: {
        doneTodosCount() {
            return this.$store.state.todos.filter(todo => todo.done).length
        }
    }

    // computed: {
    //     doneTodosCount() {
    //         return this.$store.getters.doneTodosCount
    //     },
    //     getTodoById() {
    //         return this.$store.getters.getTodoById
    //     }
    // }

    /* mapGetters */
    // computed: {
    //     ...mapGetters(['doneTodosCount', 'getTodoById'])
    //     // ...mapGetters({
    //     //     doneTodosCount: 'doneTodosCount',
    //     //     getTodoById: 'getTodoById',
    //     // })
    // },
}
</script>
