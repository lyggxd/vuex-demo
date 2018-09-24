<template>
    <div>
        <h2>mutation</h2>
        <div>
            <span>{{count}}</span>
            <button @click="plus(1)">plus 1</button>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'MutationEg',
    computed: {
        ...mapState(['count'])
    },
    methods: {
        plus(amount) {
            this.$store.commit('increment', { amount })
        }
        
        // ...mapMutations({
        //     increment: 'increment'
        // }),
        // plus(amount) {
        //     this.increment({ amount })
        // }
    }
}
</script>

