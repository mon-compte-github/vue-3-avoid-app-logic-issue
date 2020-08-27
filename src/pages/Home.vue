<template>
  <div> 
    <Categories @selected="selectedCategory = $event"></Categories>
    <ProjectsList :projects="filteredProjects"></ProjectsList>
  </div>
</template>

<script lang="ts">

import { defineComponent, computed, ref } from "vue";

import { useDataStore, Category } from '@/stores/datastore';

import Categories from '@/organismes/Categories.vue';
import ProjectsList from '@/organismes/ProjectsList.vue';


export default defineComponent({
  name: 'Home',
  components: {
    Categories,
    ProjectsList
  },
  setup() {

    // pour permettre l'accès aux données
    const dataStore = useDataStore();
    
    // les données de l'application
    const categories = dataStore.data.categories;
    const projects = computed(() => Object.values(dataStore.data.projects));

    // la catégorie active
    const selectedCategory = ref<Category | null>(null);

    // la liste des projets à afficher (i.e. éventuellement filtrée par catégorie)
    const filteredProjects = computed(
      () => Object.values(dataStore.data.projects).filter(p => !selectedCategory.value || selectedCategory.value.id === p.category)
    );

    // sélection d'une catégorie -> filtrage des projets
    const onSelected = (e: Category) => console.log(e);
    
    return { onSelected, categories, projects, filteredProjects, selectedCategory}
  }
});

</script>