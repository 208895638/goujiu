<template>
	<view>
		
		<div class=" bb">
			<!-- <headers :imgSrc = "imgSrc" :title = "title"></headers> -->
			
			<view class="uni-card">
				<view  class="uni-list ">
					<view class="uni-list-cell uni-list-cell-last" >
						<view class="uni-list-cell-navigate list">
							<div class="per">
								密码
							</div>
							<input type="password" v-model="user" class="uni-input" focus placeholder="请输入新密码" />
						</view>
					</view>
					<view class="uni-list-cell uni-list-cell-last" >
						<view class="uni-list-cell-navigate list">
							<div class="per">
								确认密码
							</div>
							<input v-model="pass" type="password"  class="uni-input"  placeholder="请确认密码" />
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="uni-padding-wrap uni-common-mt btnList">
				 <button type="default" @click="isLogin" >确定</button>
			</view>
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
				title:"设置密码",
				user:"",
				pass:"",
				phone:"",
				ms:""
				// imgSrc:imgs
			}
		},
		onLoad(val){
			this.phone = val.id;
			this.ms = val.name;
		},
		methods:{
			back(){
				uni.navigateBack();
			},
			goInfo(){
				uni.navigateTo({
				    url: '/pages/page/info/info'
				});
			},
			
			isLogin(){
				 if (this.user.length < 6) {
						 uni.showToast({
							icon:"none",
							title: '密码必须大于6个字符',
							duration: 2000
						});
						return false;
                     } 
                     if (this.pass.length < 6) {
                         uni.showToast({
							 icon:"none",
                         	title: '确认密码长度大于6',
                         	duration: 2000
                         });
                         return false;
                     } 
					 if(this.user != this.pass){
						 uni.showToast({
							icon:"none",
							title: '两次密码不一致',
							duration: 2000
						});
						return false;
					 }
					 this.login();
			},
			login(){
				uni.request({
					url: this.userUrl + "/BtCApi/Login/UpdatePassWord", //仅为示例，并非真实接口地址。
					method:'POST',
					 header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					data: {
						LoginPass: this.user,
						OkPass: this.pass,
						Mob: this.phone,
						Verification_Code: this.name,
						DeviceId: '',
						PhoneVersion: '',
						ClientVersion: '',
						ClientType: '',
					},
					success: (res) => {
						console.log(res.data);
						if(res.data.status == true && res.data.code == 30000){
							uni.navigateTo({
								url:"/pages/page/login/login"
							})
						}else{
							uni.showToast({
								icon:"none",
								title: res.data.msg,
								duration: 2000
							});
						}
					}
				});
			}
		}
	}
</script>

<style scoped>
	.per{
		width: 140upx;
	}
.uni-card{
	margin: 0;
}
.btnList button{
	margin-bottom: 10upx;
}
.uni-list{
	padding: 10upx 0;
}
.leftRight{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding:20upx;
	
}
.list{
	justify-content: flex-start;
	padding-top: 0;
	padding-bottom: 0;
}
	.mask{
		position: fixed;
		background-color: green;
		position: fixed;
		width: 100%;
		flex: 1;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 1;
	}
.block{
	height: var(--status-bar-height);
	width: 750upx;
}
.bb{
	font-size: 40rpx;
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
