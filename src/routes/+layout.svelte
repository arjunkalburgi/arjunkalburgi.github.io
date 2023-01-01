<script>
	import { base } from '$app/paths';
	import CanIHaveYoEmail from '$lib/CanIHaveYoEmail.svelte';
	import Twitter from '$lib/logos/twitter.svelte';
	import LinkedIn from '$lib/logos/linkedin.svelte';
	import Github from '$lib/logos/github.svelte';
</script>

<div class="container">
	<h1 class="logo">
		<img
			src="{base}/logo.svg"
			alt="Arjun Kalburgi's logo - it's a leaf that lays on it's side, with a sharp leaf blade and a soft stem - symbolizing that he grows sharply but remains humble."
		/>
	</h1>

	<main>
		<slot />
	</main>

	<footer>
		<h3>Let’s be in touch</h3>
		<p>Enter your email and I’ll reach out! Let’s see how we can <i>inspire each other</i>.</p>
		<div>
			<CanIHaveYoEmail hideLabel />
			<ul class="buttonRow">
				<li><a href="https://linkedin.com/in/arjunkalburgi"><LinkedIn /></a></li>
				<li><a href="https://github.com/arjunkalburgi"><Github /></a></li>
				<li><a href="https://twitter.com/arjunkalburgi"><Twitter /></a></li>
			</ul>
		</div>
	</footer>
</div>

<style lang="scss">
	main {
		margin-bottom: 10vh;
	}

	h1 {
		position: absolute;
		margin: 0;
		margin-left: 1rem;

		img {
			width: 10rem;

			@media screen and (max-width: 791px) {
				width: 15rem;
				margin-top: 1rem;
			}
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
