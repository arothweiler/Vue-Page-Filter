<template>
  <div class="main">
       <div class="main-main">
         <h2>{{getTitle}}</h2>
         <div  class="main-main-buttons">
            <div :style="{background: getGlobalColorValue }">I want help with <br> HIRING </div>
            <div :style="{background: getGlobalColorValue }">Learn more!</div>
            <div :style="{background: getGlobalColorValue }">I want help with <br> MANAGING A TEAM</div>
            <a href="https://andrerothweiler.ch/vuefilter/#/">Klick Here! </a>
          </div>
       </div>
  </div>
</template>

<script>
export default {
 name: "MainComponent",
 computed: {
   getTitle(){
     return this.$store.getters.title;
   },
   getGlobalColorValue(){
     return this.$store.getters.getMainColorValue;
   }
 },

}
</script>


<style lang="scss" scoped>
@import '../scss/variables.scss';

.main{
  background: url(../assets/background-hands.jpg) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  font-size: $v-size-one;
  .main-main{
  margin: auto;
  text-align: center;
  color: $v-font-blue;

  .main-main-buttons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: white; 
   
  &>div{
    padding: 18px 50px;
    margin: 30px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 41px;
    background: yellow;

  &:nth-child(1){
    background: $v-dark-blue;
  }
  &:nth-child(2){
    background: $v-grey;
    margin: 42px 120px;
  }
  &:nth-child(3){
    background: $v-light-blue;
  }
  }
    
  }
  }
}
</style>
