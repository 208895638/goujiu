<template>
	<div>
		<!--  #ifdef  APP-PLUS -->
		<div class="block">
			&nbsp;
		</div>
		<!--  #endif -->
		<div v-if="noUser" class="nouser">
			<img src="../../../static/mine/icon_head_no_login.png" alt="">
			<view class="go">
				<navigator url="/pages/page/login/login">登陆/注册&#8250;</navigator>
			</view>
		</div>
		<div class="order">
			<div class="top">
				我的订单
				<navigator url="">查看全部订单&#8250;</navigator>
			</div>
			<ul>
				<li v-for="(item , index) in order" :key="index">
					<dl>
						<dt>
							<img :src="item.icon" alt="">
							<text class="num">
								{{ item.num }}
							</text>
						</dt>
					</dl>
					<dd>
						{{ item.text }}
					</dd>
				</li>
			</ul>
		</div>
		<div class="order money">
			<div class="top">
				我的订单
				<navigator url="">查看明细&#8250;</navigator>
			</div>
			<ul>
				<li v-for="(item , index) in money" :key="index">
					<dl>
						<dt>


							{{ item.num }}

						</dt>
					</dl>
					<dd>
						{{ item.text }}
					</dd>
				</li>
			</ul>
		</div>
		<div class="order money other">

			<ul>
				<li v-for="(item , index) in others" :key="index">
					<dl>
						<dt>

							<img :src="item.icon" alt="">

						</dt>
					</dl>
					<dd>
						{{ item.text }}
					</dd>
				</li>
			</ul>
		</div>
		<div class="hot">
			<div class="top">
				<view class="title">
					推荐商品
				</view>
				<view class="line"></view>
			</div>
			<div class="bot">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :next-margin="margin"
				circular=true :display-multiple-items="nums" :duration="duration">
					<swiper-item v-for="(item , index) in tuijian" :key="index">
						<view class="swiper-item  tuijiansp">
							<img :src="'http://img0.gjw.com/product/'+item.Pic" alt="">
							<text class="tjspwz">
								￥ {{ item.Money }}
							</text>
						</view>
					</swiper-item>
				</swiper>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 20000,
				duration: 500,
				hasLogin: true,
				noUser: true,
				nums: 2,
				margin: "50upx",
				order: [{
						icon: "../../../static/mine/wd_01dfk.png",
						num: 0,
						text: "待付款",
						url: "/"
					},
					{
						icon: "../../../static/mine/wd_02dfh.png",
						num: 0,
						text: "代发货",
						url: "/"
					},
					{
						icon: "../../../static/mine/wd_03dsh.png",
						num: 0,
						text: "待收货",
						url: "/"
					},
					{
						icon: "../../../static/mine/wd_04dpj.png",
						num: 0,
						text: "待评价",
						url: "/"
					},
				],
				money: [{
						icon: "../../../static/mine/wd_01dfk.png",
						num: 0,
						text: "账户余额",
						url: "/"
					},
					{
						icon: "../../../static/mine/wd_02dfh.png",
						num: 0,
						text: "优惠券",
						url: "/"
					},
					{
						icon: "../../../static/mine/wd_03dsh.png",
						num: 0,
						text: "积分",
						url: "/"
					}
				],
				others: [{
						icon: "../../../static/mine/icon_collection.png",
						num: 0,
						text: "商品收藏",
						url: "/"
					},
					{
						icon: "../../../static/mine/icon_foot_print.png",
						num: 0,
						text: "浏览足迹",
						url: "/"
					},
					{
						icon: "../../../static/mine/kfrx.png",
						num: 0,
						text: "400-722-1919",
						url: "/"
					},
					{
						icon: "../../../static/mine/bag.png",
						num: 0,
						text: "领券福利",
						url: "/"
					},
				],
				tuijian:[]
			}
		},
		onLoad() {
			this.getUserinfo();
			this.getUserBy();
		},
		methods: {
			aa() {
				uni.navigateTo({
					url: '/pages/page/login/login'
				});

			},
			getUserBy() {
				var _this = this;
				uni.request({
					url: this.userUrl + "/BtCApi/ShopCar/GetEveryoneBuy", //仅为示例，并非真实接口地址。
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					data: {
						DeviceId: "ede655aa-f80c-48e6-9f06-c5e7a3698a21",
						PhoneVersion: uni.getStorageSync('PhoneVersion') == "" ? "" : uni.getStorageSync('PhoneVersion'),
						ClientVersion: "1.0.0.1",
						ClientType: 0,
					},
			
					success: (res) => {
						if (res.data.status == true ) {
							console.log(res.data)
							_this.tuijian = res.data.data;
						} else {
							uni.showToast({
								icon: "none",
								title: res.data.msg,
								duration: 2000
							});
						}
					}
				});
			
			},
			getUserinfo: function() {
				var _this = this;
				uni.request({
					url: this.userUrl + "/BtCApi/User/GetUserInfo", //仅为示例，并非真实接口地址。
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					data: {
						UserID: uni.getStorageSync('UserID') == "" ? "" : uni.getStorageSync('UserID'),
						Signid: uni.getStorageSync('Signid') == "" ? "" : uni.getStorageSync('Signid'),
						DeviceId: "ede655aa-f80c-48e6-9f06-c5e7a3698a21",
						PhoneVersion: uni.getStorageSync('PhoneVersion') == "" ? "" : uni.getStorageSync('PhoneVersion'),
						ClientVersion: "1.0.0.1",
						ClientType: 0,
					},

					success: (res) => {
						if (res.status == true && res.code == 30000) {

						} else if (res.code == 20255) {
							uni.showToast({
								icon: "none",
								title: "请先登陆",
								duration: 2000
							});
						} else {
							uni.showToast({
								icon: "none",
								title: res.data.msg,
								duration: 2000
							});
						}
					}
				});

			},
		}

	}
