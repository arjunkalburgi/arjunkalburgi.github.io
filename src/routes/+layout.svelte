<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { animate } from '@arjunanimations/leaves';

	onMount(() => {
		const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const ua = navigator.userAgent || navigator.vendor || window.opera;
		const isIOS = /iPhone|iPod|iPad/i.test(ua); // catches iOS

		animate({
			className: 'footer-bg',
			numOfSprites: 12,
			pathsOfSprites: [
				base + '/cloud/pink.PNG',
				base + '/cloud/orange.PNG',
				base + '/cloud/blue.PNG'
			],
			noRotation: true,
			noSway: isReducedMotion || isIOS,
			noSpin: isReducedMotion || isIOS,
			width: 1000,
			height: 1000
		});
	});
</script>

<div class="container">
	<header>
		<h1 class="logo">
			<img
				src="{base}/logo.svg"
				alt="Arjun Kalburgi's logo - it's a leaf that lays on it's side, with a sharp leaf blade and a soft stem - symbolizing that he grows sharply but remains humble."
			/>
		</h1>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<div class="footer-bg" />
		<h2>Let's inspire each other</h2>
		<p>I'm always excited to meet thoughtful folks and life enjoyers.</p>
		<p>Building something? Facing a tough challenge? Exploring ideas? I'd love to help.</p>
		<p>I try to meet someone new every day. Maybe that's you?</p>
		<p>
			Feel free to <a href="mailto:askalburgi@gmail.com">drop me a note</a> or
			<a href="https://calendar.app.google/MbZyXQHeCAa7LtiJ6">schedule a time to chat</a>.
		</p>
	</footer>
</div>

<style lang="scss">
	.container {
		overflow: hidden;
	}

	main {
		margin-bottom: 10vh;
	}

	header {
		position: absolute;

		// desktop only
		@media screen and (min-width: 791px) {
			width: calc(100% - 2rem);
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		margin: 0 1rem;

		h1 {
			margin: 0;

			img {
				width: 10rem;

				@media screen and (max-width: 791px) {
					width: 15rem;
					margin-top: 1rem;
				}
			}
		}
	}

	footer {
		@media screen and (min-width: 1240px) {
			max-width: 800px;
		}

		padding: 20vh 40px 40px 40px;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 8rem;
		position: relative;

		@media screen and (max-width: 791px) {
			padding-left: 20px;
			padding-right: 20px;
			width: unset;
		}

		.footer-bg {
			overflow: visible;
			position: absolute;
			width: 100vw;
			height: 60%;
			left: -50vw;
		}
	}
</style>
