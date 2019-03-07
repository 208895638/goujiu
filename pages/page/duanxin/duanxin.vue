<template>
	<view>
		
		<div class=" bb">
			<!-- <headers :imgSrc = "imgSrc" :title = "title"></headers> -->
			<!-- <view @click="saoma">
				扫码
			</view>
			<view @click="goInfo">
				goInfo
			</view> -->
			<view class="uni-card">
				<view  class="uni-list ">
					<view class="uni-list-cell uni-list-cell-last" >
						<view class="uni-list-cell-navigate list">
							<v-icon type="person" size="30"></v-icon>
							<input type="number" v-model="user" class="uni-input" focus placeholder="请输入手机号码" />
						</view>
					</view>
					<view class="uni-list-cell uni-list-cell-last" >
						<view class="uni-list-cell-navigate list">
							<div class="left">
								<v-icon type="email-filled" size="30"></v-icon>
								<input v-model="pass"  type="password"  class="uni-input"  placeholder="输入验证码" />
							</div>
							<div class="right">
								<button class="mini-btn" type="warn" size="mini" @click="sendyzm" :disabled="!isDisabled">获取验证码</button>
							</div>
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="uni-padding-wrap uni-common-mt btnList">
				 <button type="default" @click="isLogin" >验证登陆</button>
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
				title:"手机快捷登陆",
				user:"",
				pass:""
				// imgSrc:imgs
			}
		},
		computed:{
			isDisabled(){
				if(this.user.length == 11){
					return true;
				}else{
					return false;
				}
			}
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
			sendyzm(){
				if(!this.vali.is_phone(this.user)){
					uni.showToast({
						icon:"none",
						title: '手机号码格式不正确且只能输入手机号',
						duration: 2000
					});
					this.user = "";
					return false;
				}
				this.yzmTo();
			},
			yzmTo(){
				
				uni.request({
					url: this.userUrl + "/BtCApi/Login/LoginSms", 
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					data: {
						Mob: this.user,
						type: 1,
						DeviceId: "",
						PhoneVersion: "",
						ClientVersion: "",
						ClientType: 0,
					},
					success: (res) => {
						console.log(res.data);
						uni.showToast({
							icon:"none",
							title: res.data.msg,
							duration: 2000
						});
					}
				});
			},
			isLogin(){
				if (!this.vali.is_phone(this.user)) {
                        uni.showToast({
							icon:"none",
                        	title: '手机号码格式不正确',
                        	duration: 2000
                        });
						 return false;
                     }

                     
					 this.login();
			},
			login(){
				const _this = this;
				uni.request({
					url: this.userUrl + "/BtCApi/Login/APP_LoginByMob", //仅为示例，并非真实接口地址。
					method:'POST',
					 header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					data: {
						Verification_Code: this.pass,
						Mob: this.user,
						type:1,
						DeviceId: '',
						PhoneVersion: null,
						ClientVersion: '',
						ClientType: 1,
					},
					success: (res) => {
						console.log(res.data);
						if(res.data.status == true){
							uni.showToast({
								icon:"none",
								title: "登陆成功",
								duration: 2000
							});
							uni.setStorageSync('UserID', res.data.UserID);
							uni.setStorageSync('Signid', res.data.Signid);
							uni.setStorageSync('DeviceId', res.data.DeviceId);
							uni.setStorageSync('PhoneVersion', res.data.PhoneVersion);
							uni.setStorageSync('ClientVersion', res.data.ClientVersion);
							uni.setStorageSync('ClientType', res.data.ClientType);
							uni.switchTab({
								url: '/pages/router/mine/mine'
							});
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
.left{
	display: flex;
	flex-direction: row;
	flex: 1;
}
.list{
	justify-content: space-between;
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
