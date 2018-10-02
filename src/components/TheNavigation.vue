<template>
  <div class="hello">
    <div class="right-header">
      <div class="right-header-img">
        <div><img :src="getHeaderPicture"></div>  
      </div>
      <div class="right-header-text">
        <div :style="{color: getGlobalColorValue }">{{getNameFun}}</div>
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
        <div><a href="#"><i class="fab fa-facebook-f"></i></a></div> 
        <div><a href="#"><i class="fab fa-twitter"></i></a></div>
        <div><a href="#"><i class="fab fa-envelope-o"></i></a></div>
    </div>
    
  
  </div>
</template>
<script>
export default {
    name: "Navigation",
     computed: {
            getNameFun(){
              return  this.$store.getters.value;
            },
            getHeaderPicture(){
              return this.$store.getters.getHeaderPicture;
            },
            getGlobalColorValue(){
              return this.$store.getters.getMainColorValue;
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
     color: $v-light-blue;
    span{
    color: $v-dark-blue;
    font-weight: 900;
    } 
  }
  &:last-child {
    font-size: $v-size-two;
    color: $v-font-blue;
    font-weight: 600;
  }
  }
  
}
.left-header{
display: flex;
flex-direction: row;
font-size: $v-size-two;
color: $v-dark-blue;
font-weight: 600;
  >div {
    margin: 30px;

  }
  .line-of{
  color: $v-dark-blue;
  height: $v-size-one;
  border-width: 4px;
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
