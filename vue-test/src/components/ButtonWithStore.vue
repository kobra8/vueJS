<template>
  <div>
    <h3>Counter value is {{counter}}</h3>
    <button @click="add">Add 1</button>
    <button @click="substract">Substract 1</button>
  </div>
</template>
<script>
import store from '../store'
 export default {
   name: 'ButtonWithStore',
   computed: {
     counter: () => store.getters.getCounter
   },
   methods: {
     add: () => store.dispatch('increaseCounter'),
     substract: () => store.dispatch('decreaseCounter')
   }
}

</script>
