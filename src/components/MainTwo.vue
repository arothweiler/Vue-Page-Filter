<template>
  <div >
    <div class="carousel"
      v-for="(item,i) in items"
      :key="i"
      :src="item.source"
      :alt="item.alt"
      transition="fade"
    >
     <div class="carousel-image">
        <img v-attr="item.src" alt="image">

     </div>
     <div class="carousel-text">
        <p>{{item.title}}</p>
        <p>{{item.position}}</p>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            source: '../assets/companies/migros.svg.png',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            alt: "1",
            position: "Jon Doe, -- Migros Chef "
          },
          
         {
            source: '../assets/companies/roche.svg.png',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            alt: "2",
            position: "Jon Doe, -- Roche Chef "
          },
          {
            source: '../assets/companies/nestle.svg.png',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            alt: "3",
            position: "Jon Doe, -- Nestle Chef "
          },
          {
            source: '../assets/companies/novartis.svg.png',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            alt: "4",
            position: "Jon Doe, -- Novartis Chef "
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.carousel {
background: aquamarine;
height: 200px;
width: 100vw;
display: flex;
flex-flow: row wrap;
.carousel-image{
  flex-grow: 1;
  background: blueviolet;
  margin: auto;
  text-align: center;
  margin-right: 40px;
}
.carousel-text{
  flex-grow: 4;
    margin: auto;
  p{
    font-size: $v-size-one;
  
  }
}
img{
  max-width: 250px;
  height: auto;
  
}
}






/*  #example-custom-transition .fade-enter-active, #example-custom-transition .fade-leave-active, #example-custom-transition .fade-leave-to {
	 transition: 0.3s ease-out;
	 position: absolute;
	 top: 0;
	 left: 0;
}
 #example-custom-transition .fade-enter, #example-custom-transition .fade-leave, #example-custom-transition .fade-leave-to {
	 opacity: 0;
} */
 
</style>