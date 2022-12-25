<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	// import HeaderImage from '$lib/HeaderImage.svelte';
	// import BackgroundEffect from '$lib/BackgroundEffect.svelte';

	let carosel;
	let scrollDirection = 'left';
	let tiktokScript = false;

	onMount(() => {
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

		setTimeout(() => {
			tiktokScript = !window.navigator.userAgent.includes('iPhone') || true;
		}, 1500);
	});
</script>

<svelte:head>
	<title>Introducing Arjun</title>
</svelte:head>

<section class="hero wide">
	<div class="blog---featured-post---image">
		<!-- <HeaderImage alt="me with a big smile, welcoming you to my site" src="{base}/welcome.gif" /> -->
	</div>
	<div class="blog---feature---content">
		<p class="small">🚧 wip, give me feedback! come back soon</p>
		<p>
			Hi there! My name is Arjun, I love learning new things and being creative with what I learn. I
			got a big smile, a huge laugh and boatloads of enthusiasm from my belief that
		</p>
		<div>
			<h2>Life is meant to be enjoyed - preferably together</h2>
			<p>Living life,<br />Arjun style</p>
		</div>
		<p>
			This means I like exploring the world we live in, thinking about how things work experimenting
			with it. It means bringing people together, sharing each other’s company and having fun
			goofing off. In general, it’s a lot of fun.
		</p>
		<p>Let me show you...</p>
	</div>
</section>

<section class="intro-content thin">
	<h3>Creative Output</h3>
	<span>writing, projects, art</span>
	<hr />
	<div>
		<div class="posts">
			<a
				class="post"
				href="https://www.notion.so/arjunkalburgi/What-it-means-to-be-an-Entrepreneur-0c90fcc2fe104673bc1afa5c92bc4998"
			>
				<div>
					<!-- <BackgroundEffect /> -->
					<span>#writing</span>
				</div>
				<h4>What it Means to be an Entrepreneur</h4>
				<p>
					My take? Entrepreneurs are like any other type of artist or creative, their job is to
					create.
				</p>
			</a>
			<a
				class="post"
				href="https://www.notion.so/arjunkalburgi/Personal-Finance-that-Feels-Good-4ea821686e764038a808822a8b41ea64"
			>
				<div>
					<!-- <BackgroundEffect /> -->
					<span>#project</span>
				</div>
				<h4>Personal Finance that Feels Good</h4>
				<p>
					I want to productize healthy personal finance that helps people make the most of their
					money
				</p>
			</a>
		</div>
		<div class="tiktok">
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
			{:else}
				<a href="https://www.tiktok.com/@arjipoo/video/7167011413393706246">
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
</section>

<section class="story">
	<div>
		<h2>Bringing people together</h2>
		<p>
			I’m so extroverted, I welcome social challenges. Hate small talk? I’ll get deep. All
			strangers? I know what to say. Crippling anxiety? I am a safe place. But there’s no better
			time for my extroversion than when I myself am feeling depressed.<br /><br />In early November
			2022, I was so sad. My dad’s passing 10 months prior was hitting me hard. One particularly
			down day, I hosted six friends for a game of We Are Not Strangers. They all knew my sadness,
			and came with their hearts open.<br /><br />By the end of the night we had all cried, laughed
			a good amount, exchanged several hugs, and shared some of the darkest parts of ourselves. I
			can’t really describe how it felt afterwards, like I was uplifted, like we had healed
			together.<br /><br />As each friend said their goodbyes, it became apparent how rare and
			beautiful this night was. I truly believe that this night was an example of the beauty of
			life. I want to live every day connecting with others and bringing people together.
		</p>
	</div>
</section>

<section class="images wide">
	<div class="carosel" bind:this={carosel}>
		<img src="{base}/together/bar.jpg" alt="group of friends at the bar" />
		<img src="{base}/together/baseball.jpg" alt="group of friends at the baseball game" />
		<img src="{base}/together/caribana.jpg" alt="group of friends at Caribana parade" />
		<img src="{base}/together/hiking.jpg" alt="group of friends hiking" />
		<img src="{base}/together/party-2.jpg" alt="group of friends at a house party" />
		<img src="{base}/together/party.png" alt="group of friends partying outside" />
		<img src="{base}/together/station.jpg" alt="group of friends in the subway station" />
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
		<a
			href="https://www.notion.so/arjunkalburgi/eaf021a4614746a2ad6c91d5bad6772c?v=89329eec6f0b47839c58fe1b8a0a2b46"
		>
			More books...
		</a>
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

