<script lang="ts">
    import type { BlogPost } from '../../../types/blog';
    export let data: { post: BlogPost };
</script>

<div class="container max-w-2xl mx-auto pb-10">
    <article class="prose lg:prose-xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">{data.post.title}</h1>
        <h1 class="text-l text-gray-700 mb-4">{data.post.synopsis}</h1>
        <img 
            src={data.post.image}
            alt={data.post.title}
            class="w-11/12 justify-self-center h-auto mb-4 rounded-lg shadow-lg"
        />
        {#if data.post.tags}
        <div class="mb-4 flex gap-2">
            {#each data.post.tags as tag}
            <span class="px-2 py-1 bg-gray-100 rounded-full text-sm">
                {tag}
            </span>
            {/each}
        </div>
        {/if}
        <time class="block text-l text-gray-800 mb-4">{data.post.date}</time>
        <div class="flex flex-col gap-4"> 
            {@html data.post.content}
        </div>
    </article>
</div> 