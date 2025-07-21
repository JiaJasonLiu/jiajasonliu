import { posts } from './data.js';

export function load() {
	return {
		posts: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			synopsis: post.synopsis,
			date: post.date,
			image: post.image,
			link: post.link,
			tags: post.tags,
			content: post.content,

		}))
	};
}
