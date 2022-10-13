<script>
	import { onMount } from 'svelte';
	import { animate } from '@arjunanimations/leaves';
	import { base } from '$app/paths';
	import HeaderImage from '$lib/HeaderImage.svelte';
	import CanIHaveYoEmail from '$lib/CanIHaveYoEmail.svelte';

	const cloudAnimationData = {
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
	const elementAnimationData = {
		className: 'element_animation_container',
		numOfSprites: 45,
		pathsOfSprites: [
			base + '/element/leaf01.svg',
			base + '/element/leaf02.svg',
			base + '/element/leaf03.svg',
			base + '/element/bolt01.svg',
			base + '/element/bolt02.svg',
			base + '/element/bolt03.svg',
			base + '/element/bulb01.svg',
			base + '/element/bulb02.svg',
			base + '/element/bulb03.svg'
		],
		width: 35,
		height: 35
	};
	let carosel;
	let scrollDirection = 'left';
	let currTab = 'more';

	onMount(() => {
		animate(cloudAnimationData);
		animate(elementAnimationData);

		setInterval(() => {
			if (!carosel) return;

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
			<p class="small">🚧 wip, give me feedback! come back soon</p>
			<h2>Heyyy yaaa!</h2>
			<p>Welcome to my site, tysm for coming 🙏🏾</p>
			<p>
				I hope this site introduces me well! But nothing will beat getting in touch. Please connect!
				I'd love to hear from you
			</p>
			<CanIHaveYoEmail />
		</div>
	</div>
</section>

<section class="story">
	<div class="content">
		<h3>isn't life better together?</h3>
		<p>
			I love enjoying with friends. It helps that I find friends everywhere, and there is no
			shortage of activities, projects and hangs to make happen
		</p>
		<p>
			The best is when there's an idea for something, and everyone gets together to make it real. We
			host fancy dinners, discuss how to make our futures happen and start companies - all because
			we're together
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
		<p>So. Much. Fun.</p>
	</div>
</section>

<div class="animation-container">
	<div class="element_animation_container" />

	<section class="more">
		<div class="tabs content">
			<div class="tab-buttons">
				<button class:selected={currTab === 'more'} on:click={() => (currTab = 'more')}>
					➕ <span>More</span>
				</button>
				<button class:selected={currTab === 'book'} on:click={() => (currTab = 'book')}>
					📚 <span>Book rec's</span>
				</button>
				<button class:selected={currTab === 'ppl'} on:click={() => (currTab = 'ppl')}>
					🫂 <span>My people</span>
				</button>
				<button class:selected={currTab === 'work'} on:click={() => (currTab = 'work')}>
					💼 <span>Work</span>
				</button>
			</div>
			<div class="tab-content {currTab}">
				{#if currTab === 'more'}
					<p>Ah you made it down this far and are still reading?! Just connect with me.</p>
					<p>
						<CanIHaveYoEmail center hideLabel />
					</p>
					<p>
						I also have a lot of writing, etc from over the years that I've collected and put in one
						place. Check it out!
					</p>
					<a
						href="https://www.notion.so/arjunkalburgi/About-Arjun-c7cb723a93dd467d9e7f237033572611"
					>
						See more
					</a>
				{:else if currTab === 'book'}
					<p>There are two books I recommend to anyone.</p>
					<p>
						<a href="https://www.goodreads.com/en/book/show/33517721-the-culture-code"
							>The Culture Code by Daniel Coyle</a
						> is a business book, but learning how to make the people around you feel comfortable is
						universal.
					</p>
					<p>
						I'm very far from religious, but the takeaways of <a
							href="https://www.goodreads.com/book/show/6708.The_Power_of_Now"
							>The Power of Now by Eckhart Tolle</a
						> are incredibly valuable. Tolle distills spiritual messages in a way that makes so much
						sense.
					</p>
					<p>I can recommend more! Let's chat all about books</p>
					<a
						href="https://www.notion.so/arjunkalburgi/eaf021a4614746a2ad6c91d5bad6772c?v=89329eec6f0b47839c58fe1b8a0a2b46"
					>
						My books
					</a>
				{:else if currTab === 'ppl'}
					<p>I'm incredibly blessed to have amazing people in my life.</p>
					<p>
						<a href="https://instagram.com/krisna.bhargava">Krisna</a> is my cousin/big brother. He practically
						taught me how to think over 10 years of FaceTiming.
					</p>
					<p>
						<a href="https://instagram.com/sincerelysanika">Sanika</a> and I became besties over the
						internet. She is often the catalyst of my emotional growth.
					</p>
					<p>
						<a href="https://instagram.com/radhikals">Radhika</a> and I are two peas in a pod. No one
						soaks-in life like her, but I'm a close second.
					</p>
					<p>More shoutouts of incredible people below, also featuring their thoughts on me.</p>
					<a
						href="https://arjunkalburgi.notion.site/The-friends-along-the-way-eaa33349cc1c4712a3156be0cfb5faf8"
					>
						More people
					</a>
				{:else if currTab === 'work'}
					<p>
						I'm a PM + UX Dev but enjoy wearing other hats including UI/UX design, defining culture,
						etc.
					</p>
					<p>
						In previous roles, I built products with lots of unknowns and united teams together to
						do it. Both require deep listening, group learning and preaching vision - 3 things I
						love to do
					</p>
					<p>I have lots of writing, thoughts and work on Github and Notion, check them out.</p>
					<div>
						<a
							href="https://www.notion.so/arjunkalburgi/About-Arjun-c7cb723a93dd467d9e7f237033572611"
						>
							Notion
						</a>
						<a href="https://github.com/arjunkalburgi"> Github </a>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<section class="img">
		<img
			src="{base}/makethisyou.png"
			alt="me and a blank person hanging out with the words 'make this you' on top"
		/>
	</section>
</div>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;

		.content {
			padding: 0 10vw;
			width: 50%;

			@media screen and (max-width: 60rem) {
				padding: 0 10vw;
				width: 75%;
			}

			@media screen and (max-width: 40rem) {
				padding: 0 7vw;
				width: unset;
			}
		}

		&.hero {
			padding: 20vh 0;
			width: unset;
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

				@media screen and (min-width: 40rem) {
					padding: 0 10vw;
				}

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

			@media screen and (max-width: 40rem) {
				padding: 10vh 0;

				.bg_animation_container {
					height: 60%;
					top: 0;
				}
				.content {
					display: flex;
					flex-direction: column;
					align-items: flex-start;

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
			margin: auto;

			img {
				width: 30%;

				@media screen and (max-width: 40rem) {
					width: 50%;
				}
			}
		}

		&.more {
			position: relative;
			padding: 10vh 0;

			.tab-buttons {
				border-bottom: 1px solid grey;

				button {
					background: #ffffffcc;
					border: 1px solid grey;
					border-bottom: none;
					border-radius: 6px 6px 0 0;
					padding: 0.5rem 0.75rem;
					cursor: pointer;

					@media screen and (max-width: 40rem) {
						&:not(.selected) span {
							position: absolute;
							overflow: hidden;
							clip: rect(0 0 0 0);
							height: 1px;
							width: 1px;
							margin: -1px;
							padding: 0;
							border: 0;
						}
					}

					&.selected {
						border-color: grey;
						border-width: 2px;
						padding: 0.5rem 1rem;
						position: relative;

						&::after {
							content: ' ';
							position: absolute;
							width: 100%;
							height: 2px;
							background-color: white;
							bottom: -1px;
							left: 0;
						}
					}
				}
			}

			.tab-content {
				padding: 3rem;
				display: flex;
				flex-direction: column;
				background: #ffffffcc;

				@media screen and (max-width: 40rem) {
					padding: 1.5rem;
				}

				div {
					display: flex;
					justify-content: center;
					gap: 0.5rem;
				}
			}

			p {
				margin: 0.5rem 0;
			}

			p:last-of-type {
				margin-bottom: 2rem;
			}

			.tab-content > a,
			.tab-content > div > a {
				align-self: center;
				padding: 0.75rem;
				border: none;
				border-radius: 0.5rem;
				background: #c6ffdd;
				background: linear-gradient(217deg, rgba(255, 190, 115, 0.5), rgba(255, 0, 0, 0) 70.71%),
					linear-gradient(127deg, rgba(217, 104, 255, 0.5), rgba(0, 255, 0, 0) 70.71%),
					linear-gradient(336deg, rgba(104, 216, 255, 0.5), rgba(0, 0, 255, 0) 70.71%);
				color: black;
				cursor: pointer;
			}
		}
	}

	.animation-container {
		position: relative;

		.element_animation_container {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			overflow: hidden;
			z-index: -1;
			pointer-events: none;
		}
	}

	:global(main) {
		margin-bottom: 0 !important;
	}

	:global(footer) {
		padding-top: 0 !important;
	}
</style>
