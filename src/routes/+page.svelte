<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { animate } from '@arjunanimations/leaves';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';
	import HeaderImage from '$lib/HeaderImage.svelte';
	import BackgroundEffect from '$lib/BackgroundEffect.svelte';

	let tiktokScript = false;

	let imageContainer;
	const images = [
		{ image: `${base}/together/bar.jpg`, alt: 'group of friends at the bar' },
		{ image: `${base}/together/baseball.jpg`, alt: 'group of friends at the baseball game' },
		{ image: `${base}/together/caribana.jpg`, alt: 'group of friends at Caribana parade' },
		{ image: `${base}/together/hiking.jpg`, alt: 'group of friends hiking' },
		{ image: `${base}/together/party-2.jpg`, alt: 'group of friends at a house party' },
		{ image: `${base}/together/party.png`, alt: 'group of friends partying outside' },
		{ image: `${base}/together/station.jpg`, alt: 'group of friends in the subway station' }
	];
	let positions = [];
	let maxZIndex = images.length - 1;
	let currentPicture = images.length - 1;

	function randomizePositions() {
		if (!imageContainer) return;

		const containerWidth = imageContainer.clientWidth;
		const containerHeight = imageContainer.clientHeight;

		positions = images.map((_, i) => ({
			left: `${Math.min(Math.random() * (containerWidth - 250), containerWidth - 250)}px`, // Ensuring the image doesn't overflow.
			top: `${Math.min(Math.random() * (containerHeight - 250), containerHeight - 250)}px`, // Ensuring the image doesn't overflow.
			opacity: 1,
			zIndex: i
		}));
	}

	function randomizePosition(currentPicture) {
		if (!imageContainer) return;

		const containerWidth = imageContainer.clientWidth;
		const containerHeight = imageContainer.clientHeight;

		positions[currentPicture].left = `${Math.random() * (containerWidth - 250)}px`;
		positions[currentPicture].top = `${Math.random() * (containerHeight - 250)}px`;
		positions[currentPicture].zIndex = ++maxZIndex;
	}

	const links = {
		projects:
			'https://www.notion.so/arjunkalburgi/eaf021a4614746a2ad6c91d5bad6772c?v=f9dea10aacda4c6696842874cd77fb67',
		entreStory:
			'https://www.notion.so/arjunkalburgi/What-it-means-to-be-an-Entrepreneur-0c90fcc2fe104673bc1afa5c92bc4998',
		writing:
			'https://arjunkalburgi.notion.site/How-I-became-the-cross-functional-collaborator-I-am-today-14d6e92f6ecf80ddaec4ef1bdfddf981?pvs=4',
		lilaStory:
			'https://arjunkalburgi.notion.site/I-built-an-AI-powered-game-that-reduced-impulse-spending-1906e92f6ecf80f3a20ddd5d96120f93?pvs=4',
		books:
			'https://www.notion.so/arjunkalburgi/eaf021a4614746a2ad6c91d5bad6772c?v=89329eec6f0b47839c58fe1b8a0a2b46',
		careerStory:
			'https://www.notion.so/arjunkalburgi/My-Approach-How-I-Build-Products-with-Teams-db411d150cf346f8b4c0098422016b10'
	};

	onMount(() => {
		randomizePositions();

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setInterval(() => {
				currentPicture = (currentPicture - 1 + 7) % 7;
				randomizePosition(currentPicture);
			}, 5000);

			animate({
				className: 'intro-bg',
				numOfSprites: 12,
				pathsOfSprites: [
					base + '/element/leaf01.svg',
					base + '/element/leaf02.svg',
					base + '/element/leaf03.svg'
				]
			});
		}

		setTimeout(() => {
			tiktokScript = false; //'ontouchstart' in window && window.innerWidth <= 768; // mobile devices
		}, 1500);
	});
</script>

<svelte:head>
	<title>Introducing Arjun</title>
	<meta
		name="description"
		content="Hello! My name is Arjun and this website is for you to learn about me. You'll find some of my writing, projects I've worked on, my latest art projects, stories I love to tell and more!"
	/>
