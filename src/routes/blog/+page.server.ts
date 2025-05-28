import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { marked } from 'marked';
import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export const load: PageServerLoad = async () => {
    try {
        // Find all markdown files in the blog directory
        const files = await glob('content/blog/*.md');
        
        const posts = await Promise.all(
            files.map(async (file) => {
                const content = await fs.readFile(file, 'utf-8');
                const { data, content: markdownContent } = matter(content);
                
                // Generate slug from filename
                const slug = path.basename(file, '.md');
                
                return {
                    slug,
                    title: data.title,
                    date: data.date,
                    content: marked(markdownContent),
                    excerpt: data.excerpt,
                    tags: data.tags
                };
            })
        );

        // Sort posts by date, newest first
        posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return {
            posts
        };
    } catch (err) {
        console.error('Error loading blog posts:', err);
        throw error(500, 'Failed to load blog posts');
    }
}; 