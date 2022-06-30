/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCuKAFV_E3m_tDIh7akgZH9aETTxXYcKNo',
  authDomain: 'copper-2302.firebaseapp.com',
  databaseURL: 'https://copper-2302-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'copper-2302',
  storageBucket: 'copper-2302.appspot.com',
  messagingSenderId: '476226037608',
  appId: '1:476226037608:web:151b01cc28b5c816e1d8dd'
}
// Initialize Firebase
initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
