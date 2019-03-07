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
							<input type="number" v-model="user" class="uni-input" focus placeholder="请输入用户名" />
						</view>
					</view>
					<view class="uni-list-cell uni-list-cell-last" >
						<view class="uni-list-cell-navigate list">
							<v-icon type="locked" size="30"></v-icon>
							<input v-model="pass" type="password"  class="uni-input"  placeholder="请输入密码" />
						</view>
					</view>
				</view>
				
			</view>
			<view class="leftRight">
				<navigator url="/pages/page/forgetPassword/forgetPassword" hover-class="navigator-hover">
					忘记密码
				</navigator>
				<navigator url="/pages/page/register/register" hover-class="navigator-hover">
					注册
				</navigator>
			</view>
			<view class="uni-padding-wrap uni-common-mt btnList">
				 <button type="default" @click="isLogin" >登陆</button>
				  <button type="primary" plain="true" @click="duanxin">短信验证码登陆</button>
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
				title:"账号登陆",
				user:"",
				pass:""
				// imgSrc:imgs
			}
		},
		methods:{
			back(){
				uni.navigateBack();
			},
			duanxin(){
				uni.navigateTo({
				    url: '/pages/page/duanxin/duanxin'
				});
			},
			goInfo(){
				uni.navigateTo({
				    url: '/pages/page/info/info'
				});
			},
			saoma(){
				uni.getLocation({
					altitude:true,
					type: 'wgs84', //返回可以用于uni.openLocation的经纬度
					success: function (res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.openLocation({
							latitude: latitude,
							longitude: longitude,
							name:"曹杨花苑",
							address:"芝川路曹阳花苑",
							success: function () {
								console.log('success');
							}
						});
					}
				});
				
			},
			isLogin(){
				 if (this.user.length < 6) {
						 uni.showToast({
							icon:"none",
							title: '用户名必须大于6个字符',
							duration: 2000
						});
						return false;
                     } else if (!this.vali.is_phone(this.user)) {
                        uni.showToast({
							icon:"none",
                        	title: '手机号码格式不正确且只能输入手机号',
                        	duration: 2000
                        });
						 return false;
                     }

                     if (this.pass.length < 6) {
                         uni.showToast({
							 icon:"none",
                         	title: '密码长度大于6',
                         	duration: 2000
                         });
                         return false;
                     } else if (!this.vali.is_ZmOrNum(this.pass)) {
                          uni.showToast({
							  icon:"none",
                         	title: '密码格式不正确',
                         	duration: 2000
                         });
                         return false;
                     }
					 this.login();
			},
			login(){
				uni.request({
					url: this.userUrl + "/BtCApi/Login/APP_Login", //仅为示例，并非真实接口地址。
					method:'POST',
					 header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					data: {
						Mob: this.user,
						LoginPass: this.pass,
						DeviceId: '856d0cdb-fee1-4e04-b29c-987b8299453e',
						PhoneVersion: null,
						ClientVersion: '',
						ClientType: '0',
					},
					
					success: (res) => {
						if(res.data.status == true){
							console.log(res.data.data.Signid)
							uni.showToast({
								icon:"none",
								title: "登陆成功",
								duration: 2000
							});
							uni.setStorageSync('UserID', res.data.data.ID);
							uni.setStorageSync('Signid', res.data.data.Signid);
							uni.setStorageSync('DeviceId', res.data.data.DeviceId);
							uni.setStorageSync('PhoneVersion', res.data.data.PhoneVersion);
							uni.setStorageSync('ClientVersion', res.data.data.ClientVersion);
							uni.setStorageSync('ClientType', res.data.data.ClientType);
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
						
						//this.text = 'request success';
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
