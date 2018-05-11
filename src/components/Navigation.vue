<template>
  <div class="hello">
    <div class="right-header">
      <div class="right-header-img">
        <div><img src="../assets/logo.png"></div>  
      </div>
      <div class="right-header-text">
        <div><span>MATCH</span>ADEMICS</div>
        <div>Build teams that work</div>
      </div>
    </div>
 
    <div class="left-header">
            <div><a href="#">Request Demo</a></div>
            <div><a href="#">Request an Offer</a></div>
            <div><a href="#">Blog</a></div>
            <div class="line-of"></div>
            <div><a href="#">Sign In</a></div>
    </div>

    <div class="social-media">
        <div><a href="#"><i class="fa fa-facebook"></i></a></div> 
        <div><a href="#"><i class="fa fa-twitter"></i></a></div>
        <div><a href="#"><i class="fa fa-envelope-o"></i></a></div>
    </div>
    
  
  </div>
</template>

<script>
  export default{
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>     

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../scss/variables.scss';
.hello {
display: flex;
justify-content:space-between;
flex-direction: row;
align-items: center;
padding: 0px 10px;
font-family: Segoe UI, Semibold;
position: absolute;
width: 100vw;

a{
  text-decoration: none;
  color: $v-dark-blue;
}

.right-header{
display: flex;
flex-direction: row;
align-items: center;

}
.right-header-text{
align-items: center;
font-size: $v-size-one;
color: $v-light-blue;
div{
  &:first-child{
    font-weight: 900;
    color: $v-dark-blue;
    span{
    color: $v-light-blue;
    } 
  }
  &:last-child {
    font-size: $v-size-two;
  }
  }
  
}
.left-header{
display: flex;
flex-direction: row;
font-size: $v-size-two;
color: $v-dark-blue;
  >div {
    margin: 30px;

  }
  .line-of{
  color: $v-dark-blue;
  height: $v-size-one;
  border-width: 2px;
  border-left-style: solid;

  }

}

.social-media {
display: flex;
flex-direction: row;

>div {
    margin: 30px;
    text-decoration: none;
     i{
    font-size: $v-size-one;
  }
  }
 
}

}

 
   img {
     height: 100px;
     width: 100px;
   }
  
  
</style>
