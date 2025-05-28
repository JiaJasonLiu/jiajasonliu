<script lang="ts">
    import type { BlogPost } from '../../../types/blog';

    export let data: { post: BlogPost };
    console.log(data);
</script>

<div class="container mx-auto px-4 py-8">
    <article class="prose lg:prose-xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">{data.post.title}</h1>
        <time class="text-gray-600 mb-8 block">{data.post.date}</time>
        
        <!-- {#if data.post.tags}
            <div class="mb-8 flex gap-2">
                {#each data.post.tags as tag}
                    <span class="px-2 py-1 bg-gray-100 rounded-full text-sm">
                        {tag}
                    </span>
                {/each}
            </div>
        {/if} -->
        <div class="flex flex-col gap-4"> 
            {@html data.post.content}
        </div>
    </article>
</div> 