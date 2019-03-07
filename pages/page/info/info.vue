<template>
	<view>
		
		<div class=" bb">
			<!-- <headers :imgSrc = "imgSrc" :title = "title"></headers> -->
			<div class="mask">
				
			</div>
			<!-- <view>
				<div class="per">
					<div>
						<img src="" alt="">
					</div>
					<div>
						
					</div>
				</div>
			</view> -->
		</div>
	</view>
	
</template>

<script>
	import header from "../../../components/header.vue"
	export default {
		components:{
			headers:header
		},
		data(){
			return {
				imgSrc:"../../../static/img/back.png",
				title:"我是Info1"
				// imgSrc:imgs
			}
		},
		methods:{
			back(){
				uni.navigateBack();
			}
		}
	}
</script>

<style>
.block{
	height: var(--status-bar-height);
	width: 750upx;
	background-color: red;
}
.mask{
	position: fixed;
	z-index: 999;
	background-color: red;
	width: 100%;
	height: 100%;
}
.bb{
	font-size: 40rpx;
}
.top{
	flex-direction: row;
	background-color: yellow;
	height: 100rpx;
}
.left{
	font-size: 40rpx;
	color:#ccc;
}
.image{
	width: 14rpx;
}
.aa{
	color: rgb(143, 143, 148); 
	font-size: 40px;
}
.title{
	flex: 1;
	text-align: center;
	justify-content: center;
	align-items: center;
	line-height: 100rpx;
}
</style>
