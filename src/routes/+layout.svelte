<script>
import "../app.css";
import { slide, fade } from "svelte/transition";
import { page } from "$app/state";

let { children } = $props();
let showNav = $state(false);
let currentPage = $state(0);
const pages = ["", "project", "writing", "about"];

$effect(() => {
	if (!showNav) {
		setTimeout(() => {
			showNav = true;
		}, 200);
	}

	currentPage = pages.indexOf(page.url.pathname.split("/")[1]);
});
</script>

{#if showNav}
<header class="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
  <nav in:slide={{axis:'y', duration:800, delay:1000}} out:slide={{duration:150}} class="max-w-7xl mx-auto px-4 py-2">
    <div class="flex items-center justify-between pl-8">
      <a href="/" onclick={() => showNav = false} class="flex text-md font-mono text-gray-900 dark:text-white hover:text-indigo-800">
      <img src="/logo.png" alt="JiaJason's Pic" class="right-0 mt-1 rounded-full size-6 shadow-2xl">
      <span class={`-ml-1 ${currentPage == 0 ? "text-indigo-800" : "dark:text-gray-300 text-indigo-900/50 hover:text-indigo-800"}`}>
        ason Liu
      </span>
      </a>
      <div class="flex gap-6">
        <a href="/project" onclick={() => showNav = false} class={`text-md font-mono ${currentPage == 1 ? "text-indigo-800" :"text-indigo-900/50 dark:text-gray-300 hover:text-indigo-800 transition-colors"}`}>Projects</a>
        <a href="/writing" onclick={() => showNav = false} class={`text-md font-mono ${currentPage == 2 ? "text-indigo-800" :"text-indigo-900/50 dark:text-gray-300 hover:text-indigo-800 transition-colors"}`}>Writing</a>
        <a href="/about" onclick={() => showNav = false} class={`text-md font-mono ${currentPage == 3 ? "text-indigo-800" :"text-indigo-900/50 dark:text-gray-300 hover:text-indigo-800 transition-colors"}`}>About</a>
      </div>
    </div>
  </nav>
</header>
{/if}

{#if showNav}
<main in:fade={{duration:1500, delay:1200}} class="pt-24 pb-16">
  <div class="container mx-auto ">
  {@render children()}
  </div>
</main>
{/if}

