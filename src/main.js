import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ProfileView from './views/ProfileView.vue'
// import SettingsView from './views/SettingsView.vue'
// import UsersView from './views/UsersView.vue'

const router = createRouter({
  // history: createWebHashHistory() //https://expample.com/#/
  history: createWebHistory(), //https://expample.com/
  routes: [
    { name: 'Profile', path: '/', component: ProfileView },
    { name: 'Settings', path: '/settings', component: () => import('./views/SettingsView.vue')},
    { name: 'Users', path: '/users/:id(\\d+)', component: () => import ('./views/UsersView.vue') },
    // регулярное выражение (\\d+) говорит, что id включает только цифры
  ]
})

createApp(App).use(router).mount('#app')
