<template>
<div class="container">
  <ul class="hs full no-scrollbar">
    <li class="item" @click="onClick(null)">all</li>
    <li class="item" v-for="item in categories" :key="item.id" @click="onClick(item)">{{ item.name }}</li>
  </ul>
</div>
</template>

<script lang="ts">

import { defineComponent, computed } from "vue";
import { useDataStore, Category} from '@/stores/datastore';

export default defineComponent({
  setup(props, { emit }) {

    const dataStore = useDataStore();
    const categories = computed(() => Object.values(dataStore.data.categories));

    const onClick = (item: Category) => emit('selected', item);

    return { onClick, categories }

  }
});

</script>

<style lang="scss" scoped>

:root {
  --gutter: 20px;
}

.container {
  padding: var(--gutter) 0;
  display: grid;
  grid-gap: var(--gutter) 0;
  grid-template-columns: var(--gutter) 1fr var(--gutter);
  align-content: start;
}

.container > * {
  grid-column: 2 / -2;
}

.container > .full {
  grid-column: 1 / -1;
}

.hs {
  display: grid;
  grid-gap: calc(var(--gutter) / 2);
  grid-template-columns: 10px;
  grid-template-rows: minmax(150px, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: calc(50% - var(--gutter) * 2);

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  padding-bottom: calc(.75 * var(--gutter));
  margin-bottom: calc(-.25 * var(--gutter));
}

.hs:before,
.hs:after {
  content: '';
  width: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

.hs > li,
.item {
  cursor: pointer;
  scroll-snap-align: center;
  padding: calc(var(--gutter) / 2 * 1.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;

  margin-left: 10px;
  margin-right: 10px;
  border: solid 1px grey;
  width: 200px;
}

.no-scrollbar {
  scrollbar-width: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

</style>
