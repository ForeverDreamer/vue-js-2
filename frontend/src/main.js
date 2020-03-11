import Vue from 'vue'
import App from './App.vue'
// import Home from './components/Home'

Vue.config.productionTip = false;
// 全局组件
// Vue.component('app-servers', Home);

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app');


