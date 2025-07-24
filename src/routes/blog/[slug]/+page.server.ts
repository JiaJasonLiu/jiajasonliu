import { error } from '@sveltejs/kit';
import { posts } from '../data.js';
import {convertToTailwind} from '$lib/utils.js'

export async function load({ params}) {
	try {
		let post = posts.find((post) => post.slug === params.slug);

		if (!post) {
			throw error(404, 'Post not found');
		}
		const file = await import(`../../assets/blog/${post.slug}.html?raw`)
		.then(m => m.default);
		post.content = convertToTailwind(file);
		return {
			post
		};
	} catch (err) {
		console.error('Error loading HTML file:', err);
		throw error(500, 'Failed to load HTML file');
	}
}
