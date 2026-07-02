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

{#if showNav && currentPage !== 0}
<header class="fixed top-0 left-0 right-0 bg-white/10 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
  <nav in:slide={{axis:'y', duration:800, delay:1000}} out:slide={{duration:150}} class="max-w-8xl mx-auto px-8 py-4">
    <div class="flex items-center justify-between">
      <a href="/" onclick={() => showNav = false} class="flex text-xl font-mono text-gray-900 dark:text-white hover:text-indigo-800">
      <img src="/logo.png" alt="JiaJason's Pic" class="right-0 mt-1 rounded-full size-6 shadow-2xl">
      <span class={`-ml-1 ${currentPage == 0 ? "text-indigo-800" : "dark:text-gray-300 text-indigo-900/50 hover:text-indigo-800"}`}>
        ason Liu
      </span>
      </a>
      <div class="flex gap-6">
        <a href="/project" onclick={() => showNav = false} class={`text-xl font-mono ${currentPage == 1 ? "text-indigo-800" :"text-indigo-900/50 dark:text-gray-300 hover:text-indigo-800 transition-colors"}`}>Projects</a>
        <a href="/writing" onclick={() => showNav = false} class={`text-xl font-mono ${currentPage == 2 ? "text-indigo-800" :"text-indigo-900/50 dark:text-gray-300 hover:text-indigo-800 transition-colors"}`}>Writing</a>
        <a href="/about" onclick={() => showNav = false} class={`text-xl font-mono ${currentPage == 3 ? "text-indigo-800" :"text-indigo-900/50 dark:text-gray-300 hover:text-indigo-800 transition-colors"}`}>About</a>
      </div>
    </div>
  </nav>
</header>
{/if}

{#if showNav}
<main in:fade={{duration:1500, delay:1200}} class={currentPage === 0 ? "" : "pt-24 pb-16"}>
  {#if currentPage === 0}
    {@render children()}
  {:else}
    <div class="container mx-auto ">
    {@render children()}
    </div>
  {/if}
</main>
{/if}

{#if showNav && currentPage !== 0}
<footer in:fade={{duration:1500, delay:1400}} class="border-t border-gray-200 dark:border-gray-700 mx-8 py-10 mt-8">
  <div class="flex mx-8 justify-between items-center">
    <span class="text-muted font-mono text-xs">© {new Date().getFullYear()} Jia Jason Liu</span>
    <div class="flex gap-6">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jial7150@gmail.com" target="_blank" rel="noopener noreferrer" class="text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
        <svg class="w-6 h-6"  fill="currentColor" viewBox="0 0 50 50">
          <path d="M 43.753906 6.4023438 C 42.53621 6.3489969 41.294792 6.712898 40.271484 7.46875 L 37.525391 9.4960938 L 25 18.755859 L 12.591797 9.5839844 A 1.0001 1.0001 0 0 0 11.949219 9.3007812 L 12.199219 9.3007812 L 9.734375 7.4765625 C 8.7104042 6.7188363 7.4671493 6.3528895 6.2480469 6.40625 C 5.0289444 6.4596105 3.8349462 6.9314667 2.9082031 7.8457031 C 1.7309454 9.0063798 1 10.629831 1 12.410156 L 1 15.84375 A 1.0001 1.0001 0 0 0 1 16.138672 L 1 39.5 C 1 41.421188 2.5788117 43 4.5 43 L 12 43 A 1.0001 1.0001 0 0 0 13 42 L 13 25.373047 L 24.40625 33.804688 A 1.0001 1.0001 0 0 0 25.59375 33.804688 L 37 25.373047 L 37 42 A 1.0001 1.0001 0 0 0 38 43 L 45.5 43 C 47.421188 43 49 41.421188 49 39.5 L 49 16.119141 A 1.0001 1.0001 0 0 0 49 15.859375 L 49 12.410156 C 49 10.6517 48.290455 9.0357821 47.128906 7.8730469 C 47.095336 7.8394769 47.084086 7.83018 47.097656 7.84375 A 1.0001 1.0001 0 0 0 47.091797 7.8378906 C 46.165242 6.9256756 44.971603 6.4556905 43.753906 6.4023438 z M 43.644531 8.4003906 C 44.400835 8.4300436 45.134049 8.7168876 45.689453 9.2636719 C 45.708363 9.2823439 45.722171 9.2964424 45.712891 9.2871094 C 46.50934 10.084374 47 11.188613 47 12.410156 L 47 15.496094 L 39 21.408203 L 39 11 A 1.0001 1.0001 0 0 0 38.996094 10.898438 L 41.458984 9.078125 A 1.0001 1.0001 0 0 0 41.460938 9.078125 C 42.109578 8.598977 42.888228 8.3707375 43.644531 8.4003906 z M 6.3574219 8.40625 C 7.1145694 8.37661 7.8958927 8.6037105 8.5449219 9.0839844 L 11.003906 10.902344 A 1.0001 1.0001 0 0 0 11 11 L 11 21.408203 L 3 15.496094 L 3 12.410156 C 3 11.174482 3.5017577 10.068855 4.3125 9.2695312 C 4.8677569 8.7217677 5.6002743 8.4358895 6.3574219 8.40625 z M 37 12.371094 L 37 22.886719 L 25 31.755859 L 13 22.886719 L 13 12.373047 L 24.40625 20.804688 A 1.0001 1.0001 0 0 0 25.59375 20.804688 L 37 12.371094 z M 3 17.982422 L 11 23.896484 L 11 41 L 4.5 41 C 3.6591883 41 3 40.340812 3 39.5 L 3 17.982422 z M 47 17.982422 L 47 39.5 C 47 40.340812 46.340812 41 45.5 41 L 39 41 L 39 23.896484 L 47 17.982422 z"></path>
        </svg>
      </a>
      <a href="https://github.com/JiaJasonLiu" target="_blank" rel="noopener noreferrer" class="text-muted hover:text-primary transition-colors" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/jia-sheng-liu-9a8a23224/" target="_blank" rel="noopener noreferrer" class="text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  </div>
  <div class="overflow-hidden pointer-events-none select-none relative">
    <p class="font-lora text-[12vw] font-bold italic text-primary opacity-40 hover:opacity-40 transition-opacity duration-700 ease-in-out text-center whitespace-nowrap"
       style="mask-image: linear-gradient(to bottom, black 0%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);">
      Dream Amethyst
    </p>
  </div>
</footer>
{/if}

