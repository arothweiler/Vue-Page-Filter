<template>
  <div class="team">
        <h2>The {{getNameFun}}-Team</h2>
        <div class="team-first">
                <div class="team-six">
                    <div>
                        <img src="../assets/faces/chris.jpg" alt="chris">
                        <p>Chris</p>
                        <p>Smith</p>
                        <p> <em>co-founder</em></p>
                    </div>
                </div>
                <div class="team-six">
                    <div>
                        <img src="../assets/faces/jan.jpg" alt="jan">
                        <p>Jan</p>
                        <p>Wilson</p>
                        <p><em>adviser</em></p>
                    </div>
                </div>
                <div class="team-six">
                    <div>
                        <img src="../assets/faces/johanna.jpg" alt="johanna">
                        <p>Johanna</p>
                        <p>Doe</p>
                        <p><em>adviser</em></p>
                    </div>
                </div>
                <div class="team-six">
                    <div>
                        <img src="../assets/faces/max.jpg" alt="max">
                        <p>Max</p>
                        <p>Ronald</p>
                        <p><em>co-founder</em></p>
                    </div>
                </div>
         </div>
  </div>
 
</template>

<script>
export default {
   name: 'TeamComponent',
    computed: {
            getNameFun(){
              return  this.$store.state.nameOfTheSite;
            }
        }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.team{
    @include our-border;
    border-color: $v-orange;
    width: 100vw;
    text-align: center;

    h2{
    line-height: 1.5;
    font-size: $v-one-huge;

    }

        .team-first{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: $v-font-blue;
           
                 
                }
}

      



.team-six{
    margin: 80px 50px;
    font-size: $v-size-one;
    margin-bottom: 368px;
     img{
            height: 350px;
            width: 350px;
        }
        p{
            &:nth-child(2){
            margin-top: 50px;
            font-weight: 500;
            }          
            &:nth-child(3){
             font-weight: 500;
            }       
            &:last-child{
                font-size: $v-size-two;
            }
        } 
}
</style>



