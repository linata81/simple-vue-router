<script setup>
import {ref, computed} from 'vue'
import LeftBar from './components/LeftBar.vue';

const activePage = ref(1)
const url = computed({
  get(){
    return window.location.href;
  },
  set(value) {
    window.history.pushState({}, value);
  }
})
</script>

<template>
  <div class="app__wrapper app__wrapper_page-type_inner">
    <LeftBar/>
    <!-- <div class="left-bar">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/settings">Настройки</RouterLink>
      <RouterLink to="/users">Пользователи</RouterLink>
    </div> -->
    <div class="app__main">
      <RouterView/>
    </div>
  </div>
</template>