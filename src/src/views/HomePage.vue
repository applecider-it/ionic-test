<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Todoアプリ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-input v-model="text" placeholder="入力"></ion-input>

        <ion-button  expand="block" shape="round" @click="addTodo"> 追加 </ion-button>

        <ion-list>
          <ion-item v-for="(todo, index) in todos" :key="index">
            {{ todo }}
            <ion-button slot="end" color="danger" @click="removeTodo(index)">
              削除
            </ion-button>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
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
} from '@ionic/vue';

import { ref } from 'vue';

const text = ref('');
const todos = ref([]);

const addTodo = () => {
  if (!text.value) return;
  todos.value.push(text.value);
  text.value = '';
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
