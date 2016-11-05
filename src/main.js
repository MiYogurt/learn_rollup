import hello from './hello.js';
import { version } from '../package.json';
import debug from 'debug';

import Vue from 'vue';
// import Vue from 'vue/dist/vue.js';
import App from './App.vue';


import './style/app.css';

const log = debug('app:log');

const bbq = 45;

const str = `bbq is ${bbq} $!`;

console.log(ENV);

if (ENV !== 'production') {
	debug.enable('*');
	log('Logging is enabled');
}else{
	debug.disable()
}

log('Hello xiao ming ming!')

new Vue({
    render : (h) => {
      return h(App)
    }
}).$mount('#app');

// var vm = new Vue({
//   el: '#app',
//   render: h => h(App)
// })