</script>

<style scoped lang="scss">
	.nouser {
		padding: 240upx;
		background-color: #2e313a;
		display: flex;
		padding: 90upx 36upx;

		img {
			width: 188upx;
			height: 188upx;
			margin-right: 30upx;
		}

		.go {
			display: flex;
			align-items: center;
			font-size: 1em;
			color: #fff;
		}
	}
	.tuijiansp{
		position: relative;
		img{
			width: 305upx;
			height: 305upx;
		}
		.tjspwz{
			position: absolute;
			bottom: 0;
			left: 0;
			font-size: 0.9em;
			width: 305upx;
			color: #fff;
			text-align: center;
			background: rgba(000,000,000,0.6);
		}
	}
	.order {
		font-size: 0.9em;
		color: #444;
		border-bottom-color: #e5e5e5;
		border-bottom-style: solid;
		border-bottom-width: 1upx;

		.top {
			padding: 26upx 36upx;
			display: flex;
			justify-content: space-between;

		}

		ul {
			display: flex;
			justify-content: space-around;
			padding: 0;
			text-align: center;
			padding: 30upx 0;

			li {
				list-style: none;
				position: relative;

				.num {
					width: 35upx;
					height: 35upx;
					background: #f44;
					border-radius: 100%;
					position: absolute;
					right: 0;
					top: -17upx;
					color: #fff;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				img {
					height: 60upx;
					width: 60upx;
					display: block;
					margin: 0 auto;
				}

				dd {
					margin: 20upx 0;
				}
			}
		}
	}

	.money {
		margin-top: 20upx;
		border-top-color: #e5e5e5;
		border-top-style: solid;
		border-top-width: 1upx;
	}

	.other {
		li:nth-child(3) {
			color: red;
		}
	}

	.hot {
		.top {
			width: 80%;
			margin: 0 auto;
			position: relative;
			display: flex;
			justify-content: center;
			padding: 20upx 0;

			.title {
				font-size: 0.9em;
				text-align: center;
				color: #EEAA22;
				position: relative;
				z-index: 2;
				background: #fff;
				margin: 0 auto;
			}

			.line {
				width: 100%;
				height: 4upx;
				background-color: #EEAA22;
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				bottom: 0;
				margin: auto;
				z-index: 1;
			}
		}
	}

	.block {
		height: var(--status-bar-height);
		width: 750upx;
		background: #2e313a;
	}

	.btn1 {
		background-color: red;
		height: 100upx;
	}
</style>
