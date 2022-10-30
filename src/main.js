import { createApp } from 'vue';
import Toast, { TYPE } from 'vue-toastification';
// Icons css
import './assets/strayballoon/style.css';
import 'vue-loading-overlay/dist/css/index.css';
import 'vue-toastification/dist/index.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
// Global
import './global.scss';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const options = {
  toastDefaults: {
    // ToastOptions object for each type of toast
    [TYPE.ERROR]: {
      timeout: 10000,
      closeButton: false,
    },
    [TYPE.SUCCESS]: {
      timeout: 3000,
      hideProgressBar: true,
    },
  },
};

app.use(Toast, options);
app.use(router);
app.config.unwrapInjectedRef = true;
app.mount('#app');
