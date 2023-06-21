<script setup>
import {ref, computed} from 'vue'

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
  <div class="app__wrapper">
    <div class="left-bar">
      <a @click.prevent="activePage = 1" href="#">Страница 1</a>
      <a @click.prevent="activePage = 2" href="#">Страница 2</a>
    </div>
    <div class="app__main">
      <div v-if="activePage === 1">1 Содержимое страницы 1</div>
      <div v-else-if="activePage === 2">2 Содержимое страницы 2</div>
    </div>
  </div>
</template>

<style scoped>
.left-bar {
  margin-bottom: 30px;
  background-color: rgb(51, 51, 251);
  height: 100%;
  padding: 20px;
}
.left-bar a {
  display: inline-block;
  margin-right: 20px;
  padding: 10px;
  border: 1px solid rgb(195, 194, 194);
  color: white;
}
.left-bar a:last-child {
  margin-right: 0;
}
.app__wrapper {
  display: flex;
  height: 100%;
}
.app__main {
  padding-top: 30px;
  margin-left: 30px;
}
</style>
