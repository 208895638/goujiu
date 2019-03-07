<template>
	<view>
		<div class="top" >
			<div  class="image" @click="back">
				<v-icon type="arrowleft" size="30"></v-icon>
				<!-- <image  class="images1" :src="imgSrc" /> -->
			</div>
			<text class="title">{{ title }}</text>
		</div>
	</view>
	
</template>

<script>
	export default {
		props:["imgSrc" , "title"],
		data(){
			return {
				
			}
		},
		methods:{
			back(){
				uni.navigateBack();
			}
		},
		mounted(){
		}
	}
</script>

<style>
.top{
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100rpx;
	flex: 1;
	border: none;
	border-style: solid;
	border-color: #ccc;
	border-bottom-width: 2rpx;
	border-left-width: 0;
	border-top-width: 0;
	border-right-width: 0;
}
.image{
	width: 100rpx;
	padding: 0 20rpx;
	opacity: 0.6;
	align-items: center;
	justify-content: center;
}
.images1{
	width: 40rpx;
	height: 40rpx;
}

.title{
	flex: 1;
	text-align: center;
	justify-content: center;
	align-items: center;
	line-height: 100rpx;
	margin-left: -100rpx;
	font-size: 40rpx;
}
</style>
