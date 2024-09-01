<script setup lang="ts">
import defaultLayout from "./layouts/default.vue";
import TitleBar from "./components/TitleBar.vue";

import { useColorMode } from "@vueuse/core";

useColorMode({ disableTransition: false });

const custom_titlebar = false;

window.electronAPI.sendMessage("Hello from App.vue!");
</script>

<template>
  <TitleBar v-if="custom_titlebar" />
  <main>
    <component :is="$route.meta.layout || defaultLayout">
      <RouterView />
    </component>
  </main>
</template>
