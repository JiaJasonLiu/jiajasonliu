import { error } from '@sveltejs/kit';
import { posts } from '../data.js';
import fs from 'fs';
import path from 'path';

// TODO: create a function to convert the headings into tailwind -> for ease

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);
	const filePath = path.resolve('static/projects/rl_agents.html');
	const htmlContent = fs.readFileSync(filePath, 'utf-8');
	
	if (!post) error(404);

	post.content = htmlContent;

	return {
		post
	};
}
