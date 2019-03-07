<template>
	<view class="content">
		<view class="block"></view>
		页面 - 5
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.block{
		height: var(--status-bar-height);
		width: 750upx;
		background-color: green;
	}
	.content {
		text-align: center;
		height: 400upx;
		/* margin-top: 200upx; */
		background: red;
	}
</style>
