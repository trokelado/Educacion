// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//register firebase plugin in your app entry point segun https://www.youtube.com/watch?v=vHDnZwBCR5U
import VueFire from 'vuefire'; //aregar linea despues de instalar firebase

import Firebase from 'firebase'; //linea agreada para el refresh
import firebaseInit from './components/firebaseInit'; //linea agreada para el refresh
import vSelect from 'vue-select';
//import Carousel3d from 'vue-carousel-3d'; //for global acces
Vue.component('v-select', vSelect);

Vue.config.productionTip = false

Vue.use(VueFire); //aregar linea despues de instalar firebase
//Vue.use(Carousel3d); //for global acces

 //las siuientes lineas fueron agreadas para el refresh
let app;
Firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});

/* originalmente era asi pero 
se cambio para que el refresh nos mantenga en la misma pagina
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
*/


