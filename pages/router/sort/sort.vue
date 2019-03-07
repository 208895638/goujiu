<template>
	<div>
		<!--  #ifdef  APP-PLUS -->
		<div class="block">
			&nbsp;
		</div>
		<!--  #endif -->
		
			<navigator url=""  class="search">
				<v-icon type="search" size="20"></v-icon>
				<text class="tit">请输入商品名称</text>
			</navigator>
		<view class="wraper">
			<view class="per" v-for="(item , index) in list" :key="index">
				<view class="title">
					<span>
						{{ item.TypeName }}
					</span>
					<navigator url="">
						查看全部›
					</navigator>
				</view>
				<ul class="lists">
					<li v-for="(ele , indexs) in item.TypeData" :key="indexs">
						{{ ele.Name }}
					</li>
				</ul>
			</view>
		</view>
		
		
	</div>
</template>

<script>
	
	export default {
		data(){
			return {
				list:[]
			}
		},
		methods:{
			init(){
				var _this = this;
				uni.request({
					url: this.userUrl+"/BtCApi/List/GetSeriesList", //仅为示例，并非真实接口地址。
					method:'GET',
					success: (res) => {
						console.log(res.data);
						if(res.data.status == true){
							_this.list = res.data.data.item_data;
						}else{
							uni.showToast({
								icon: "none",
								title: res.data.msg,
								duration: 2000
							});
						}
					}
				});
			}
		},
		mounted(){
			this.init();
		}
	}
</script>

<style lang="scss" scoped>
.block{
	height: var(--status-bar-height);
	width: 750upx;
}
.search{
	width: 80%;
	margin: 12upx auto;
	display: flex;
	align-items: center;
	background-color: #ececec;
	border-radius: 14upx;
	padding: 10upx 5%;
	color: rgb(204, 204, 204);
	font-size: 0.9em;
}
.wraper{
	.per{
		.title{
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 96%;
			margin: 0 auto;
			padding: 10upx 0;
			font-size: 1.2em;
		}
		.lists{
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 0;
			li{
				list-style: none;
				width: 49%;
				background-color: #f3f3f3;
				margin-bottom: 10upx;
				padding: 20upx 0;
				text-indent: 1em;
			}
		}
	}
}
</style>
