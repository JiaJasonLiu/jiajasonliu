<script lang="ts">
    import type { BlogPost } from '../../../types/blog';
    export let data: {post: BlogPost };
    const {post} = data;
</script>

<div class="container max-w-2xl mx-auto pb-10">
    <article class="prose lg:prose-xl mx-auto">
        <h1 class="text-4xl font-bold mb-4 dark:text-gray-100">{post.title}</h1>
        <h1 class="text-xl text-gray-700 mb-4 dark:text-gray-300">{post.synopsis}</h1>
        <time class="block text-l text-gray-800 mb-4 dark:text-gray-300">CREATED IN {post.date}</time>
        <img 
            src={post.image}
            alt={post.title}
            class="w-11/12 justify-self-center h-auto mb-8 rounded-lg shadow-lg"
        />
        <div class="flex flex-col gap-4 dark:text-gray-100"> 
            {@html post.content}
        </div>
        {#if post.tags}
        <div class="mt-8 flex gap-2 items-center dark:text-gray-100">
            <h3>
                Topics: 
            </h3>
            {#each post.tags as tag}
            <span class="px-2 py-1 bg-white border border-gray-400 select-none rounded-full text-sm dark:text-black">
                {tag}
            </span>
            {/each}
        </div>
        {/if}
    </article>
</div> 