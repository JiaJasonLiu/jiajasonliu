import { posts } from './data.js';

export function load() {
	return {
		posts: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
