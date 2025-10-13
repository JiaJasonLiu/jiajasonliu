<script lang="ts">
    let { data } = $props();
    const posts = data.resultsPosts;
</script>

<div class="container max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold mb-8 dark:text-gray-300">Blog Posts</h1>
    <div class="grid gap-8">
        {#each posts as post}
            <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl shadow-indigo-500/50 rounded-lg hover:shadow-xl group transition-shadow duration-300">
                <h2 class="text-2xl font-semibold mb-2 hover:text-indigo-800 dark:text-gray-300">
                    <a class="flex items-center" href="/blog/{post.slug}">
                        {#if post.star}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 motion-safe:animate-pulse">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                        {/if}
                        {post.title}
                    </a>
                </h2>
                {#if post.synopsis}
                <p class="text-gray-700 dark:text-gray-300 mb-4">{post.synopsis}</p>
                {/if}
                <time class="text-gray-600  dark:text-gray-300 block">CREATED IN {post.date}</time>
            </article>
        {/each}
    </div>
</div> 