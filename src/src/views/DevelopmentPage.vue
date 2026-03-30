<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>開発者向けページ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>
        <ion-item>
          <ion-button @click="login"> ログイン </ion-button>
          <ion-button @click="logout"> ログアウト </ion-button>
        </ion-item>
        <ion-item>
          <ion-button @click="go"> トップへ(router) </ion-button>
          <ion-button router-link="/"> トップへ(link) </ion-button>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonButtons,
  IonBackButton,
} from '@ionic/vue';

import { useRouter } from 'vue-router';

import { isAuthenticated } from '@/services/auth/auth'

const router = useRouter();

const go = () => {
  router.push('/');
};

const login = () => {
  console.log('login')

  isAuthenticated.value = true;
}

const logout = () => {
  console.log('logout')

  isAuthenticated.value = false;
}

</script>