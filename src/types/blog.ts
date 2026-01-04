export type BlogPost = {
    slug: string;
    title: string;
    synopsis: string;
    date: string;
    image?: string;
    content: string;
    excerpt?: string;
    tags?: string[];
} 