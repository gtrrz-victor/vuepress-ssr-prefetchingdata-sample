<template>
  <div :data-state="itemsToString"> 
    <strong>
      Ejemplo de componente donde se inyecta información de un api rest en el
      hook created
    </strong>
    <ul>
      <li v-for="item in items" :key="item.key">
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios")
export default {
  data () { return { items: [] } },
  computed:{
      itemsToString(){return JSON.stringify(this.items)}
  },
  async serverPrefetch () {
    const response = await axios.get('http://localhost:3000');
    this.items = response.data
  },
  beforeMount() {
    this.items = JSON.parse(this.$el.dataset.state)
  },
}
</script>
