import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { marked } from 'marked';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const filePath = path.join('static/blog', `${params.slug}.md`);
        const content = await fs.readFile(filePath, 'utf-8');
        const { data, content: markdownContent } = matter(content);
        // TODO: change the date

        return {
            post: {
                slug: params.slug,
                title: data.title,
                date: data.date,
                content: marked(markdownContent),
                excerpt: data.excerpt,
                tags: data.tags
            }
        };
    } catch (err) {
        console.error('Error loading blog post:', err);
        throw error(404, 'Blog post not found');
    }
}; 