<script>
  import "../app.css";
  import { slide, fade } from 'svelte/transition';

  let { children } = $props();
  let showNav = $state(false)

  $effect(() => {
    if (!showNav){
      showNav = true;
    }
	});

</script>

{#if showNav}
<header class="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
  <nav in:slide={{axis:'y', duration:800, delay:400}} class="max-w-7xl mx-auto p-4">
    <div class="flex items-center justify-between">
      <a href="/" onclick={() => showNav = false} class="text-2xl font-mono text-gray-900 dark:text-white hover:text-purple-800">JiaJason</a>
      <div class="flex space-x-8">
        <a href="/project" onclick={() => showNav = false} class="text-xl font-mono dark:text-gray-300 hover:text-purple-800 dark:hover:text-blue-400 transition-colors">Projects</a>
        <a href="/blog" onclick={() => showNav = false} class="text-xl font-mono dark:text-gray-300 hover:text-purple-800 dark:hover:text-blue-400 transition-colors">Blogs</a>
      </div>
    </div>
  </nav>
</header>
{/if}

{#if showNav}
<main in:fade={{duration:1500, delay:600}} class="mt-24">
  <div class="container mx-auto px-4">
  {@render children()}
  </div>
</main>
{/if}

