<template>
  <div class="main-five">
        <h2>The Matchademics-Team</h2>
        <div class="main-five-first">
                <div class="main-five-five">
                    <img src="../assets/chris.png" alt="pre-select">
                    <p>Chris Sawtelle.</p>
                    <p>Co-founder.</p>
                </div>
                <div class="main-five-five">
                    <img src="../assets/jan.png" alt="pre-select">
                    <p>Chris Sawtelle.</p>
                    <p>Co-founder.</p>
                </div>
                <div class="main-five-five">
                    <img src="../assets/jonas.png" alt="pre-select">
                    <p>Chris Sawtelle.</p>
                    <p>Co-founder.</p>
                </div>
                <div class="main-five-five">
                    <img src="../assets/max.png" alt="pre-select">
                    <p>Chris Sawtelle.</p>
                    <p>Co-founder.</p>
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
.main-five{
    @include our-border;
    border-color: $v-orange;
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
    margin: 80px 50px;
    font-size: $v-size-one;
    margin-bottom: 368px;
    font-size: $v-size-two;
        >p{
        text-align: center;
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
        p:nth-child(4){
        align-items: center;
        display: flex;
        justify-content: flex-start;

        }  
      
        
        img{
            height: 250px;
            width: 250px;
        }
    
} 







</style>



