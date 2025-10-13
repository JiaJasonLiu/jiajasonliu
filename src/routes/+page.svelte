<script>

  import { fade } from 'svelte/transition';
  import IntersectionObserver from "svelte-intersection-observer";

  /**
   * @type {HTMLDivElement}
   */
  let node;
  /**
   * @type {HTMLDivElement}
   */
  let experienceNode;
  /**
   * @type {HTMLDivElement}
   */
  let contactNode;
  let contactSection = false;
  let hasAnimated = false;
  let hasAnimatedContacts = false;
   /**
   * @param {{ preventDefault: () => void; currentTarget: { getAttribute: (arg0: string) => any; }; }} event
   */
  function scrollToSection(event) {
    event.preventDefault();
    contactSection = true;
    hasAnimated = true;
    hasAnimatedContacts = true;
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      
    }, 200);
  }

</script>
<main class="max-h-screen dark:bg-gray-900">
  <!-- Hero Section -->
  <section id="hero" class="mb-32">
    <div class="max-w-7xl mx-auto flex py-8 pt-24 justify-between gap-15 items-center">
    <div class="flex flex-col items-start">
      <h1 class="text-4xl font-bold py-8 mt-10 text-gray-900 dark:text-gray-300">Always have a Plan Z</h1>
      <h2 class="mt-8 text-xl text-gray-500 dark:text-gray-400">
        Have a dream to pursue is the most fulfilling aspect of life I can imagine. 
        Hurdles with arise. 
        Challenges will be faced.
        Backup plans will be made.
        Nonetheless, I will continue to strive to solve problems and achieve my goals in my own way by being a
        <strong> Software Engineer.</strong>
      </h2>
      <p class="mt-6 text-base text-gray-500 dark:text-gray-400">
        If you share the same passion for problem-solving, innovation, and outlook.
      </p>
      <button on:click={scrollToSection} aria-label="Let us Connect" class="mt-6 px-6 py-3 bg-white-600 dark:border-indigo-800 text-black dark:hover:border-black dark:text-gray-100 border font-semibold rounded-xl hover:text-white hover:bg-indigo-800 transition duration-300 shadow-2xl shadow-indigo-500/30">
        Let's Connect
      </button>
    </div>
    <img src="/jiajason.png" alt="JiaJason's Pic" class="md:inline hidden right-0 rounded-full max-h-115 shadow-2xl dark:opacity-75 shadow-indigo-500/30">
     </div>
  </section>
  <section id="roles" class="mb-32">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Roles</h2>
      <p class="mt-6 mb-12 text-m text-gray-500 dark:text-gray-300">
        If you want to learn more about my roles and experiences, I have created a personal handbook about all the lessons I have learned throughout the years.
        They are contained in this up-to-date blog named
        <a target="_blank" class="text-indigo-800" href="/blog/jshandbook">
          JSHandBook.
        </a>
      </p>
      <div >
        <IntersectionObserver once element={node}>
          <div bind:this={node} class="space-y-16">
              <div in:fade={{duration:500, delay:800}} class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-2xl shadow-indigo-500/30">
                <div class="flex items-center dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                <p class="text-xl ml-1 text-gray-700 dark:text-white">Solo Entrepreneur</p>
                </div>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  From idea to launch — I handle product, code, and growth as a one-person startup. I have various problems I want to tackle, but not enough time.
                </p>
              </div>
              <div in:fade={{duration:500, delay:1000}} class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-2xl shadow-indigo-500/30">
                <div class="flex items-center dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                  </svg>
                  <p class="text-xl ml-1 text-gray-700 dark:text-white">Frontend Developer</p>
                </div>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Responsive, accessible, and polished UIs built with modern frameworks like React, Tailwind CSS, and more. 
                </p>
              </div>
              <div in:fade={{duration:500, delay:1200}} class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-2xl shadow-indigo-500/30">
              <div class="flex items-center dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
              </svg>
              <p class="text-xl ml-1 text-gray-700 dark:text-white">Backend & Infrastructure Developer</p>
              </div>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Scalable APIs, databases, and core logic using Node.js, Express, and PostgreSQL.
              </p>
            </div>
          </div>
        </IntersectionObserver> 
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="mb-20">
  <IntersectionObserver element={experienceNode} let:intersecting>
        <div bind:this={experienceNode} class="space-y-8 block">
          {#if intersecting || hasAnimated }
              <div in:fade={{duration: 500, delay:400}} class="max-w-7xl mx-auto"  on:introend={() => hasAnimated = true}>      
                <h2 class="text-3xl font-bold mb-8 text-start text-gray-900 dark:text-white">Experiences</h2>
                <div class="space-y-8 group bg-white dark:bg-gray-700 p-6 rounded-lg shadow-2xl shadow-indigo-500/50">
                  <!-- Experience items will go here -->
                   <!-- TODO: add New Sparklayer Experience -->
                   <!-- TODO: add Germany Experience -->
                  <div class="px-2 py-4">
                    <span class="flex items-center justify-between">
                      <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">SparkLayer B2B</h3>
                      <h3 class="text-l italic mb-2 text-gray-900 dark:text-white"> July 2023 - July 2024</h3>
                    </span>
                    <p class="text-gray-600 dark:text-gray-300">Software Developer Placement Intern</p>
                    <ul class="list-disc list-inside space-y-4 mt-4 text-gray-600 dark:text-gray-300">
                      <!-- could make it into bullet points to discussing my role and achievements -->
                      <li>Developed and maintained full-stack features for the SparkLayer B2B platform using modern web technologies.</li>
                      <li>Created a custom Redis Queue that processes millions of data daily.</li>
                      <li>Collaborated with cross-functional teams to deliver scalable and efficient solutions.</li>
                      <li>Implemented RESTful APIs and integrated third-party services to enhance product capabilities.</li>
                      <li>Improved code quality and performance through code reviews and refactoring.</li>
                      <li>Contributed to UI/UX improvements, ensuring a seamless user experience.</li>
                    </ul>
                  </div>
                  <!-- Add more experience items as needed -->
                </div>
              </div>
              {/if}
            </div>
          </IntersectionObserver>
        </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 pb-50 px-4">
   <IntersectionObserver element={contactNode} let:intersecting>
        <div bind:this={contactNode} class="space-y-8">
          {#if intersecting || hasAnimatedContacts }
              <div in:fade={{duration:500, delay:400}} class="max-w-4xl mx-auto text-center" on:introend={() => hasAnimatedContacts = true}>
                <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Get in Touch</h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">I'm always open to new opportunities and collaborations.</p>
                <div class="flex justify-center space-x-6 {contactSection ? 'animate-bounce' : ''} ">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jial7150@gmail.com" target="_blank" class="flex items-center gap-1 text-lg text-gray-600 dark:text-gray-300 hover:text-indigo-800" aria-label="Send me an email">
                    <svg class="w-6 h-6"  fill="currentColor" viewBox="0 0 50 50">
                      <path d="M 43.753906 6.4023438 C 42.53621 6.3489969 41.294792 6.712898 40.271484 7.46875 L 37.525391 9.4960938 L 25 18.755859 L 12.591797 9.5839844 A 1.0001 1.0001 0 0 0 11.949219 9.3007812 L 12.199219 9.3007812 L 9.734375 7.4765625 C 8.7104042 6.7188363 7.4671493 6.3528895 6.2480469 6.40625 C 5.0289444 6.4596105 3.8349462 6.9314667 2.9082031 7.8457031 C 1.7309454 9.0063798 1 10.629831 1 12.410156 L 1 15.84375 A 1.0001 1.0001 0 0 0 1 16.138672 L 1 39.5 C 1 41.421188 2.5788117 43 4.5 43 L 12 43 A 1.0001 1.0001 0 0 0 13 42 L 13 25.373047 L 24.40625 33.804688 A 1.0001 1.0001 0 0 0 25.59375 33.804688 L 37 25.373047 L 37 42 A 1.0001 1.0001 0 0 0 38 43 L 45.5 43 C 47.421188 43 49 41.421188 49 39.5 L 49 16.119141 A 1.0001 1.0001 0 0 0 49 15.859375 L 49 12.410156 C 49 10.6517 48.290455 9.0357821 47.128906 7.8730469 C 47.095336 7.8394769 47.084086 7.83018 47.097656 7.84375 A 1.0001 1.0001 0 0 0 47.091797 7.8378906 C 46.165242 6.9256756 44.971603 6.4556905 43.753906 6.4023438 z M 43.644531 8.4003906 C 44.400835 8.4300436 45.134049 8.7168876 45.689453 9.2636719 C 45.708363 9.2823439 45.722171 9.2964424 45.712891 9.2871094 C 46.50934 10.084374 47 11.188613 47 12.410156 L 47 15.496094 L 39 21.408203 L 39 11 A 1.0001 1.0001 0 0 0 38.996094 10.898438 L 41.458984 9.078125 A 1.0001 1.0001 0 0 0 41.460938 9.078125 C 42.109578 8.598977 42.888228 8.3707375 43.644531 8.4003906 z M 6.3574219 8.40625 C 7.1145694 8.37661 7.8958927 8.6037105 8.5449219 9.0839844 L 11.003906 10.902344 A 1.0001 1.0001 0 0 0 11 11 L 11 21.408203 L 3 15.496094 L 3 12.410156 C 3 11.174482 3.5017577 10.068855 4.3125 9.2695312 C 4.8677569 8.7217677 5.6002743 8.4358895 6.3574219 8.40625 z M 37 12.371094 L 37 22.886719 L 25 31.755859 L 13 22.886719 L 13 12.373047 L 24.40625 20.804688 A 1.0001 1.0001 0 0 0 25.59375 20.804688 L 37 12.371094 z M 3 17.982422 L 11 23.896484 L 11 41 L 4.5 41 C 3.6591883 41 3 40.340812 3 39.5 L 3 17.982422 z M 47 17.982422 L 47 39.5 C 47 40.340812 46.340812 41 45.5 41 L 39 41 L 39 23.896484 L 47 17.982422 z"></path>
                    </svg>
                    Email
                  </a>
                  <a href="https://github.com/JiaJasonLiu" target="_blank" class="flex items-center gap-1 text-lg text-gray-600 dark:text-gray-300 hover:text-indigo-800 {contactSection ? 'animate-bounce' : ''}" aria-label="Visit my GitHub profile">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/jia-sheng-liu-9a8a23224/" target="_blank" class="flex items-center gap-1 text-lg text-gray-600 dark:text-gray-300 hover:text-indigo-800" aria-label="Visit my LinkedIn profile">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 30 30">
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              {/if}
            </div>
          </IntersectionObserver>
        </section>
</main>
