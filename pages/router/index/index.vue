<template>
	<div>
		<!--  #ifdef  APP-PLUS -->
		<div class="block">
			&nbsp;
		</div>
		<!--  #endif -->

		<!-- <text>
			我是首页2
		</text> -->
		<view class="top">
			<navigator url="" class="search">
				<v-icon type="search" size="20"></v-icon>
				<text class="tit" @click="aaa">请输入商品名称</text>
			</navigator>
			<swiper class="swiper ban" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" circular=true
			 :duration="duration">
				<swiper-item v-for="(item , index) in id[1]" :key="index">
					<view class="swiper-item ">
						<image :src="item.Pic"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="deliverGoods">
			<h2>
				<img src="../../../static/mine/hot.png"  alt="">
			</h2>
			<swiper class="swiper deliver" :autoplay="autoplay" interval=3000 circular=true vertical=true :duration="duration">
				<swiper-item v-for="(item , index) in id[2]" :key="index">
					<view class="swiper-item">
						{{ item.Name }}
					</view>
				</swiper-item>
			</swiper>
			<ul class="wins">
				<li v-for="(item , index) in id[3]" :key="index">
					<img :src="item.Pic" alt="">
				</li>
			</ul>
		</view>
		<view class="skiller">
			<h2>
				<span>掌上秒杀</span>
				距结束
				<em>
					{{ hour }}
				</em>:
				<em>
					{{ minute }}
				</em>:
				<em>
					{{ second }}
				</em>
			</h2>
			<swiper class="swiper wins" autoplay=true interval=20000 next-margin="100upx" circular=true display-multiple-items="1"
			 duration="500">
				<swiper-item v-for="(item , index) in skillList" :key="index">
					<view class="swiper-item  tuijiansp">
						<img :src="'http://img0.gjw.com/product/'+item.imgUrl" alt="">
						<view>
							<dl>
								<dt>
									{{ item.ProductName }}
								</dt>
								<dd>
									<span>￥{{ item.Price }}</span>
									<navigator url="" class="search">
										马上抢
									</navigator>
								</dd>
							</dl>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="sp">
			<view class="spT">
				<span v-for="(item , index ) in id[4]" :key="item.Pic">
					<image :src="item.Pic" mode="widthFix"></image>
				</span>
				<span v-for="(item , index ) in id[5]" :key="item.Pic">
					<image :src="item.Pic" mode="widthFix"></image>
				</span>
			</view>
			<view class="spB">
				<span v-for="(item , index ) in id[101]" :key="item.Pic" class="l">
					<image :src="item.Pic" mode="widthFix"></image>
				</span>
				<span v-for="(item , index ) in id[102]" :key="item.Pic" class="r">
					<image :src="item.Pic" mode="widthFix"></image>
				</span>
				<span v-for="(item , index ) in id[103]" :key="item.Pic" class="r">
					<image :src="item.Pic" mode="widthFix"></image>
				</span>
			</view>
			<view class="spBB" v-for="(item , index ) in id[104]" :key="item.Pic">
				<image :src="item.Pic" mode="widthFix"></image>
			</view>
			<view class="spBB" v-for="(item , index ) in id[105]" :key="item.Pic">
				<image :src="item.Pic" mode="widthFix"></image>
			</view>
		</view>
		<view class="restWins">
			<view class="top">
				<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
					<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
					 :id="tab.id" :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
				</scroll-view>
			</view>
			<view class="bot">
				<view class="botPer" :class="tabIndex == 0 ? 'on' : ''">
					<view class="list-view">
						<view class="list-item winList" v-for="(item,index) in id[6]" :key="index" >
							<image :src="item.Pic" lazy-load="true" mode="widthFix"></image>
							<text class="wT">
								{{ item.Name }}
							</text>
							<view v-for="(ele , ins) in item.listAtivityName" :key="ins">
								<uni-badge :text="ele.Ativityname" :type="ele.Ativityname=='限时抢购' ?'warning':'primary'"></uni-badge>
							</view>
							<text class="wB">
								￥{{ item.ExtField }}
							</text>
						</view>
					</view>
					<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
				</view>
				<view class="botPer" :class="tabIndex == 1 ? 'on' : ''">
					<view class="list-view">
						<view class="list-item winList" v-for="(item,index) in id[7]" :key="index" >
							<image :src="item.Pic" mode="widthFix"></image>
							<text class="wT">
								{{ item.Name }}
							</text>
							<view v-for="(ele , ins) in item.listAtivityName" :key="ins">
								<uni-badge :text="ele.Ativityname" :type="ele.Ativityname=='限时抢购' ?'warning':'primary'"></uni-badge>
							</view>
							<text class="wB">
								￥{{ item.ExtField }}
							</text>
						</view>
					</view>
					<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
				</view>
				<view class="botPer" :class="tabIndex == 2 ? 'on' : ''">
					<view class="list-view">
						<view class="list-item winList" v-for="(item,index) in id[8]" :key="index" >
							<image :src="item.Pic" mode="widthFix"></image>
							<text class="wT">
								{{ item.Name }}
							</text>
							<view v-for="(ele , ins) in item.listAtivityName" :key="ins">
								<uni-badge :text="ele.Ativityname" :type="ele.Ativityname=='限时抢购' ?'warning':'primary'"></uni-badge>
							</view>
							<text class="wB">
								￥{{ item.ExtField }}
							</text>
						</view>
					</view>
					<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
				</view>
				<view class="botPer" :class="tabIndex == 3 ? 'on' : ''">
					<view class="list-view">
						<view class="list-item winList" v-for="(item,index) in id[9]" :key="index" >
							<image :src="item.Pic" mode="widthFix"></image>
							<text class="wT">
								{{ item.Name }}
							</text>
							<view v-for="(ele , ins) in item.listAtivityName" :key="ins">
								<uni-badge :text="ele.Ativityname" :type="ele.Ativityname=='限时抢购' ?'warning':'primary'"></uni-badge>
							</view>
							<text class="wB">
								￥{{ item.ExtField }}
							</text>
						</view>
					</view>
					<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
				</view>
				<view class="botPer" :class="tabIndex == 4 ? 'on' : ''">
					<view class="list-view">
						<view class="list-item winList" v-for="(item,index) in id[10]" :key="index" >
							<image :src="item.Pic" mode="widthFix"></image>
							<text class="wT">
								{{ item.Name }}
							</text>
							<view v-for="(ele , ins) in item.listAtivityName" :key="ins">
								<uni-badge :text="ele.Ativityname" :type="ele.Ativityname=='限时抢购' ?'warning':'primary'"></uni-badge>
							</view>
							<text class="wB">
								￥{{ item.ExtField }}
							</text>
						</view>
					</view>
					<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
				</view>
				<view class="botPer" :class="tabIndex == 5 ? 'on' : ''">
					<view class="list-view">
						<view class="list-item winList" v-for="(item,index) in id[11]" :key="index" >
							<image :src="item.Pic" mode="widthFix"></image>
							<text class="wT">
								{{ item.Name }}
							</text>
							<view v-for="(ele , ins) in item.listAtivityName" :key="ins">
								<uni-badge :text="ele.Ativityname" :type="ele.Ativityname=='限时抢购' ?'warning':'primary'"></uni-badge>
							</view>
							<text class="wB">
								￥{{ item.ExtField }}
							</text>
						</view>
					</view>
					<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
				</view>
				
			</view>
		</view>
	</div>
