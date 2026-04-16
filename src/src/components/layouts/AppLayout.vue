<script setup lang="ts">
import { useRouter } from 'vue-router';

type Props = {
  name: string;
}

defineProps<Props>();

const router = useRouter();

const back = () => {
  router.back();
}
</script>

<template>
  <div>
    <div class="p-5 pt-10 bg-gray-50">
      <div class="flex items-center justify-between">
        <span :onclick="back" class="app-btn-secondary">←</span>
        <span class="text-xl">{{ name }}</span>
        <span></span>
      </div>
    </div>
    <div>
      <div class="p-5">
        <slot />
      </div>
    </div>
  </div>
</template>