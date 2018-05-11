<template>
  <div class="main-five">
        <h2>What makes a great team?</h2>
        <div class="main-five-first">
                <div class="main-five-five">
                    <img src="../assets/guy-sitting-on-pc.jpg" alt="pre-select">
                    <p>Two common proverbs stand in stark contrast to each other when we think about a great team.</p>
                </div>
                <div class="main-five-five">
                    <img src="../assets/five-dudes.jpg" alt="pre-select">
                    <p>What if they are both true, but refer to different human characteristics? That's right! Diversity is important, yet people in a team should get along.</p>
                </div>
                <div class="main-five-five">
                    <img src="../assets/three-running-people.jpg" alt="pre-select">
                    <p>Matchademics differentiates between personalities and personal values. Personalities, genders, and backgrounds should be diverse! The goals of people on a team should be the same.</p>
                </div>
                </div>
           
        
<div class="paragraph">
<p>Matchademics offers tools to put together ideal teams. These teams are as <br> diverse as possible, yet all members share the same core values. </p>
</div>
<div class="flex-container">
  <button>Request the Whitepaper!</button>
</div>
 



  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.main-five{
    @include our-border;
    border-color: $v-grey;
    width: 100vw;
    text-align: center;

    h2{
    line-height: 1.5;
    font-size: $v-one-huge;

    }

        .main-five-first{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: $v-font-blue;
           
                 
                }
}

      



.main-five-five{
    margin: 80px 0px;
    font-size: $v-size-one;
    margin-bottom: 150px;
    font-size: $v-size-two;
        >p{

        width: 451px;
        height: auto;
        text-align: justify;
        margin: 0 auto;
        }

        p:nth-child(1){
        align-items: center;
        display: flex;
        justify-content: flex-start;
        }          
        p:nth-child(2){
        align-items: center;
        display: flex;
          justify-content: flex-start;
        }       
        p:nth-child(3){
        align-items: center;
        display: flex;
          justify-content: flex-start;

        }       

    
} 
.paragraph{
font-size: 34px;
width: 1351px;
height: 138px;
text-align: justify;
margin: 0 auto;
font-weight: $v-bold;
}

.flex-container {
display: flex;
align-items: center;
flex-direction: column;
margin-top: 100px;
color: white;
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


}
}




</style>

<script>
export default {
  
}
</script>