</template>

<script>
	import uniLoadMore from '../../../components/uni-load-more.vue';
	import uniBadge from "../../../components/uni-badge.vue";
	export default {
		components: {
			uniLoadMore,
			uniBadge
		},
		data() {
			return {
				scrollLeft: 0,
				tabIndex: 0,
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				tabBars: [{
					name: '精选',
					id: 'jingxuan',
					sid: 0,
					init:0
				}, 
				{
					name: '白酒',
					id: 'baijiu',
					sid: 1,
					init:0
				}, 
				{
					name: '葡萄酒',
					id: 'putaojiu',
					sid: 2,
					init:0
				}, 
				{
					name: '清酒洋酒',
					id: 'qingyang',
					sid: "4,1435",
					init:0
				}, 
				{
					name: '黄酒啤酒',
					id: 'huangpi',
					sid: "5,6",
					init:0
				}, 
				{
					name: '年份老酒',
					id: 'laojiu',
					sid: 7,
					init:0
				}],
				hour: "0",
				minute: "0",
				second: "0",
				CurrTime: "",
				EndTime: "",
				count: 0,
				indicatorDots: true,
				autoplay: true,
				interval: 20000,
				duration: 500,
				skillList: [],
				id: {
					'1': [],
					'2': [],
					'3': [],
					'4': [],
					'5': [],
					'6': [],
					'7': [],
					'8': [],
					'9': [],
					'10': [],
					'11': [],
					'12': [],
					'13': [],
					'14': [],
					'15': [],
					'16': [],
					'17': [],
					'18': [],
					'19': [],
					'101': [],
					'102': [],
					'103': [],
					'104': [],
					'105': [],
				}
			}
		},
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.tabBars[this.tabIndex].init = this.tabBars[this.tabIndex].init + 1;
 			this.loadingType = 1;
			this.getMoreWins();
			
// 			let list = [],
// 				maxItem = this.tabBars[this.tabBars.length - 1],
// 				length = maxItem + 6;
// 			for (let i = maxItem + 1; i < length; i++) {
// 				list.push(i);
// 			}
// 			setTimeout(() => {
// 				if (length > 26) {
// 					this.loadingType = 2;
// 					return;
// 				}
// 				this.tabBars = this.tabBars.concat(list);
// 				this.loadingType = 0;
// 			}, 800);
		},
		methods: {
			
			async tapTab(index) { //点击tab-bar
				if (this.tabIndex === index) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = index;
				}
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select('#' + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
			init() {
				const _this = this;
				uni.request({
					url: this.userUrl + "/BtCApi/Home/GetHomePageImg", //仅为示例，并非真实接口地址。
					method: 'GET',
					success: (res) => {
						let msg = res.data.data;
						if (res.data.status == true) {
							msg.forEach(ele => {
								_this.id[ele.adv_BlockID].push(ele);
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
			getMoreWins(){
				const _this = this,obj = this.tabBars[this.tabIndex];
				
				uni.request({
					//url: this.userUrl + "/BtCApi/Home/GethomeProductByhot?seriesid="+obj.sid+'&pageindex='+obj.pages+'&pagesize=20', 
					url: this.userUrl + `/BtCApi/Home/GethomeProductByhot?seriesid=${obj.sid}&pageindex=${obj.init}&pagesize=20`, 
					method: 'GET',
					success: (res) => {
						
						let msg = res.data.data;
						if (res.data.status == true) {
								
							let aa = msg.map(ele =>{
								let objs = {
								}
								objs.Pic =`http://img0.gjw.com/product/${ele.Pic}`;
								objs.Name = ele.ProductName;
								objs.listAtivityName = ele.activityTitle;
								objs.ExtField = ele.ActivityMoney;
								objs.ID = ele.ProductId;
								return objs;
							})
							_this.id[_this.tabIndex + 6].push(...aa);
							_this.loadingType = 0;
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
			updateTime(begin, end) {
				var _this = this,
					interval = setInterval(function() {

						if (_this.EndTime > _this.CurrTime && parseInt((_this.EndTime - _this.CurrTime) / 1000) > _this.count) {
							var total = parseInt((_this.EndTime - _this.CurrTime) / 1000) - _this.count;

							var h = parseInt(total / (60 * 60))
							var m = parseInt((total - h * 60 * 60) / 60)
							var s = parseInt(total - (m * 60) - (h * 60 * 60));
							_this.hour = h < 10 ? "0" + h : h;
							_this.minute = m < 10 ? "0" + m : m;
							_this.second = s < 10 ? "0" + s : s;

							_this.count++
						} else {
							_this.GETSeckillList();
							clearInterval(interval);

						}

					}, 1000);
			},
			skill() {
				const _this = this;
				uni.request({
					url: this.userUrl + "/BtCApi/Home/SeckillList?userid=0", //仅为示例，并非真实接口地址。
					method: 'GET',
					success: (res) => {
						let msg = res.data.data;
						var Seckill = res.data.data[0];
						_this.skillList = Seckill.AppSeckill.AppSeckillProList;
						var StarTime = new Date(Seckill.AppSeckill.StarTime.replace("-", "/").replace("-", "/"))
						var CurrTime = new Date(Seckill.AppSeckill.CurrTime.replace("-", "/").replace("-", "/"))
						var EndTime = new Date(Seckill.AppSeckill.EndTime.replace("-", "/").replace("-", "/"))
						var state = Seckill.AppSeckill.state
						if (StarTime <= CurrTime && EndTime > CurrTime && state == 0) {
							//_this.seconds.title= Seckill.AppSeckill.Remarks;
							_this.CurrTime = CurrTime;
							_this.EndTime = EndTime;
							//var list= Seckill.AppSeckill.AppSeckillProList

							_this.updateTime();
							//_this.shwo_kill=true;
						}
// 						if (res.data.status == true) {
// 							msg.forEach(ele =>{
// 								_this.id[ele.adv_BlockID].push(ele);
// 							});
// 						} else {
// 							uni.showToast({
// 								icon: "none",
// 								title: res.data.msg,
// 								duration: 2000
// 							});
// 						}
					}
				});
			},
			aaa() {
				console.log(this.id[6]);
			},
		},
		mounted() {
			this.init(); // 初始化数据
			this.skill();  // 获取秒杀数据
			//this.getMoreWins();
		}
	}
</script>

<style lang="scss" scoped>
	.block {
		height: var(--status-bar-height);
		width: 750upx;
	}

	.top {
		position: relative;
		height: 350upx;

		.search {
			width: 80%;
			margin: 12upx auto;
			display: flex;
			align-items: center;
			background-color: #ececec;
			border-radius: 14upx;
			padding: 10upx 5%;
			color: rgb(204, 204, 204);
			font-size: 0.9em;
			position: absolute;
			left: 0;
			top: 12upx;
			right: 0;
			margin: auto;
			z-index: 99;
		}

		.ban {
			height: 360upx;
			width: 750upx;

			image {
				width: 750upx;
				height: 360upx;
			}
		}
	}

	.deliverGoods {
		padding: 30upx;

		h2 {
			border-right-color: #ccc;
			border-right-style: solid;
			border-right-width: 1upx;
			display: inline-block;
			padding-right: 30upx;

			img {
				width: 200upx;
				height: 37.61upx;
			}
		}

		.deliver {
			height: 60upx;
		}

		.wins {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 0;

			li {
				list-style: none;
				width: 138upx;

				img {
					width: 100%;
					height: 138upx;
					transition: .1s ease-in;
				}
			}
		}
	}

	.skiller {
		h2 {
			font-weight: normal;
			color: #6B6B6B;
			font-size: .9em;
			padding: 20upx 30upx;
			border-top-style: solid;
			border-top-color: #F4F4F4;
			border-top-width: 1upx;
			border-left-style: solid;
			border-left-color: #F4F4F4;
			border-left-width: 1upx;
			border-right-style: solid;
			border-right-color: #F4F4F4;
			border-right-width: 1upx;
			border-bottom-style: solid;
			border-bottom-color: #F4F4F4;
			border-bottom-width: 1upx;
			display: flex;
			align-items: center;

			//justify-content: center;
			span {
				color: #333;
				font-weight: bold;
				margin-right: 10upx;
			}

			em {
				font-style: normal;
				color: #fff;
				padding: 8upx 12upx;
				background: #999;
				border-radius: 10upx;
				margin: 0 10upx;
			}
		}

		.wins {
			height: 260upx;

			.tuijiansp {
				display: flex;
				padding: 30upx;
				font-size: 0.9em;

				img {
					width: 200upx;
					height: 200upx;
					border-radius: 20upx;
					margin-right: 20upx;
				}

				dl {
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					dt {
						font-weight: bold;
						border-bottom-style: solid;
						border-bottom-color: #F4F4F4;
						border-bottom-width: 1upx;
					}

					dd {
						display: flex;
						align-items: center;
						justify-content: space-between;

						span {
							color: #f44;
						}

						.search {
							padding: 8upx;
							background-color: #5EAFFE;
							color: #fff;
							border-radius: 8upx;
						}
					}
				}
			}
		}
	}

	.sp {
		.spT {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 300upx;

			image {
				width: 375upx;
				height: 308upx;
			}
		}

		.spB {
			padding: 30upx;
			display: flex;
			align-items: center;

			.l {
				width: 50%;
				height: 100%;

				image {
					width: 300upx;
				    height: 193.333upx;
				}
			}

			.r {
				//width: 50%;
				height: 100%;

				image {
					width: 150upx;
					height: 195.72upx;
				}
			}
		}

		.spBB {
			padding: 0 30upx;
			display: flex;
			align-items: center;

			image {
				width: 100%;
			}
		}
	}

	.restWins {
		.top {
			height: auto;
			.active {
				color: #f44;
			}
		}
		.bot{
			.botPer{
				display: none;
			}
			.on{
				display: block;
				animation: fadeIn .3s;
			}
			.list-view{
				display: flex;
				//flex-direction: column;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				padding: 20upx 10upx;
			}
			.winList{
				width: 46%;
				padding: 0 10upx;
				border: 1upx solid #eee;
				min-height: 600upx;
				margin-bottom: 20upx;
				display: flex;
				flex-direction: column;
				image{
					width: 100%;
					height: 335.8upx;
					will-change: transform;
				}
				.wT{
					color: #666;
					font-size: 0.9em;
				}
				.wB{
					color: #fb223e;
				}
			}
		}
	}
	@keyframes fadeIn {
		0% {
			opacity: 0
		}

		to {
			opacity: 1
		}
	}
</style>
