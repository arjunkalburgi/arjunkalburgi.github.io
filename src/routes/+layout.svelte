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
		<h4>Let's get in touch</h4>
		<CanIHaveYoEmail center hideLabel />
		<ul class="buttonRow">
			<li><a href="https://twitter.com/arjunkalburgi"><Twitter /></a></li>
			<li><a href="https://linkedin.com/in/arjunkalburgi"><LinkedIn /></a></li>
			<li><a href="https://github.com/arjunkalburgi"><Github /></a></li>
		</ul>
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		margin-bottom: 3rem;

		@media (min-width: 480px) {
			padding: 40px 0;
		}

		.buttonRow {
			padding-left: 0px;

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
