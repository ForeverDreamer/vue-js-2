<template>
  <div id="app">
<!--    <h1>全局组件</h1>-->
<!--    <app-servers></app-servers>-->
<!--    <hr>-->

<!--    <div class="container">-->
<!--      <app-header></app-header>-->
<!--      <hr>-->
<!--      <div class="row">-->
<!--        <servers></servers>-->
<!--        <app-server-details></app-server-details>-->
<!--      </div>-->
<!--      <hr>-->
<!--      <app-footer></app-footer>-->
<!--    </div>-->

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <app-user></app-user>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  //局部组件
  // import Header from './components/shared/Header';
  // import Servers from './components/server/Servers';
  // import ServerDetails from  './components/server/ServerDetails';
  // import Footer from './components/shared/Footer';

  import User from './components/user/User.vue';

  export default {
    name: 'App',
    components: {
      // appHeader: Header,
      // Servers,
      // 'app-server-details': ServerDetails,
      // 'app-footer': Footer,
      appUser: User
    }
  }
</script>

<style>
  div.component {
    border: 1px solid black;
    padding: 30px;
  }
</style>