<section class="career wide">
	<div class="blog---feature---content">
		<h3>Career Life</h3>
		<hr />
		<p>
			I've had roles as a PM and Dev, but really I love UX and systems. I like to get deep into the
			workings of something and push buttons using my technical and people skills to create results
			for users. Actions make things happen!
		</p>
		<h2>I build product with deep listening, group learning & attention to detail</h2>
		<p>
			In previous roles, I built products with lots of unknowns and united teams together to do it.
			I found that focusing on the learning cohesion of my team benefits productivity, enables more
			creative solutions and creates high team culture. It cemented my leadership and product
			management style.
		</p>
		<p>
			<a href="#">Read more about my approach...</a>
		</p>
	</div>
	<div class="blog---featured-post---image">
		<!-- <BackgroundEffect /> -->
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

			div {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				h2 {
					color: #e9681b;
				}

				p {
					font: var(--alt-text);
					transform: rotate(-90deg);
					text-align: center;
					width: 50%;

					@media screen and (max-width: 791px) {
						display: none;
					}
				}
			}
		}
	}

	section.intro-content {
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
				div {
					position: relative;
					height: 160px;
					transition: transform 0.2s ease-in-out;

					span {
						position: absolute;
						bottom: 5px;
						right: 8px;
					}
				}

				&:hover div {
					transform: scale(1.05);
				}

				h4 {
					margin-top: 1rem;
					margin-bottom: 0.5rem;
				}

				p {
					margin: 0;
				}
			}
		}
	}

	section.story {
		div {
			padding: 3rem 3rem 1rem;
			border: 1px solid #ababab;
			background-color: white;
			border-radius: 10px;

			h2 {
				margin-top: 0;
				color: #714dff;
			}

			p {
				column-count: 2;
				column-gap: 40px;
				margin-bottom: 0;

				@media screen and (max-width: 791px) {
					column-count: 1;
				}
			}
		}
	}

	section.images {
		position: relative;
		height: 250px;
		overflow: hidden;
		padding-left: 0;
		padding-right: 0;

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

	section.recs {
		display: grid;
		grid-gap: 50px;
		grid-template-columns: auto auto;

		@media screen and (max-width: 791px) {
			grid-gap: 20px;
			overflow: scroll;
		}

		a {
			text-decoration: underline;
			text-decoration-color: #ababab;
		}

		div {
			padding: 0.5rem 2rem 2rem;
			border: 1px solid #ababab;
			background-color: white;
			border-radius: 10px;

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
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: 32px;
		grid-row-gap: 0px;
		grid-template-columns: minmax(250px, 1fr) 0.25fr 1fr;
		grid-template-rows: auto auto auto;
		padding-bottom: 10rem;

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
			@media screen and (max-width: 791px) {
				height: 300px;
				overflow: hidden;
				grid-row-start: 1;
				grid-row-end: 2;
				grid-column-start: 1;
				grid-column-end: 4;
			}

			@media screen and (min-width: 1240px) {
				overflow: hidden;
				height: 500px;
				align-self: start;
			}

			@media screen and (min-width: 1920px) {
				grid-column-start: span 1;
				grid-column-end: span 1;
				grid-row-start: span 1;
				grid-row-end: span 1;
			}

			img {
				max-width: 100%;
				border-radius: 10px;
			}
		}

		.blog---feature---content {
			grid-row-start: 1;
			grid-row-end: 2;
			grid-column-start: 1;
			grid-column-end: 3;
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

			& > p,
			& > h3,
			& > hr {
				margin-left: 2rem;

				@media screen and (min-width: 1240px) {
					margin-left: 5rem;
				}
			}

			h2 {
				color: #4d5fff;
			}

			a {
				font: var(--alt-text);
				text-decoration: underline;
			}
		}
	}

	:global(main) {
		margin-bottom: 0 !important;
	}

	:global(footer) {
		padding-top: 0 !important;
	}
</style>
