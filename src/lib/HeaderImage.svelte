<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { animate } from '@arjunanimations/leaves';

	export let alt;
	export let src;

	const cloudAnimationData = {
		className: 'bg_animation_container',
		numOfSprites: 12,
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
		animate(cloudAnimationData);
	});
</script>

<div>
	<div class="bg">
		<div class="bg_animation_container" />
	</div>
	<img class="main" {alt} {src} />
</div>

<style lang="scss">
	.main {
		position: absolute;
		bottom: 0;
		right: -28%;
		width: 116%;
	}

	.bg {
		background-color: #e6e7f0;
		background-color: #e6e7f036;
		height: 620px;

		.bg_animation_container {
			position: absolute;
			top: -50%;
			left: -50%;
		}
	}
</style>
