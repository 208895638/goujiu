<template>
	<div>
		<!--  #ifdef  APP-PLUS -->
		<div class="block">
			&nbsp;
		</div>
		<!--  #endif -->
		<text>
			我是福利页

		</text>
		<view class="aaa">
			<button @click="aaa" class="mini-btn" type="default" size="mini">点我获取通讯录信息</button>
		</view>
		<view v-for="(item , index) in list" :key="index">
			<text>{{item.displayName}}:</text>
			<text v-for="(ele , ind) in item.phoneNumbers" :key="ind">{{ele.value }}</text>
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			aaa() {
				const _this = this;
				plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function (addressbook) {
				addressbook.find(["displayName","phoneNumbers"],function(contacts){
					//alert(contacts.length);
					_this.list = contacts;
					console.log(JSON.stringify(contacts))
				}, function () {
					//alert("error");
				},{multiple:true});
			},function(e){
				console.log(JSON.stringify(e))
				//alert("Get address book failed: " + e.message);
			});
			}
		}
	}
</script>

<style lang="scss" scoped="">
	.block {
		height: var(--status-bar-height);
		width: 750upx;
	}

	.aaa {
		display: flex;
		align-items: center;
		padding: 20upx 0;
		justify-content: center;
	}
</style>
