import { posts } from './data.js';

export function load() {
	return {
		posts: posts.map((post) => {
			if (!post.date){
				throw new Error(`Post "${post.slug}" is missing a date.`);
			}
			return {
				slug: post.slug,
				title: post.title,
				synopsis: post.synopsis,
				date: post.date,
				content: post.content,
			}
		})
	};
}
