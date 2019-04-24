<template>
	<div>
		<header>{{pageName}}</header>
		<div class="settings-container flex flex-column justify-center align-center">
			<p>This is the <span>{{pageName}}</span> page.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "settings",
	data() {
		return {
			pageName: "settings"
		}
	}
}
</script>

<style lang="scss" scoped>
.settings-container {
	padding-top: 50px;
	height: 100vh;
	p {
		font-size: 20px;
		color: #333333;
		text-align: center;
		span {
			color: #68b1ed;
		}
	}
}
</style>