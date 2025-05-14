<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { animate } from '@arjunanimations/leaves';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';

	export let alt;
	export let src;
	let isIOS;

	onMount(() => {
		const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const ua = navigator.userAgent || navigator.vendor || window.opera;
		const isIOS = /iPhone|iPod|iPad/i.test(ua); // catches iOS

		const cloudAnimationData = {
			className: 'bg_animation_container',
			numOfSprites: 3,
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

<div class="bg {isIOS ? 'static' : 'animated'}">
	<div class="bg_animation_container" />
</div>
{#if src}
	<img {alt} use:lazyImage data-src={src} />
{/if}

<style lang="scss">
	img {
		position: absolute;
		width: 30%;
		bottom: -5%;
		transform: rotate(20deg);
		filter: brightness(90%);
	}

	.bg {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		border-radius: 10px;
		isolation: isolate;

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
