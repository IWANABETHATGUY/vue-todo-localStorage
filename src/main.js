// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MuseUi from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'default-passive-events';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(MuseUi);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
