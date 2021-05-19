<template>
	<div class="avue-sidebar">
		<logo />
		<div class="app-wrap" v-if="showSelectInput">
			<p class="app-desc" @click="toAppDefaut">移动应用开发</p>
			<el-select class="app-select" v-model="appId" placeholder="请选择应用" @change="setApplicationId">
				<el-option :label="item.appName" :value="item.id" v-for="item in appList" :key="item.id"></el-option>
			</el-select>
		</div>
		<div
			class="select-wrap"
			:class="{'open':isShowSelectBlock}"
			@mouseout="hideSelectBlock"
			@mouseover="showSelectBlock"
			v-if="showSelectIcon"
		>
			<div class="select-icon">
				<i class="el-icon-set-up"></i>
			</div>
			<!-- 针对含有app管理菜单、数据分析菜单之一，选择应用的相关处理  && canSelect -->
			<el-card class="isfixed" :class="{'block':isShowSelectBlock}" v-if="appList.length>0">
				<div class="application-select" @click="setApplicationOptionShowOrHide">
					<span>{{appList[index].appName || ''}}</span>
					<i class="icon el-icon-arrow-down" v-if="!isOpen"></i>
					<i class="icon el-icon-arrow-up" v-else></i>
				</div>
				<div class="application-options" v-if="isOpen">
					<p
						:data-index="index"
						v-for="(item, index) in appList"
						:key="item.id"
						:class="{'selected':item.id==appId}"
						@click="setAppId"
					>{{item.appName}}</p>
				</div>
			</el-card>
		</div>
		<el-scrollbar style="height:100%">
			<div v-if="validatenull(menu)" class="avue-sidebar--tip">没有发现菜单</div>
			<el-menu
				:default-active="nowTagValue"
				:show-timeout="200"
				:collapse="keyCollapse"
				unique-opened
				mode="vertical"
			>
				<sidebar-item
					:menu="menu"
					:screen="screen"
					:props="website.menu.props"
					:collapse="keyCollapse"
					first
				/>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import logo from "../logo";
	import sidebarItem from "./sidebarItem";
	import store from "@/store";
	import { applicationListApi } from "@/api/app/releaseApi"; //应用列表
	export default {
		name: "Sidebar",
		inject: ["Index"],
		components: { sidebarItem, logo },
		data() {
			return {
				appList: [], //针对roleCode='ROLE_APP'的管理员
				appId: "",
				index: 0, //当前选中的应用的下标
				isShow: true,
				showSelectIcon: false,
				showSelectInput: false,
				isShowSelectBlock: false,
				isOpen: false
			};
		},
		created() {
			this.Index.openMenu(this.menuId);
			console.log(this.canSelectApp);
			this.getApplicationList();
			this.appId = this.applicationId;
			this.appList.forEach((item, index) => {
				if (item.id == this.appId) {
					this.index = index;
				}
			});
		},
		updated() {
			// 应用管理相关调整
			this.isShow = this.$route.path == "/appdefault" ? false : true;
			let roleCodes = this.roleCodes;
			if (
				roleCodes.length > 0 &&
				(roleCodes.indexOf("ROLE_APP") > -1 ||
					roleCodes.indexOf("ROLE_RAINBOW") > -1) &&
				this.isShow
			) {
				if (this.isCollapse) {
					this.showSelectIcon = true;
					this.showSelectInput = false;
				} else {
					this.showSelectIcon = false;
					this.showSelectInput = true;
				}
			} else {
				this.showSelectIcon = false;
				this.showSelectInput = false;
			}
			this.appId = this.applicationId;
			this.appList.forEach((item, index) => {
				if (item.id == this.appId) {
					this.index = index;
				}
			});
			console.log(this.applicationId);
		},
		computed: {
			...mapGetters([
				"website",
				"menu",
				"tag",
				"keyCollapse",
				"screen",
				"roleCodes",
				"isCollapse",
				"canSelectApp",
				"applicationId"
			]),
			nowTagValue: function() {
				return this.$router.$avueRouter.getValue(this.$route);
			}
		},
		methods: {
			// 获取应用列表
			getApplicationList() {
				applicationListApi().then(res => {
					console.log(res);
					this.appList = res.data.data;
					if (res.data.data.length > 0) {
						this.appId = res.data.data[0].id;
					}
				});
			},
			showSelectBlock() {
				this.$store.commit("SET_CANSELECTAPP", true);
				this.showSelect();
			},
			hideSelectBlock() {
				this.$store.commit("SET_CANSELECTAPP", false);
				this.showSelect();
			},
			showSelect() {
				let roleCodes = this.roleCodes;
				if (
					roleCodes.length > 0 &&
					(roleCodes.indexOf("ROLE_APP") > -1 ||
						roleCodes.indexOf("ROLE_RAINBOW") > -1) &&
					this.isCollapse &&
					this.isShow &&
					this.canSelectApp
				) {
					this.isShowSelectBlock = true;
				} else {
					this.isShowSelectBlock = false;
				}
			},
			setApplicationOptionShowOrHide() {
				this.isOpen = !this.isOpen;
			},
			//选择应用
			setAppId: function(e) {
				console.log("application-select:", e.target.dataset.index);
				let index = e.target.dataset.index;
				let appId = this.appList[index].id;
				this.appId = appId;
				this.index = index;
				this.setApplicationOptionShowOrHide();
				this.$store.commit("SET_APPLICATIONID", this.appId);
			},
			setApplicationId(val) {
				console.log("application-select:", val);
				this.appId = val;
				this.appList.forEach((item, index) => {
					if (item.id == this.appId) {
						this.index = index;
					}
				});
				this.$store.commit("SET_APPLICATIONID", this.appId);
            },
            toAppDefaut(){
                this.$router.push('/appdefault');
            }
		}
	};
</script>
<style lang="less" scoped>
	.app-wrap {
        width: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .app-desc{
            font-size: 24px;
            color: #409EFF;
            margin: 16px 0;
            letter-spacing: 3px;
            cursor: pointer;
        }
	}
	.select-wrap {
		width: 60px;
		height: 50px;
		position: relative;
	}
	.select-wrap.open {
		width: 200px;
	}
	.select-icon {
		display: flex;
		cursor: pointer;
		width: 60px;
		height: 50px;
		justify-content: center;
		align-items: center;
	}
	.app-select {
        width: 200px;
        margin-bottom: 10px;
	}
	/deep/ .el-card.isfixed {
		display: none;
		position: absolute;
		top: 0;
		left: 70px;
		width: 200px;
		-webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	/deep/ .el-card.isfixed.block {
		display: block;
	}
	/deep/ .el-card.isfixed .el-card__body {
		padding: 10px;
	}
	.application-select {
		width: 180px;
		border-radius: 4px;
		border: 1px solid #dcdfe6;
		font-size: 14px;
		color: #606266;
		padding: 6px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.application-select .icon {
		color: #c0c4cc;
	}
	.application-options {
		display: block;
		line-height: 40px;
		padding: 4px 6px;
	}
	.application-options .selected {
		color: #409eff;
		font-weight: 700;
	}
</style>


