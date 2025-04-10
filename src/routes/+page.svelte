<script>
  // Add any necessary imports or reactive variables here
  // Add smooth scrolling function
  /**
   * @param {{ preventDefault: () => void; currentTarget: { getAttribute: (arg0: string) => any; }; }} event
   */
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<header class="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
  <nav class="max-w-6xl mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      <a href="#" on:click={scrollToSection} class="text-xl font-bold text-gray-900 dark:text-white">JiaJason</a>
      <div class="hidden md:flex space-x-8">
        <a href="#projects" on:click={scrollToSection} class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
        <a href="#experience" on:click={scrollToSection} class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
        <a href="#blog" on:click={scrollToSection} class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a>
        <a href="#contact" on:click={scrollToSection} class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
      </div>
      <!-- Mobile menu button -->
      <button class="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Toggle menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </nav>
</header>

<!-- Add padding to main to account for fixed header -->
<main class="min-h-screen bg-white dark:bg-gray-900 pt-16">
  <!-- Hero Section -->
  <section class="h-screen flex items-center justify-center px-4">
    <div class="text-center">
      <h1 class="text-5xl font-bold mb-4 text-primary-200 dark:text-white">JiaJason</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">Software Engineer & Developer</p>
      <a href="#projects" on:click={scrollToSection} class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" aria-label="View my projects section">
        View My Work
      </a>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card 1 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://via.placeholder.com/600x400" 
              alt="Project 1" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="flex space-x-4">
                <a class="text-white hover:text-blue-400 transition-colors" aria-label="View project on GitHub">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a class="text-white hover:text-blue-400 transition-colors" aria-label="View project on LinkedIn">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project Name</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">A detailed description of the project and its key features. Explain what makes this project unique and what problems it solves.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm">Node.js</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">MongoDB</span>
            </div>
            <div class="flex justify-between items-center">
              <a href="#" class="text-blue-600 hover:text-blue-700 font-medium" aria-label="View project demo">View Demo →</a>
              <span class="text-sm text-gray-500 dark:text-gray-400">2024</span>
            </div>
          </div>
        </div>

        <!-- Project Card 2 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://via.placeholder.com/600x400" 
              alt="Project 2" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="flex space-x-4">
                <a class="text-white hover:text-blue-400 transition-colors" aria-label="View project on GitHub">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a class="text-white hover:text-blue-400 transition-colors" aria-label="View project on LinkedIn">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project Name</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">A detailed description of the project and its key features. Explain what makes this project unique and what problems it solves.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Vue.js</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm">Express</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">PostgreSQL</span>
            </div>
            <div class="flex justify-between items-center">
              <a href="#" class="text-blue-600 hover:text-blue-700 font-medium" aria-label="View project demo">View Demo →</a>
              <span class="text-sm text-gray-500 dark:text-gray-400">2023</span>
            </div>
          </div>
        </div>

        <!-- Project Card 3 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://via.placeholder.com/600x400" 
              alt="Project 3" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="flex space-x-4">
                <a class="text-white hover:text-blue-400 transition-colors" aria-label="View project on GitHub">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a class="text-white hover:text-blue-400 transition-colors" aria-label="View project on LinkedIn">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project Name</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">A detailed description of the project and its key features. Explain what makes this project unique and what problems it solves.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Svelte</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm">Python</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">Django</span>
            </div>
            <div class="flex justify-between items-center">
              <a href="#" class="text-blue-600 hover:text-blue-700 font-medium" aria-label="View project demo">View Demo →</a>
              <span class="text-sm text-gray-500 dark:text-gray-400">2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Experience</h2>
      <div class="space-y-8">
        <!-- Experience items will go here -->
        <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Company Name</h3>
          <p class="text-gray-600 dark:text-gray-300">Position • 2020 - Present</p>
          <p class="mt-4 text-gray-600 dark:text-gray-300">Description of your role and achievements.</p>
        </div>
        <!-- Add more experience items as needed -->
      </div>
    </div>
  </section>

  <!-- Blog Section -->
  <section id="blog" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Blog</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Blog posts will go here -->
        <article class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Blog Post Title</h3>
          <p class="text-gray-600 dark:text-gray-300">Preview of your blog post content goes here.</p>
          <a href="/blog" class="text-blue-600 hover:text-blue-700 mt-4 inline-block">Read more →</a>
        </article>
        <!-- Add more blog posts as needed -->
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Get in Touch</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8">I'm always open to new opportunities and collaborations.</p>
      <div class="flex justify-center space-x-6">
        <a href="mailto:your.email@example.com" class="text-gray-600 dark:text-gray-300 hover:text-blue-600" aria-label="Send me an email">
          Email
        </a>
        <a href="https://github.com/yourusername" class="text-gray-600 dark:text-gray-300 hover:text-blue-600" aria-label="Visit my GitHub profile">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" class="text-gray-600 dark:text-gray-300 hover:text-blue-600" aria-label="Visit my LinkedIn profile">
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  /* Add any component-specific styles here */
</style>
