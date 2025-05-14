<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { animate } from '@arjunanimations/leaves';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';

	export let alt;
	export let src;

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
		noSway: true,
		width: 800,
		height: 800
	};

	onMount(() => {
		animate(cloudAnimationData);
	});
</script>

<div class="bg">
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
		background-color: #e6e7f0;
		background-color: #e6e7f036;
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		border-radius: 10px;
		isolation: isolate;

		.bg_animation_container {
			will-change: transform;
			position: absolute;
			top: -80%;
			left: -80%;
		}
	}
</style>
