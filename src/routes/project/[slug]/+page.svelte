<script lang="ts">
    import type { BlogPost } from '../../../types/blog';
    export let data: {post: BlogPost };
    const {post} = data;
</script>

<div class="container max-w-4xl mx-auto pb-15">
    <article class="mx-auto">
        <h1 class="text-4xl font-bold dark:text-gray-100">{post.title}</h1>
        <h2 class="text-xl text-gray-700 mb-2 dark:text-gray-100">{post.synopsis}</h2>
        <time class="block text-sm text-gray-800 mb-4 dark:text-gray-300">{post.date}</time>
        <img 
            src={post.image}
            alt={post.title}
            class="w-full h-full justify-self-center mb-8 rounded-lg shadow-lg"
        />
        <div class="flex flex-col max-w-none prose *:dark:text-gray-100"> 
            {@html post.content}
        </div>
        {#if post.tags}
        <div class="mt-8 flex gap-2 items-baseline dark:text-gray-100">
            <p>Topics:</p>
            {#each post.tags as tag}
            <span class="px-2 py-1 bg-white border border-gray-400 select-none rounded-full text-sm dark:text-black">
                {tag}
            </span>
            {/each}
        </div>
        {/if}
    </article>
</div> 