<template>
  <aside class="left-bar">
    <div class="left-bar__expander">
      <a class="button button_no-text button_size_xs button_rounded button_color_secondary" href="#">></a>
    </div>
    <div class="left-bar__inner">
      <div class="left-bar__logo-wrapper">
        <a class="logo" href="/">Crm</a>
      </div>
      <MainMenu />
    </div>
  </aside>
</template>

<script setup>
import MainMenu from './MainMenu.vue';
</script>