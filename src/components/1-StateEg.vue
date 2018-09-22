<template>
    <div>
      <h2>state</h2>
      <div>this.$store.state.count = {{this.$store.state.count}}</div>
      <div>localCount = {{localCount}}</div>
      <!-- <div>localComputed = {{localComputed}}</div> -->
      <!-- <div>countPlusLocalCount = {{countPlusLocalCount}}</div> -->
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'StateEg',
  data() {
    return {
      localCount: 1
    }
  },
  /* 直接通过 this.$store 获取 */
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // },

  /* mapState-数组 */
  // computed: mapState(['count'])

  // mapState-对象
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count,

  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   // count: 'count',

  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   // countPlusLocalCount(state) {
  //   //   return state.count + this.localCount
  //   // }
  // })

  /* mapState-局部状态+全局状态 */
  // computed: {
  //   localComputed() {
  //     return this.localCount + 1;
  //   },
  //   ...mapState({
  //     countPlusLocalCount(state) {
  //       return state.count + this.localCount
  //     }
  //   })
  // }
}
</script>
