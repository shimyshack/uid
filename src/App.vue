<script setup lang="ts">
import { ref } from 'vue'
const input = ref<null | HTMLElement>(null)
</script>

<template>
  <div>
    <label :for="input?.dataset.uid">Input label</label>
    <input v-uid ref="input" :id="input?.dataset.uid" type="text">
  </div>
</template>
