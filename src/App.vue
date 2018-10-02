<template>
  <div id="app">
   <!--  <img src="./assets/logo.png"> -->
    <the-navigation/>
    <the-main-component/>
    <vue-carousel/>
    <the-hiring-component/>
    <the-managing-team/>
    <the-great-team/>
    <the-team-component/>
    <the-footer-component/>
    <the-change-page />
  </div>
</template>

<script>

import TheNavigation from "./components/TheNavigation";
import TheMainComponent from "./components/TheMainComponent";
import VueCarousel from "./components/VueCarousel"
import TheHiringComponent from "./components/TheHiringComponent";
import TheManagingTeam from "./components/TheManagingTeam";
import TheGreatTeam from "./components/TheGreatTeam";
import TheTeamComponent from "./components/TheTeamComponent";
import TheFooterComponent from "./components/TheFooterComponent";
import TheChangePage from "./components/TheChangePage";

export default {
  name: "App",
  components: {
    TheNavigation,
    TheMainComponent,
    TheHiringComponent,
    TheManagingTeam,
    TheGreatTeam,
    VueCarousel,
    TheTeamComponent,
    TheFooterComponent,
    TheChangePage
  }
}

</script>


<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
