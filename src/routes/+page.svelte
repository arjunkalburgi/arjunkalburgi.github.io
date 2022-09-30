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
			base + '/cloud/pink.PNG',
			base + '/cloud/orange.PNG',
			base + '/cloud/blue.PNG'
		],
		noRotation: true,
		noSpin: true,
		width: 800,
		height: 800
	};
	let carosel;
	let scrollDirection = 'left';

	onMount(() => {
		animate(animationData);

		setInterval(() => {
			if (scrollDirection === 'left') {
				carosel.scrollTo(carosel.scrollLeft + 5, 0);
				if (carosel.scrollLeft === carosel.scrollLeftMax) {
					scrollDirection = 'right';
				}
			}
			if (scrollDirection === 'right') {
				carosel.scrollTo(carosel.scrollLeft - 5, 0);
				if (carosel.scrollLeft === 0) {
					scrollDirection = 'left';
				}
			}
		}, 15);
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
			<p class="small">
				🚧 wip, come back soon! peep my <a
					href="https://www.arjunkalburgi.com/arjunkalburgi.github.io">old site</a
				> mb?
			</p>
			<h2>Heyyy yaaa!</h2>
			<p>Welcome to my site, tysm for coming 🙏🏾</p>
			<p>
				I hope this site can introduce me well! But nothing will beat getting to know each other.
				Please connect! I'd love to hear from you
			</p>
			<CanIHaveYoEmail />
		</div>
	</div>
</section>

<section class="story">
	<div class="content">
		<h3>isn't life better together?</h3>
		<p>
			I love making things happen with my friends. When someone has an idea for something, we
			quickly jump on it - sharing thoughts and brainstorming possibilities. Everyone helps make it
			real.
		</p>
		<p>
			Sometimes our ideas are about spending time together, or a project we want to do, or even just
			daily life. Whether it's a fancy potluck, furnishing someone's home or starting the company of
			our dreams, we always have so much fun.
		</p>
		<div class="images">
			<div class="carosel" bind:this={carosel}>
				<img src="{base}/together/bar.jpg" alt="group of friends at the bar" />
				<img src="{base}/together/baseball.jpg" alt="group of friends at the baseball game" />
				<img src="{base}/together/caribana.jpg" alt="group of friends at Caribana parade" />
				<img src="{base}/together/hiking.jpg" alt="group of friends hiking" />
				<img src="{base}/together/party-2.jpg" alt="group of friends at a house party" />
				<img src="{base}/together/party.png" alt="group of friends partying outside" />
				<img src="{base}/together/station.jpg" alt="group of friends in the subway station" />
			</div>
		</div>
		<p>The fun is the best part. It's what life is about, having fun together. Always together.</p>
		<CanIHaveYoEmail center label="enter your email! Let's have fun making your ideas real" />
	</div>
</section>

<section class="more">
	<h4>More</h4>
	<p>Hate small talk? Let's get deep!</p>
	<p>Checkout my writing, projects, books I'm reading and even my workouts</p>
	<a
		target="_blank"
		href="https://www.notion.so/arjunkalburgi/About-Arjun-c7cb723a93dd467d9e7f237033572611"
	>
		Show me more
	</a>
</section>

<section class="img">
	<img
		src="{base}/makethisyou.png"
		alt="me and a blank person hanging out with the words 'make this you' on top"
	/>
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

		&.story {
			.content {
				padding: 0 10vw;
				width: 50%;

				@media screen and (max-width: 40rem) {
					padding: 0 7vw;
					width: unset;
				}
			}

			.images {
				position: relative;
				height: 250px;
				overflow: hidden;

				.carosel {
					position: absolute;
					width: 100%;
					display: flex;
					flex-direction: row;
					gap: 1rem;
					overflow-x: auto;
					scroll-snap-type: x mandatory;
					scroll-behavior: smooth;
					-webkit-overflow-scrolling: touch;

					&::-webkit-scrollbar {
						width: 10px;
						height: 10px;
					}
					&::-webkit-scrollbar-thumb {
						background: black;
						border-radius: 10px;
					}
					&::-webkit-scrollbar-track {
						background: transparent;
					}
				}

				img {
					height: 250px;
					width: auto;
					margin-bottom: 11px;
				}
			}
		}

		&.img {
			padding: 5vh 0 0;
			width: 50%;
			margin: auto;

			@media screen and (max-width: 40rem) {
				padding: 0 7vw;
				width: unset;
			}

			img {
				width: 50%;
			}
		}

		&.more {
			margin-top: 3rem;

			h4 {
				margin-bottom: 0.75rem;
			}

			p {
				margin: 0.5rem 0;
			}

			p:last-of-type {
				margin-top: 0;
				margin-bottom: 1.5rem;
			}

			a {
				padding: 0.75rem;
				border: none;
				border-radius: 0.5rem;
				background: #c6ffdd; /* fallback for old browsers */
				// background: linear-gradient(217deg, #5d26c1cc, rgba(255, 0, 0, 0) 70.71%),
				// 	linear-gradient(127deg, #a17fe0cc, rgba(0, 255, 0, 0) 70.71%),
				// 	linear-gradient(336deg, #59c173cc, rgba(0, 0, 255, 0) 70.71%);

				// background: linear-gradient(217deg, #f7797dcc, rgba(255, 0, 0, 0) 70.71%),
				// 	linear-gradient(127deg, #c6ffddcc, rgba(0, 255, 0, 0) 70.71%),
				// 	linear-gradient(336deg, #fbd786cc, rgba(0, 0, 255, 0) 70.71%);

				background: linear-gradient(217deg, rgba(255, 190, 115, 0.5), rgba(255, 0, 0, 0) 70.71%),
					linear-gradient(127deg, rgba(217, 104, 255, 0.5), rgba(0, 255, 0, 0) 70.71%),
					linear-gradient(336deg, rgba(104, 216, 255, 0.5), rgba(0, 0, 255, 0) 70.71%);
				color: black;
			}
		}
	}

	:global(main) {
		margin-bottom: 0 !important;
	}
</style>
