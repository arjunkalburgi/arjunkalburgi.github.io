import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import * as dotenv from 'dotenv';

dotenv.config()
const main = true; // process.env.VITE_NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		paths: {
			base: main ? '' : '/2022-website',
		},

	}
};

export default config;
