<script>
	import { base } from '$app/paths';
	import CanIHaveYoEmail from '$lib/CanIHaveYoEmail.svelte';
	import Tiktok from '$lib/logos/tiktok.svelte';
	import Instagram from '$lib/logos/instagram.svelte';
	import LinkedIn from '$lib/logos/linkedin.svelte';
	import Github from '$lib/logos/github.svelte';
</script>

<div class="container">
	<header>
		<h1 class="logo">
			<img
				src="{base}/logo.svg"
				alt="Arjun Kalburgi's logo - it's a leaf that lays on it's side, with a sharp leaf blade and a soft stem - symbolizing that he grows sharply but remains humble."
			/>
		</h1>
		<div class="links">
			<a href="#Content">Content</a>
			<a href="#Career">Career</a>
			<a href="#Contact">Contact</a>
		</div>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<a name="Contact" aria-hidden="true" style="visibility: hidden">Get in touch</a>
		<h3>Let’s be in touch</h3>
		<p>Enter your email and I’ll reach out! Let’s see how we can <i>inspire each other</i>.</p>
		<div>
			<CanIHaveYoEmail hideLabel />
			<ul class="buttonRow">
				<li><a href="https://linkedin.com/in/arjunkalburgi"><LinkedIn /></a></li>
				<li><a href="https://instagram.com/arjun._.kalburgi"><Instagram /></a></li>
				<li><a href="https://www.tiktok.com/@arjipoo"><Tiktok /></a></li>
				<li><a href="https://github.com/arjunkalburgi"><Github /></a></li>
			</ul>
		</div>
	</footer>
</div>

<style lang="scss">
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

		.links {
			display: flex;
			gap: 1rem;
			font-size: smaller;
		}
	}

	footer {
		@media screen and (min-width: 1240px) {
			max-width: 800px;
		}

		max-width: 700px;
		margin-left: auto;
		margin-right: auto;

		@media screen and (max-width: 791px) {
			padding-left: 20px;
			padding-right: 20px;
			width: unset;
		}

		padding: 40px;
		margin-bottom: 8rem;

		.buttonRow {
			padding-left: 0px;
			height: 32px;

			li {
				float: left;
				list-style: none;

				&:not(:first-of-type) {
					margin: 0 0 0 20px;
				}
			}
		}
	}
</style>
