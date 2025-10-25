<script lang="ts">
    import type { BlogPost } from '../../../types/blog';

    export let data: { post: BlogPost };
    const {post} = data
</script>

<div class="container max-w-4xl mx-auto pb-10">
    <article class="mx-auto">
        <h1 class="text-4xl font-bold dark:text-gray-100">{post.title}</h1>
        <h2 class="text-xl text-gray-700 mb-2 dark:text-gray-300">{post.synopsis}</h2>
        <time class="block text-sm text-gray-600 dark:text-gray-300">{post.date}</time>
        <div class="flex flex-col max-w-none prose *:dark:text-gray-100"> 
            {@html post.content}
        </div>
    </article>
</div> 