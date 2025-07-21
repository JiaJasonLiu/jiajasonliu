import { error } from '@sveltejs/kit';
import { posts } from '../data.js';
import fs from 'fs';
import path from 'path';

// TODO: create a function to convert the headings into tailwind -> for ease
function convertToTailwind(html: string): string {
	// This function can be expanded to convert specific HTML elements to Tailwind classes
	return html
		.replace(/<h1>/g, '<h1 class="text-3xl font-bold">')
		.replace(/<h2>/g, '<h2 class="text-2xl font-semibold">')
		.replace(/<h3>/g, '<h3 class="text-xl font-medium">')
		.replace(/<p>/g, '<p class="">')
		.replace(/<ul>/g, '<ul class="list-disc pl-5 mb-4">')
		.replace(/<ol>/g, '<ol class="list-decimal pl-5 mb-4">');
}

export async function load({ params}) {
	try {
		let post = posts.find((post) => post.slug === params.slug);

		if (!post) {
			throw error(404, 'Post not found');
		}
		const file = await import(`../../assets/project/rl_agents.html?raw`)
		.then(m => m.default);
		post.content = convertToTailwind(file);
		// console.log('Post content loaded:', post);
		return {
			post
		};
	} catch (err) {
		console.error('Error loading HTML file:', err);
		throw error(500, 'Failed to load HTML file');
	}
}
