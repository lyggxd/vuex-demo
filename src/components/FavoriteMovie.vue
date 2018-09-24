<template>
    <div>
        <h3>影片列表</h3>
        <ul>
            <li v-for="(movie, index) in movieList" :key="index">
                {{movie.name}}({{movie.year}})
                <span @click="removeMovie({ id: movie.id })">❌</span>
                <span v-if="seenIds.includes(movie.id)" @click="removeFromSeen({ id: movie.id })">✅</span>
                <span v-else @click="addToSeen({ id: movie.id })">☑️</span>
            </li>
        </ul>
        <label for="input-name">影片名</label>
        <input id="input-name" v-model="inputName"/>
        <label for="input-year">上映时间</label>
        <input id="input-year" v-model="inputYear"/>
        <button @click="addNewMovie()">+</button>
        <div>
            <h3>我看过的</h3>
            <ul>
                <li v-for="(movie, index) in seenList" :key="index">
                    {{movie.name}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    name: 'FavoriteMovie',
    data() {
        return {
            inputName: '',
            inputYear: ''
        }
    },
    computed: {
        ...mapState({
            movieList: state => state.movies.list,
        }),
        ...mapState('my', {
            seenIds: 'seenIds'
        }),
        ...mapGetters('my', {
            seenList: 'seenList'
        })
    },
    methods: {
        ...mapActions({
            addMovie: 'movies/add',
            removeMovie: 'removeMovie'
        }),
        ...mapActions('my', {
            addToSeen: 'addToSeen',
            removeFromSeen: 'removeFromSeen'
        }),
        addNewMovie() {
            this.addMovie({
                name: this.inputName,
                year: this.inputYear
            })
        }
    }
}
</script>

