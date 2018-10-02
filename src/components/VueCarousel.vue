<template>
    <div>
        <carousel div="the-carousel" :mouse-drag="true" >
          <slide>
            <a href="#">
              <img src="../assets/companies/migros.svg.png" alt="migros">
            </a>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit"</p>
            <h3>Jon Doe, -- Migros Chef</h3>
          </slide>
          <slide>
            <a href="#">
              <img src="../assets/companies/nestle.svg.png" alt="nestle">
            </a>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit"</p>
            <h3>Jon Doe, -- Migros Chef</h3>
          </slide>
          <slide>
            <a href="#">
              <img src="../assets/companies/novartis.svg.png" alt="novartis">
            </a>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit"</p>
            <h3>Jon Doe, -- Migros Chef</h3>
          </slide>
          <slide>
            <a href="#">
              <img src="../assets/companies/roche.svg.png" alt="roche">
            </a>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit"</p>
            <h3>Jon Doe, -- Migros Chef</h3>
          </slide>
          <slide>
            <a href="#">
              <img src="../assets/companies/migros.svg.png" alt="migros">
            </a>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit"</p>
            <h3>Jon Doe, -- Migros Chef</h3>
          </slide>
      </carousel>
    </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';

    export default {
      name: "VueCarousel",
      components: {
      Carousel,
      Slide
      }
    }
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
div{
  background: $v-grey;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-top: 50px;

}
img{
  height: 85px;
  width: auto;
}
p, h3{
  color: white;
  align-items: center;
}


</style>