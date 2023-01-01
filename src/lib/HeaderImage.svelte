<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { animate } from '@arjunanimations/leaves';

	export let alt;
	export let src;

	const cloudAnimationData = {
		className: 'bg_animation_container',
		numOfSprites: 6,
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
		cloudAnimationData.noSway =
			window.navigator.userAgent.includes('iPhone') ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

		@media screen and (max-width: 791px) {
			bottom: -40%;
			right: -8%;
			width: 76%;
		}

		@media screen and (max-width: 591px) {
			bottom: -30%;
			right: -18%;
			width: 96%;
		}

		@media screen and (max-width: 391px) {
			bottom: -10%;
		}
	}

	.bg {
		background-color: #e6e7f0;
		background-color: #e6e7f036;
		height: 620px;

		.bg_animation_container {
			position: absolute;
			top: -80%;
			left: -80%;
		}
	}
</style>
