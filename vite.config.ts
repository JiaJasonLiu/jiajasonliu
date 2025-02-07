import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
	plugins: [
		tailwindcss(), 
		sveltekit()
	],
	define: {
		'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
	},
	// https://github.com/sveltejs/kit/issues/11793, not a great solution
	// optimizeDeps: {
	//     exclude: ['svelte-transition'],
	// },
});
