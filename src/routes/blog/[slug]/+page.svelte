<script lang="ts">
    import type { BlogPost } from '../../../types/blog';

    export let data: { post: BlogPost };
    console.log(data);
</script>

<div class="container max-w-2xl mx-auto pb-10">
    <article class="prose lg:prose-xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">{data.post.title}</h1>
        <time class="text-gray-600 mb-8 block">{data.post.date}</time>
        <div class="flex flex-col gap-4"> 
            {@html data.post.content}
        </div>
    </article>
</div> 