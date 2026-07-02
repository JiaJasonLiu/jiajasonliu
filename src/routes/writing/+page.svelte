<script lang="ts">
import Artboard from "$lib/components/Artboard.svelte";
import Hero from "$lib/components/Hero.svelte";

let { data } = $props();
</script>

<Artboard variant="rose">
    <Hero
      variant="rose"
      kicker="Notes to Myself, in Public"
      lead="Writing &"
      em="reflections"
      subtitle="On engineering, learning, and the occasional life detour. Written mostly so I don't forget."
    />
    <div class="grid gap-8">
        {#each data.formattedPosts as post}
            <article class="bg-white h-82 gap-6 shadow-lg grid sm:grid-cols-2 rounded-lg overflow-hidden">
                <div class="py-20 pl-10 flex flex-wrap flex-col gap-2">
                    <time class="text-xs text-gray-600">{post.date}</time>
                    <div>
                    <h2 class="text-3xl font-semibold mb-2 hover:text-indigo-800">
                        <a class="flex items-center" href="writing/{post.slug}">{post.title}</a>
                    </h2>
                    {#if post.synopsis}
                    <p class="text-gray-700 mb-1">{post.synopsis}</p>
                    {/if}
                    </div>
                    {#if post.tags}
                        <div class="flex gap-1">
                            {#each post.tags as tag}
                            <span class="px-2 py-0.5 w-fit h-fit border font-mono border-gray-400 tracking-wider text-gray-600 rounded-full text-[10px] text-nowrap select-none uppercase">
                                {tag}
                            </span>
                            {/each}
                        </div>
                    {/if}
                    </div>
                <img src={post.image} alt="testing" class="rounded-r-lg w-full h-full object-cover overflow-hidden">
            </article>
        {/each}
    </div>
</Artboard>
