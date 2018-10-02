<template>
  <div class="great-team">
        <h2>What makes a great team?</h2>
        <div class="images-pictures">
                <div>
                    <img src="../assets/guy-sitting-on-pc.jpg" alt="pre-select">
                    <p>Two common proverbs stand in stark contrast to each other when we think about a great team.</p>
                </div>
                <div>
                    <img src="../assets/five-dudes.jpg" alt="pre-select">
                    <p>What if they are both true, but refer to different human characteristics? That's right! Diversity is important, yet people in a team should get along.</p>
                </div>
                <div>
                    <img src="../assets/three-running-people.jpg" alt="pre-select">
                    <div></div>
                   <p>{{value}} differentiates between personalities and personal values. Personalities, genders, and backgrounds should be diverse! The goals of people on a team should be the same.</p>
                </div>
        </div>
           
        
<div class="paragraph">
    <p> {{returnName}} offers tools to put together ideal teams. These teams are as <br> diverse as possible, yet all members share the same core values. </p>
</div>
<div class="flex-container">
  <button>Request the Whitepaper!</button>
</div>
 



  </div>
</template>

<script>
export default {
name: "GreatTeam",
computed: {
    returnName(){
        return this.$store.getters.value;
    }
}
     
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.great-team{
    @include our-border;
    border-color: $v-grey;
    width: 100vw;
    text-align: center;

    h2{
    line-height: 1.5;
    font-size: $v-one-huge;
    margin-bottom: 150px;
    }
      
}

      



.images-pictures{
    font-size: $v-size-one;
    font-size: $s;
    display: flex;

    
   >div {
        justify-content: center;
        flex: 1;
        
        
    p{
        text-align: center;
        margin: 0px 80px;
        
    }
    &:nth-child(2){
        margin-left: -90px;
        margin-right: -90px;
    }   
    img {
        width: 350px;
        height: 250px;
    } 
   
   }
      

    
} 
.paragraph{
font-size: $l;
width: 100vw;
height: 138px;
text-align: center;
margin: 120px 0px; 
font-weight: $v-bold;
}

.flex-container {
display: flex;
align-items: center;
flex-direction: column;
margin-top: 100px;

&>button {
margin: 25px;
text-align: center;
line-height: 75px;
font-size: 30px;
border-radius: 15px;
border: $border;
width: 461px;
height: 97px;
font-weight:400;
background: $v-grey;
color: white;
margin-bottom: 100px;
}
}




</style>

<script>
export default {
  
}
</script>


