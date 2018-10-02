<template>
  <div class="firm">
       <div class="firm-main">
         <h2>We know what makes <br> a great team.</h2>
         <div class="firm-main-buttons">
            <div>I want help with <br> HIRING</div>
            <div>Learn more!</div>
            <div>I want help with <br> MANAGING A TEAM</div>
          </div>

       </div>

  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>
@import '../scss/variables.scss';

.firm{
  background: url(../assets/background-hands.jpg) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  font-size: $v-size-one;
  .firm-main{
  margin: auto;
  text-align: center;
  color: $v-font-blue;

  .firm-main-buttons{
    display: flex;
    flex-direction: row;
    color: white; 
   
  >div{
    padding: 18px 111px;
    margin: 10px ;
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
