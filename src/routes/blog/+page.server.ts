import { posts } from './data.js';

export function load() {
	var resultsPosts = posts.map((post) => {
			if (!post.date){
				throw new Error(`Post "${post.slug}" is missing a date.`);
			}
			if (!post.star){
				post.star = false; // Default to false if star is not defined
			}
			return {
				slug: post.slug,
				title: post.title,
				synopsis: post.synopsis,
				date: post.date,
				content: post.content,
				star: post.star,
			}
		}).sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime()
		})
	const starPostIndex = resultsPosts.findIndex((post) => post.star)
	if (starPostIndex !== -1) {
		const [starPost] = resultsPosts.splice(starPostIndex, 1);
		resultsPosts.unshift(starPost); // Place it at the top
	}

	return {resultsPosts};
}
