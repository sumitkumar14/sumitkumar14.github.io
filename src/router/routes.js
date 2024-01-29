import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Registration from '@/components/Registration.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Registration },
];

export default routes;
