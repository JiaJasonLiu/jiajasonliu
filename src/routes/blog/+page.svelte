<script lang="ts">
    // import type { BlogPost } from '../../types/blog';
    
    // export let data: { posts: BlogPost[] };
    let { data } = $props();
    console.log(data);

</script>

<div class="container max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold mb-8">Blog Posts</h1>
    
    <div class="grid gap-6">
        {#each data.posts as post}
            <article class="p-6 bg-white rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-2">
                    <a href="/blog/{post.slug}" class="hover:text-blue-600">
                        {post.title}
                    </a>
                </h2>
                <time class="text-gray-600 mb-4 block">{post.date}</time>
                {#if post.excerpt}
                    <p class="text-gray-700">{post.excerpt}</p>
                {/if}
                {#if post.tags}
                    <div class="mt-4 flex gap-2">
                        {#each post.tags as tag}
                            <span class="px-2 py-1 bg-gray-100 rounded-full text-sm">
                                {tag}
                            </span>
                        {/each}
                    </div>
                {/if}
            </article>
        {/each}
    </div>
</div> 