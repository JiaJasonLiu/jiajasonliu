import type { BlogPost } from "../../types/blog.js";
import { posts } from "./data.js";

export function load(): {formattedPosts: BlogPost[]} {
	var formattedPosts = posts
		.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});


	return {formattedPosts};
}
