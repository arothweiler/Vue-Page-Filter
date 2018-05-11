<template>
  <transition-group tag="div" class="wrapper" name="fade">
  		<div v-for="(item,index) of list" :key="index" v-show="index==curIndex">
			{{item}}
		</div>
	</transition-group>
</template>

<script>
export default {
  
  data() {
		return {
			list: [
				'../assets/companies/migros.svg.png',
				'../assets/companies/nestle.svg.png',
				'../assets/companies/novartis.svg.png',
				'../assets/companies/roche.svg.png'
				],
			curIndex: 0
		}
	},
	created () {
		window.setInterval(_=>{
			if(this.curIndex+1>this.list.length-1){
				this.curIndex = 0;
			}else{
				this.curIndex++
			}
		},3000)
	}
}
</script>

<style>
.wrapper{
		width: 200px;
		height: 250px;
		position: relative;
	}
	.wrapper>div{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 250px;
		line-height: 100px;	
		text-align: center;
		color: #fff;	
	}
	.wrapper>div:nth-child(1){
		background: red;
	}
	.wrapper>div:nth-child(2){
		background: blue;
	}
	.wrapper>div:nth-child(3){
		background: orange;
	}
	.wrapper>div:nth-child(4){
		background: greenyellow;
	}
	.fade-enter,.fade-leave-active{
		opacity: 0;
	}
	.fade-enter-active,.fade-leave-active{
		transition: opacity .5s ease-in-out;
	}
</style>
