<script lang="ts">
    let { data } = $props();
</script>

<div class="container max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold mb-8">Blog Posts</h1>
    <div class="grid gap-6">
        {#each data.posts as post}
            <article class="p-6 bg-white rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-2">
                    <a href="/blog/{post.slug}" class="hover:text-purple-800">
                        {post.title}
                    </a>
                </h2>
                {#if post.synopsis}
                <p class="text-gray-700 mb-4">{post.synopsis}</p>
                {/if}
                <time class="text-gray-600 block uppercase">Created in {post.date}</time>
            </article>
        {/each}
    </div>
</div> 