</svelte:head>

<section class="hero wide">
	<div class="blog---featured-post---image">
		<HeaderImage alt="me with a big smile, welcoming you to my site" src="{base}/welcome.gif" />
	</div>
	<div class="blog---feature---content">
		<p>
			Hi there! My name is Arjun, I love learning new things and being creative. I got a big smile,
			a huge laugh, and boatloads of enthusiasm that comes from living my core value:
		</p>
		<div>
			<h2>Let's enjoy life together</h2>
		</div>
		<p>This entails a lot of things, let me show you...</p>
		<p>Welcome to: <span class="cursive">Living life, Arjun style</span></p>
	</div>
</section>

<section class="intro-content thin">
	<a name="Content" aria-hidden="true" style="visibility: hidden">My creativity</a>
	<div class="intro-bg" />
	<h2>Expressing myself</h2>
	<p>
		Creative outlets are a huge part of enjoying life, it’s how we connect with others and truly
		understand ourselves. When we share our thoughts, emotions, and creativity, it fosters a deeper
		sense of fulfillment and authenticity in everything we do.
	</p>
	<p>Check out some of the things I've created:</p>
	<div>
		<div class="posts">
			<div class="section">
				<a class="post" href={links.entreStory}>
					<div class="post-art">
						<BackgroundEffect alt="lightbulb switching on and off" src="{base}/lightbulb.gif" />
						<span>#writing</span>
					</div>
					<h4>Collaboration is a culture, not a todo list 🔗</h4>
					<p>
						In this blog post I explore my journey as a collaborator and how I learned to be a
						connector.
					</p>
				</a>
			</div>
			<div class="section">
				<a class="post" href={links.lilaStory}>
					<div class="post-art">
						<BackgroundEffect
							alt="stack of money with wings flapping up and down"
							src="{base}/money-wings.gif"
						/>
						<span>#project</span>
					</div>
					<h4>Building my first company 🔗</h4>
					<p>
						I built an AI product that helped impulsive & anxious spenders break their avoidance
						habit and make intentional decisions with their money.
					</p>
				</a>
			</div>
		</div>
		<div class="tiktok section">
			{#if tiktokScript}
				<blockquote
					class="tiktok-embed"
					cite="https://www.tiktok.com/@arjipoo/video/7167011413393706246"
					data-video-id="7167011413393706246"
					style="width: 325px;"
				>
					<iframe
						title="Arjun's Bhangra Flex tiktok video"
						name="__tt_embed__v7167011413393706246"
						sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
						src="https://www.tiktok.com/embed/v2/7167011413393706246?lang=en-US&amp;"
						style="width: 100%; height: 720px; display: block; visibility: unset;"
					/>
				</blockquote>
				<script async src="https://www.tiktok.com/embed.js"></script>
			{:else}
				<a class="tiktokpic" href="https://www.tiktok.com/@arjipoo/video/7167011413393706246">
					<img
						target="_blank"
						style="width: 325px;"
						src="{base}/tiktok.jpeg"
						alt="Arjun's Bhangra Flex tiktok screenshot"
					/>
				</a>
			{/if}
		</div>
	</div>
	<div>
		<p>
			I've got a lot of content across the internet. You can <a target="_blank" href={links.writing}
				>read more of my writing</a
			>, <a target="_blank" href={links.projects}>check out some of my projects</a>, and
			<a target="_blank" href="https://www.tiktok.com/@arjipoo">watch more of my TikToks</a>.
		</p>
	</div>
	<div />
</section>

<section class="story">
	<div class="bg">
		<h2>Bringing people together</h2>
		<div class="columns">
			<p>
				A core part of enjoying life is the connections we make along the way. Lucky for me, I’m so
				extroverted, there isn't any challenges situation where I can't make connections.
			</p>
			<p>
				Hate small talk? I’ll get deep. All strangers? I know what to say. Crippling anxiety? I am a
				safe place. But there’s no better time for my extroversion than when I myself am feeling
				depressed.
			</p>
			<p>
				In early November 2022, I was so sad. My dad’s passing 10 months prior was hitting me hard.
				One particularly down day, I hosted six friends for a game of We Are Not Strangers. They all
				knew my sadness, and came with their hearts open.
			</p>
			<p>
				By the end of the night we had all cried, laughed a good amount, exchanged several hugs, and
				shared some of the darkest parts of ourselves. I can’t really describe how it felt
				afterwards, like I was uplifted, like we had healed together.
			</p>
			<p>
				As each friend said their goodbyes, it became apparent how rare and beautiful this night
				was. I truly believe that this night was an example of the beauty of life. I want to live
				every day connecting with others, bringing people together and enjoying the ride of life.
			</p>
		</div>
	</div>
</section>

<section class="images">
	<div class="imageContainer" bind:this={imageContainer}>
		{#each images as img, i}
			<img
				use:lazyImage
				src={img.image}
				alt={img.alt}
				class={currentPicture === i ? 'animate' : ''}
				style="
					left: {positions[i]?.left}; 
					top: {positions[i]?.top}; 
					opacity: 1;
					z-index: {positions[i]?.zIndex};
				"
			/>
		{/each}
	</div>
</section>

<section class="recs">
	<div class="books">
		<h4>Book club hours</h4>
		<p>Here are two books I recommend to anyone.</p>
		<p>
			<a href="https://www.goodreads.com/en/book/show/33517721-the-culture-code"
				>The Culture Code by Daniel Coyle</a
			> teaches you how to make people around you feel comfortable.
		</p>
		<p>
			I'm not religious, but the takeaways of <a
				href="https://www.goodreads.com/book/show/6708.The_Power_of_Now"
				>The Power of Now by Eckhart Tolle</a
			> help me view the world.
		</p>
		<p>I can recommend more! Let's chat all about books</p>
		<a href={links.books}> More books... </a>
	</div>
	<div>
		<h4>It takes a village</h4>
		<p>I'm incredibly blessed to have amazing people in my life.</p>
		<p>
			<a href="https://instagram.com/krisna.bhargava">Krisna</a> is my cousin/big brother. He practically
			taught me how to think over 10 years of FaceTiming.
		</p>
		<p>
			<a href="https://instagram.com/sincerelysanika">Sanika</a> and I became besties over the internet.
			She is often the catalyst of my emotional growth.
		</p>
		<p>
			<a href="https://instagram.com/radhikals">Radhika</a> and I are two peas in a pod. No one soaks-in
			life like her, but I'm a close second.
		</p>
		<a
			href="https://arjunkalburgi.notion.site/The-friends-along-the-way-eaa33349cc1c4712a3156be0cfb5faf8"
		>
			More people...
		</a>
	</div>
</section>

<section class="career">
	<a name="Career" aria-hidden="true" style="visibility: hidden">My career</a>
	<h2>Building products</h2>
	<p>
		I’ve spent the last 5 years diving deep into consumer experience, especially obsessing over how
		people interact with their money. Whether I held the title of PM or not, I’ve been building
		products that flow with people’s daily lives, making them feel more approachable (and honestly,
		less painful).
	</p>
	<p>
		That obsession led me to start Lila, a gamified money app for Gen Z and Millennials stuck in
		stressful impulsive spending habits. I ran over 40 deep-dive interviews to break down the
		problem from first-principles at the psychology layer, and built an AI-driven game experience
		that got people to actually check their spending on average 6.7 times per week — a 3000% boost.
		Turns out, making finances fun actually works.
	</p>
	<p class="cursive">I'm a Product Innovator</p>
	<p>
		Through Lila, I developed my formula for innovation as a creative process. It’s an iterative
		cycle of user feedback, team-wide ideation, data-driven decision-making, MVP feature scoping and
		progressive delivery. This is my superpower as a PM, and I’m looking forward to bringing
		innovation to the rest of my career.
	</p>
	<p>
		I’m also very adept as a people-person. At Nylas, I stepped up when our new self-serve revenue
		product stalled. With sales drying up, this channel was mission-critical, but progress was
		stuck. So I jumped in and started talking to everyone — I aligned priorities between VP Product
		and Eng, reenergized the team, and got the pilot launched in 3 weeks.
	</p>
	<p>
		If you’re working on something cool in fintech or anything consumer-facing, let’s connect! I'm
		brought on to be a Product Innovator, accelerating team's iterative learning, collaboration, and
		product success.
	</p>
	<div>
		<a class="link-button" href={links.careerStory}> Read more about my approach... </a>
	</div>
</section>

<style lang="scss">
	section {
		margin-right: auto;
		margin-left: auto;

		padding-top: 10rem;
		padding-right: 0rem;
		padding-left: 0rem;

		@media screen and (min-width: 1240px) {
			max-width: 1000px;
		}

		max-width: 800px;

		@media screen and (max-width: 791px) {
			padding-left: 10px;
			padding-right: 10px;
			width: unset;
		}

		&.wide {
			@media screen and (min-width: 1240px) {
				max-width: 1350px;
			}

			max-width: 1000px;
		}

		&.thin {
			@media screen and (min-width: 1240px) {
				max-width: 800px;
			}

			max-width: 700px;

			@media screen and (max-width: 791px) {
				padding-left: 20px;
				padding-right: 20px;
				width: unset;
			}
		}
	}

	section.hero {
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: 32px;
		grid-row-gap: 0px;
		grid-template-columns: minmax(250px, 1fr) 0.25fr 1fr;
		grid-template-rows: auto auto auto;

		@media screen and (min-width: 1240px) {
			-webkit-box-align: start;
			align-items: start;
			grid-template-columns: minmax(250px, 1fr) 0.25fr 1fr;
			grid-template-rows: auto auto auto auto auto;
		}

		@media screen and (min-width: 1920px) {
			grid-column-gap: 86px;
			grid-template-columns: 1.5fr 1fr 1fr;
		}

		.blog---featured-post---image {
			overflow: hidden;
			position: relative;
			border-radius: 10px;
			isolation: isolate;

			@media screen and (max-width: 791px) {
				height: 300px;
				grid-row-start: 1;
				grid-row-end: 2;
				grid-column-start: 1;
				grid-column-end: 4;
			}

			@media screen and (min-width: 1240px) {
				min-height: 500px;
				align-self: start;
			}

			@media screen and (min-width: 1920px) {
				grid-column-start: span 1;
				grid-column-end: span 1;
				grid-row-start: span 1;
				grid-row-end: span 1;
			}
		}

		.blog---feature---content {
			grid-row-start: 1;
			grid-row-end: 2;
			grid-column-start: 2;
			grid-column-end: 4;
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
			white-space: normal;

			@media screen and (max-width: 791px) {
				margin-right: 1rem;
				grid-row-start: span 1;
				grid-row-end: span 1;
				grid-column-start: span 3;
				grid-column-end: span 3;
			}

			@media screen and (min-width: 1240px) {
				margin-right: 0px;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				grid-column-gap: 1rem;
				grid-row-gap: 1rem;
				// font-size: 2.3rem;
				// line-height: 1.3;
				// font-weight: 400;
			}

			& > p {
				margin-left: 2rem;

				@media screen and (min-width: 1240px) {
					margin-left: 5rem;
				}
			}

			h2 {
				display: flex;
				flex-direction: row;
				justify-content: start;
				align-items: center;
			}
		}
	}

	section.intro-content {
		position: relative;

		h3 {
			margin-bottom: 0.2rem;
		}

		span {
			font: var(--alt-text);
		}

		& > div {
			display: grid;
			grid-template-columns: 1fr auto;
			grid-column-gap: 50px;

			@media screen and (max-width: 791px) {
				display: flex;
				flex-direction: column;
				gap: 40px;
				align-items: center;
			}
		}

		.posts {
			justify-content: space-evenly;
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.post {
				background: var(--bg-colorlight);
				padding: 10px;
				border-radius: 18px;
				border: 1px solid var(--border-color);

				div.post-art {
					position: relative;
					height: 160px;
					transition: transform 0.2s ease-in-out;
					overflow: hidden;

					span {
						position: absolute;
						bottom: 5px;
						right: 8px;
						color: var(--text-color);
					}
				}

				&:hover {
					background-color: #f8f8f8;
					text-decoration: none;
				}

				h4 {
					margin-top: 1rem;
					margin-bottom: 0.5rem;
				}

				p {
					margin: 0;
					font-size: 1rem;
					color: var(--text-color);
				}
			}
		}

		.tiktok.section {
			border-radius: 18px;
			.tiktokpic:hover {
				outline: 1px solid #ababab;
			}
		}

		.section {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.intro-bg {
			position: absolute;
			width: 100vw;

			@media screen and (min-width: 1240px) {
				left: calc(-1 * (100vw - 800px) / 2);
			}

			@media screen and (min-width: 791px) {
				left: calc(-1 * (100vw - 700px) / 2);
			}
		}
	}

	section.story {
		div.bg {
			padding: 3rem;
			border: 1px solid var(--border-color);
			background-color: var(--bg-colorlight);
			border-radius: 10px;

			h2 {
				margin-top: 0;
			}

			div.columns {
				column-count: 2;
				column-gap: 40px;
				margin-bottom: 0;

				@media screen and (max-width: 791px) {
					column-count: 1;
				}

				p:first-of-type {
					margin-top: 0;
				}
				p:last-of-type {
					margin-bottom: 0;
				}
			}
		}
	}

	section.images {
		position: relative;
		overflow: visible;
		padding-left: 0;
		padding-right: 0;
		padding-bottom: 2rem;

		@media screen and (max-width: 791px) {
			overflow: hidden;
		}

		.imageContainer {
			position: relative;
			width: 100%;
			height: 60vh;
			overflow: visible;
			margin: auto;
		}

		img {
			height: 250px;
			width: auto;
			border-radius: 10px;
			margin-bottom: 11px;
			position: absolute;
			box-shadow: 0px 0px 40px #111;
			// transition: opacity 0.5s ease-in-out;
			// transition: opacity 0.5s ease-in-out, left 0.8s ease-in-out, top 0.8s ease-in-out;

			@keyframes fadeIn {
				from {
					opacity: 0;
					transform: scale(0.9);
				}
				to {
					opacity: 1;
					transform: scale(1);
				}
			}

			&.animate {
				animation: fadeIn 1s ease-in-out;
			}
		}
	}

	section.recs {
		display: grid;
		grid-gap: 50px;
		grid-template-columns: auto auto;

		@media screen and (max-width: 791px) {
			padding-left: 20px;
			padding-right: 20px;
			grid-gap: 20px;

			overflow: scroll;
			padding-bottom: 10px;
		}

		div {
			padding: 0.5rem 2rem 2rem;
			border: 1px solid var(--border-color);
			background-color: var(--bg-colorlight);
			border-radius: 18px;

			@media screen and (max-width: 791px) {
				width: 67vw;
			}

			& > a {
				font: var(--alt-text);
				text-decoration: underline;
			}
		}
	}

	section.career {
		padding-bottom: 10rem;

		& > *:not(.cursive) {
			margin-left: 2rem;
		}

		.cursive {
			@media screen and (min-width: 1240px) {
				padding-left: 10px;
			}

			@media screen and (max-width: 1030px) and (min-width: 791px) {
				padding-left: 10px;
			}
		}
	}

	.link-button {
		border: 1px solid rgb(22 24 35 / 12%);
		background: white;
		padding: 0.75rem;
		border-radius: 10px;
		margin: 1rem 0;
	}

	a:not(.link-button, .post) {
		text-decoration: underline;
		text-decoration-color: var(--brand-colordark);
	}

	.cursive {
		font: var(--alt-text);
		width: 50%;
	}

	:global(main) {
		margin-bottom: 0 !important;
	}

	:global(footer) {
		padding-top: 0 !important;
	}
</style>
