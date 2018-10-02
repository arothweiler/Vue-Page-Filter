<template>
    <div>
        <div id="main-change-page" :style="styles">  
            <div id="left-box">
                <i class="fas fa-sliders-h"></i>  
            </div>
            <h3>Change something...</h3>
            <p>Give a name of this site</p>
            <input placeholder="edit..." :value="value" @input="updateValue" >
            <!-- <p>{{doubleCounter}}</p> -->
          <!--   <p>{{doubleCounter}}</p> -->
            <br><br>
            <p>Our guiding principle</p>
            <textarea rows="3" :value="getValue" @input="updateValueTitle" >
            </textarea>
            <div class="color-picker-div">
                <color-picker
                    class="color-picker"
                    v-model="colors"
                    :value="colors"
                    @input="changeTheColor">
                </color-picker>
            </div>
             <p>Change the logo</p>    
            <div v-for="(image, imageIndex) in getPictures" :key="'image' + imageIndex"  class="logo-picture">
             <img :src="image.pic" :alt="image.alt" @click="returnCurrentSource(image)">
</div> 
        </div>
        
    </div>
</template>

<script>
/* import { mapGetters,  mapMutations} from "vuex"; */
import { Sketch } from 'vue-color';

    export default {
        name: "ChangeName",
        data () {
             return {
                 message: "",
                    colors: {
                        hex: '#E5CDC9',
                        source: 'hex'
                }
             }
        },
        components: {
            "color-picker":Sketch
          },
        computed: {
            value(){
                return this.$store.getters.value;
            },
            getValue(){
                return this.$store.getters.title;
            },
            getPictures(){
                return this.$store.getters.getPictures;
            },
            styles() {
                let newColor = "background-color: " + this.colors.hex
                if (this.colors.source === "rgba") {
                    const rgbaValue = `${this.colors.rgba.r}, ${this.colors.rgba.g}, ${this.colors.rgba.b}, ${this.colors.rgba.a}`;
                    newColor = `background-color: rgba(${rgbaValue})`;
                }

                return newColor;
            }
        },
        methods: {
            updateValue(event){
                this.$store.dispatch("updateValue", event.target.value)
            },
            updateValueTitle(event){
                this.$store.dispatch("updateValueTitle", event.target.value)
            },
            returnCurrentSource(image) {
                this.$store.commit("setCurrentImage", image.pic);
            },
            changeTheColor(){
                this.$store.dispatch("changeGlobalColor", this.colors.hex)
            }
        }
       

    }
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

#main-change-page{
    padding: 24px;
    position:fixed;
    top: 4%;
    right: 0;
    height: 750px;
    width: 300px;
    z-index: 999;
    background: $v-grey;
     transition: all 300ms ease-in-out;
    transform: translateX(350px);
    &:hover {
     transform: translateX(0px);
    transition: all 300ms ease-in-out;
        } 
    h3 {
        margin: -30px 0px 24px 0px;
        padding: 5px; 
        text-decoration: blue  underline;
        font-weight: 700;
    }
    p {
        line-height: 32px;
    }
    input, textarea{
        line-height: 25px;
        width: 100%;
    
    }
    #left-box{
        position: relative;
        top: -24px;
        left: -74px;
        width: 50px;
        height: 50px;
        background: $v-orange;
        display: flex;

       i {
           color: white;
           vertical-align: center;
            margin: auto;
       }
    }
    .logo-picture {
    float: left;
    text-align: center;
    justify-content: center;
    align-self: flex-start;
        &>img {
            height: 50px;
            flex: 1;
            transition: all 300ms ease-in-out;
            &:hover{
            transform: scale(1.1);
            transition: all 300ms ease-in-out;
            }
        }
    }

}
div.color-picker-div[data-v-097ca860] {
margin-top: 20px;
margin-bottom: 20px;
width: 100%;
}

div.vc-sketch[data-v-097ca860]{
width: 283px;
border-radius: 0px;
box-shadow: none;
}


</style>