import { createApp } from 'vue'
import App from './App.vue'

import { dataStoreSymbol, createDataStore } from './stores/datastore';

// firebase is ready, we can mount the app
// also triggered after a page reload

// andiamo
const app = createApp(App);

// l'accès aux données
app.provide(dataStoreSymbol, createDataStore());

// run baby run !
app.mount('#app');
