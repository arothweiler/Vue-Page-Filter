<template>
  <div class="footer">
      <p> {{getNameFun}}(C) LLC</p>
  </div>
</template>

<script>
export default {
    name: "FooterComponent",
     computed: {
            getNameFun(){
              return  this.$store.getters.value;
            }
        }
}
</script>


<style lang="scss" scoped>
@import '../scss/variables.scss';
div {

    display: flex;
    background: $v-font-blue;
    width: 100vw;
    height: 79px;
    color: white;
    z-index: 999 !important;
    font-style: italic;
    p{
        margin: auto;
        line-height: $v-size-two;
        font-size: 18px;
    }
}
</style>
