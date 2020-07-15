<template>
    <div class="container">
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
        <div class="row">
            <div class="col-xs-12">
                <!--          <app-user></app-user>-->
                <button @click="selectedComponent='appQuote'">Quote</button>
                <button @click="selectedComponent='appAuthor'">Author</button>
                <button @click="selectedComponent='appNew'">New</button>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                <!--            <app-quote>-->
                <!--                <h2 slot="title">{{ quoteTitle }}</h2>-->
                <!--                <p slot="content">A wonderful Quote</p>-->
                <!--                <h3>The rest content 1</h3>-->
                <!--                <div>The rest content 2</div>-->
                <!--                <p>The rest content 3</p>-->
                <!--            </app-quote>-->
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

  // import User from './components/user/User.vue';

  import Quote from './components/Quote/Quote.vue';
  import Author from './components/Quote/Author.vue';
  import New from './components/Quote/New.vue';

  export default {
      name: 'App',
      components: {
          // appHeader: Header,
          // Servers,
          // 'app-server-details': ServerDetails,
          // 'app-footer': Footer,
          // appUser: User,
          appQuote: Quote,
          appAuthor: Author,
          appNew: New
      },
      data: function () {
          return {
              quoteTitle: 'The Quote',
              selectedComponent: 'appQuote'
          }
      }
  }
</script>

<style>
  /*div.component {*/
  /*  border: 1px solid black;*/
  /*  padding: 30px;*/
  /*}*/
</style>
