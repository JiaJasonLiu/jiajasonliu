<script lang="ts">
import type { BlogPost } from "../../../types/blog";

export let data: { post: BlogPost };
const { post } = data;
</script>

<div class="max-w-4xl mx-auto pb-10">
    <article class="mx-auto">
        <h1 class="text-4xl font-bold">{post.title}</h1>
        <h2 class="text-xl text-gray-700">{post.synopsis}</h2>
        <time class="inline text-sm text-gray-600">{post.date}</time>
        <div class="flex flex-col max-w-none prose"> 
            {@html post.content}
        </div>
    </article>
</div> 