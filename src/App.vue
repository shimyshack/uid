<script setup lang="ts">
import { ref } from 'vue'

const input = ref<null | HTMLElement>(null)
</script>

<template>
  <div>
    <label :for="input && input.id || undefined">Input label</label>
    <input v-uid ref="input" type="text">
  </div>
</template>
