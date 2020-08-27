<template>
  <RowItem v-for="(project, i) in projects" :key="project.id" :input="project" :ref="(el) => { rows[i] = el; }" @action="onAction"></RowItem>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, onBeforeUpdate } from "vue";
import { Project } from '@/stores/datastore';

import RowItem from '@/molecules/RowItem.vue';

export default defineComponent({
  components: {
    RowItem
  },
  props: {
    projects: {
      type:  Array as PropType<Project[]>,
      required: true
    }
  },
  setup() {

    // https://markus.oberlehner.net/blog/refs-and-the-vue-3-composition-api/
    const rows = ref([]);

    const selectedProject = ref<Project | null>(null);

    const onAction = (project: Project, action: string) => {
      console.log('action requested for project ' + project.name)
    };

    // Make sure to reset the refs before each update.
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate', rows.value);
      rows.value = []; // ?!?
    });

    return { onAction, selectedProject, rows }
  }
});
</script>
<style lang="scss" scoped>

</style>
