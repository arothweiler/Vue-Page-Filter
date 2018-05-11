<template>
  <div id="app">
    <Navigation/>
    <Main/>
    <Carousel/>
    <MainTwo/>
    <MainThree/>
    <MainFour/>
    <MainFive/>
    <MainSix/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Main from './components/Main.vue'
/* import MainTwo from './components/MainTwo.vue' */
import Carousel from './components/Carousel.vue'
import MainThree from './components/MainThree.vue'
import MainFour from './components/MainFour.vue'
import MainFive from './components/MainFive.vue'
import MainSix from './components/MainSix.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components:{
    Navigation,
    Main,
   /*  MainTwo, */
    Carousel,
    MainThree,
    MainFour,
    MainFive,
    MainSix,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
#app  {
  font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;


}


</style>
