import { createApp } from 'vue';
import store from './store';
import i18n from './i18n';
import router from './router';

import App from './App.vue';
import { configureFakeBackend } from './helpers/fake_backend';

configureFakeBackend();

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.mount('#app');
