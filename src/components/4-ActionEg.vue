<template>
    <div>
        <h3>action</h3>
        <div>
            <span>{{count}}</span>
            <button @click="plus(1)">plus 1</button>
            <button @click="plus(10)">plus 10</button>
            <!-- <button @click="plusAsync(1)">plusAsync</button> -->
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'ActionEg',
    computed: {
        ...mapState(['count'])
    },
    methods: {
        plus(amount) {
            this.$store.dispatch('increment', { amount })

            // this.$store.dispatch({
            //     type: 'increment',
            //     amount
            // })
        }

        // ...mapActions({
        //     increment: 'increment',
        //     incrementAsync: 'incrementAsync'
        // }),
        // plus(amount) {
        //     this.increment({ amount })
        // },
        // plusAsync(amount) {
        //     this.incrementAsync({ amount })
        // }
    }
}
</script>

