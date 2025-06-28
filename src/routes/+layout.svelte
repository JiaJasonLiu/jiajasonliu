<script>
  let { children } = $props();
  import "../app.css";

</script>
<nav class="mb-20">
<header class="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
  <nav class="max-w-6xl mx-auto p-4">
    <div class="flex items-center justify-between">
      <a href="/" class="text-2xl font-mono text-gray-900 dark:text-white hover:text-purple-800">JiaJason</a>
      <div class="flex space-x-8">
        <a href="/project" class="text-xl font-mono dark:text-gray-300 hover:text-purple-800 dark:hover:text-blue-400 transition-colors">Projects</a>
        <a href="/blog" class="text-xl font-mono dark:text-gray-300 hover:text-purple-800 dark:hover:text-blue-400 transition-colors">Blogs</a>
      </div>
      <!-- <button class="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Toggle menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button> -->
    </div>
  </nav>
</header>
</nav>

<main>

  {@render children()}
</main>

