<script>
	import { onMount } from 'svelte';
	import { animate } from '@arjunanimations/leaves';
	import { base } from '$app/paths';
	import HeaderImage from '$lib/HeaderImage.svelte';
	import CanIHaveYoEmail from '$lib/CanIHaveYoEmail.svelte';

	const animationData = {
		className: 'bg_animation_container',
		numOfSprites: 12,
		pathsOfSprites: [
			base + "/cloud/pink.PNG", 
			base + "/cloud/orange.PNG", 
			base + "/cloud/blue.PNG"
		],
		noRotation: true,
		noSpin: true,
		width: 800,
		height: 800
	};

	onMount(() => {
		animate(animationData);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="hero">
	<div class="bg_animation_container">
		<div />
	</div>

	<div class="content">
		<div class="img_container">
			<HeaderImage alt="me with a big smile, welcoming you to my site" src="{base}/welcome.gif" />
		</div>
		<div class="txt_container">
			<p class="small">⚠️ wip, come back soon! peep my <a href="https://www.arjunkalburgi.com/arjunkalburgi.github.io">old site</a> mb?</p>
			<h2>Heyyy yaaa!</h2>
			<p>Welcome to my site, tysm for coming 🙏🏾</p>
			<p>
				I believe everything is better together, so let's hang out! We can share coffee on a video
				call, host a movie night together, or even build the company of our dreams.
			</p>
			<CanIHaveYoEmail />
		</div>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;

		&.hero {
			padding: 20vh 0;
			position: relative;

			.bg_animation_container {
				position: absolute;
				width: 100%;
				height: 100%;
				overflow: hidden;
				z-index: -1;

				display: flex;
				div {
					height: 100px;
					width: 100%;
					margin-top: auto;
					background-image: linear-gradient(rgba(0, 0, 0, 0), white);
				}
			}

			.content {
				display: grid;
				grid-template-columns: 40% auto;
				grid-gap: 5vw;
				align-items: center;
				padding: 0 10vw;

				.img_container {
					width: 100%;
				}

				p.small {
					font-size: 0.9rem;
				}

				h2 {
					margin-top: 1.5rem;
					margin-bottom: 0.5rem;
				}

				h2 + p {
					margin-top: 0.5rem;
				}
			}
		}

		@media screen and (max-width: 40rem) {
			&.hero {
				padding: 10vh 0;

				.bg_animation_container {
					height: 60%;
					top: 0;
				}
				.content {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					padding: 0 7vw;

					.txt_container {
						margin-top: 2rem;
					}

					.img_container {
						width: 70%;
					}
				}
			}
		}
	}
</style>
