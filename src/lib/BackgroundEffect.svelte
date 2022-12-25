<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { animate } from '@arjunanimations/leaves';

	const cloudAnimationData = {
		className: 'bg_animation_container',
		numOfSprites: 3,
		pathsOfSprites: [
			base + '/cloud/pink.PNG',
			base + '/cloud/orange.PNG',
			base + '/cloud/blue.PNG'
		],
		noRotation: true,
		noSpin: true,
		width: 800,
		height: 800
	};

	onMount(() => {
		cloudAnimationData.noSway = window.navigator.userAgent.includes('iPhone');
		animate(cloudAnimationData);
	});
</script>

<div class="bg">
	<div class="bg_animation_container" />
</div>

<style lang="scss">
	.bg {
		background-color: #e6e7f0;
		background-color: #e6e7f036;
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		border-radius: 10px;
		isolation: isolate;

		.bg_animation_container {
			position: absolute;
			top: -80%;
			left: -80%;
		}
	}
</style>
