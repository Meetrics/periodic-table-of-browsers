import Vue from 'vue';
import Router from 'vue-router';
import Overview from 'components/Overview';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: Overview
    }
  ]
});
