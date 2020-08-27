<template>
<div ref="rootDiv" class="row">
  <div class="col">
    <h5>{{ input.name }}</h5>
    <h2><a style="cursor: pointer" @click="emit('action', input, 'view')">{{ currency(input.amount) }} €</a></h2>
  </div>
</div>
</template>

<script lang="ts">

import { defineComponent, PropType, ref, onMounted } from "vue";
import { Project } from '@/stores/datastore';
import currency from '@/filters/currency';

export default defineComponent({
  props: {
    input:{
      type: Object as PropType<Project>,
      required: true
    }
  },
  setup(props, { emit }) {

    return { emit, currency }

  }
})

</script>

<style lang="scss" scoped>

div.row {
  user-select: none;
  background-color: lightgray;
  border-radius: 6px;
  margin: 2em 0 2em 0;
}

</style>
