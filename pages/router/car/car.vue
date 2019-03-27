<template>
	<div>
		<!--  #ifdef  APP-PLUS -->
		<div class="block">
			&nbsp;
		</div>
		<!--  #endif -->
		 <map style="width: 100%; height: 100vh;" :latitude="latitude" :longitude="longitude" :markers="covers">
                </map>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title: 'map',
            latitude: 39.909,
            longitude: 116.39742,
            covers: [{
                latitude: 39.909,
                longitude: 116.39742,
                iconPath: '../../../static/location.png'
            }, {
                latitude: 39.90,
                longitude: 116.39,
                iconPath: '../../../static/location.png'
            }]
			}
			
		},
		onShow(){
			
		},
		methods:{
			getInfo(){
				const _this = this;
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: function (res) {
						_this.longitude = res.longitude;
						_this.latitude = res.latitude;
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.openLocation({
							latitude: latitude,
							longitude: longitude,
							success: function () {
								console.log('success');
							}
						});
					}
				});
			}
		},
		mounted() {
			
		}
	}
</script>

<style>
.block{
	height: var(--status-bar-height);
	width: 750upx;
}
</style>
