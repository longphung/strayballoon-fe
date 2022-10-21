import { createApp } from 'vue';
// Icons css
import './assets/strayballoon/style.css';
// Global
import './global.scss';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
