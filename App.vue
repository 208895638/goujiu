<script>
	export default {
		onLaunch: function() {
			
				uni.request({
					url: 'http://20a716m010.iok.la:53024/api.json',
					success: (result) => {
						console.log(JSON.stringify(result.data[0].v))
// 						var data = result.data;
// 						if (data.update && data.wgtUrl) {
							if(result.data[0].v == 2){
								
							}else{
								uni.showToast({
									title: '检测到更新，即将更新',
									icon:"none",
									duration: 2000
								});
								uni.showModal({
									title: '更新提醒',
									content: '检测到更新，即将更新',
									success: function (res) {
										if (res.confirm) {
											uni.downloadFile({
												url: `http://20a716m010.iok.la:53024/v${result.data[0].v}.wgt`,
												success: (downloadResult) => {
													if (downloadResult.statusCode === 200) {
														plus.runtime.install(downloadResult.tempFilePath, {
															force: false
														}, function() {
															
															uni.showModal({
																title: '更新提醒',
																content: '更新成功,即将重启',
																success: function (res) {
																	if (res.confirm) {
																		console.log('用户点击确定');
																	} else if (res.cancel) {
																		console.log('用户点击取消');
																	}
																}
															});
															// console.log('install success...');
															
															plus.runtime.restart();
														}, function(e) {
															uni.showModal({
																title: '更新提醒',
																content: '更新失败,请重启app重试',
																success: function (res) {
																	if (res.confirm) {
																		console.log('用户点击确定');
																	} else if (res.cancel) {
																		console.log('用户点击取消');
																	}
																}
															});
															console.log(JSON.stringify(e),"我是失败原因")
															console.error('install fail...');
														});
													}
												}
											});
										} else if (res.cancel) {
											//console.log('用户点击取消');
										}
									}
								});
								
							}
							
// 						}
					}
				});
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	@import './static/css/uni.css';
	
	/*每个页面公共css */
</style>
<style>
	image{
		will-change: transform;
	}
</style>