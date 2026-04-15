<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const back = () => {
  router.back();
}
</script>

<template>
  <div class="p-10 pt-16">
    <span :onclick="back" class="app-btn-primary">←</span>
    <div class="py-10"><slot /></div>
  </div>
</template>