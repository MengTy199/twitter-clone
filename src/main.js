import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index';
import './assets/tailwind.css'
import pinia from './pinia';

const app = createApp(App);

app.use(router)
app.use(pinia)

app.mount('#app');

