<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { animate } from '@arjunanimations/leaves';

	export let alt;
	export let src;
	let isIOS;

	onMount(() => {
		const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const ua = navigator.userAgent || navigator.vendor || window.opera;
		const isIOS = /iPhone|iPod|iPad/i.test(ua); // catches iOS

		const cloudAnimationData = {
			className: 'bg_animation_container',
			numOfSprites: 6,
			pathsOfSprites: [
				base + '/cloud/pink.PNG',
				base + '/cloud/orange.PNG',
				base + '/cloud/blue.PNG'
			],
			noRotation: true,
			noSpin: isReducedMotion,
			noSway: isReducedMotion,
			width: 800,
			height: 800
		};

		if (!isIOS) animate(cloudAnimationData);
	});
</script>

<div>
	<div class="bg {isIOS ? 'static' : 'animated'}">
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
		height: 620px;

		&.animated {
			background-color: #e6e7f036;
		}
		&.static {
			background: rgba(255, 181, 43, 0.27);
			background: linear-gradient(
				90deg,
				rgba(99, 192, 230, 0.26) 0%,
				rgba(227, 84, 225, 0.19) 51%,
				rgba(255, 181, 43, 0.27) 100%
			);
		}

		.bg_animation_container {
			will-change: transform;
			position: absolute;
			top: -80%;
			left: -80%;
		}
	}
</style>
