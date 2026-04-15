<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import { auth } from '@/services/auth/auth'
import { showToast } from '@/services/ui/message'

import AppLayout from '@/components/layouts/AppLayout.vue'

const email = ref('test@example.com')
const password = ref('1234')

const router = useRouter();

/** 擬似的なログイン */
const login = async () => {
  console.log('login')

  const status = await auth.login(email.value, password.value);

  if (status === 200) {
    showToast('ログインしました');

    router.back();
  } else if (status === 401) {
    showToast('ログイン失敗');
  } else {
    showToast('通信エラー');
  }
}

/** 擬似的なログアウト */
const logout = () => {
  console.log('logout')

  auth.logout();

  showToast('ログアウトしました');

  router.back();
}
</script>

<template>
  <AppLayout>
    <div class="space-y-5">
      <div class="space-y-2">
        <div>
          <input v-model="email" type="text" class="app-form-input" />
        </div>
        <div>
          <input v-model="password" type="text" class="app-form-input" />
        </div>
      </div>

      <div class="space-x-3">
        <button @click="login" class="app-btn-primary"> ログイン </button>
        <button @click="logout" class="app-btn-primary"> ログアウト </button>
      </div>
    </div>
  </AppLayout>
</template>