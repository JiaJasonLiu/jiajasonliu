<script lang="ts">
    import type { BlogPost } from '../../../types/blog';

    export let data: { post: BlogPost };
    const {post} = data
</script>

<div class="container max-w-2xl mx-auto pb-10">
    <article class="prose lg:prose-xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">{post.title}</h1>
        <h1 class="text-xl text-gray-700 mb-4">{post.synopsis}</h1>
        <time class="text-gray-600 mb-4 block">CREATED IN {post.date}</time>
        <div class="flex flex-col gap-4"> 
            {@html post.content}
        </div>
    </article>
</div> 