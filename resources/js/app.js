
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import Form from 'vform'
Vue.use(VueRouter);

window.Form =Form;
// Vue.component(HasError.name,HasError);
// Vue.component(AlertError.name,AlertError);
// sweet alert 
import Swal from 'sweetalert2'
window.Swal =Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast =Toast;
//end sweet alert

import {routes} from './routes/routes' ;
import Vue from 'vue';

  const router = new VueRouter({
    routes,
   mode : 'history' ,
     
  })


  //Vue.component('home', require('./components/backend/home').default);
const app = new Vue({
    el: '#app',
     router
});
