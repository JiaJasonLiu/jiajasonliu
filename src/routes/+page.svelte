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

<main class="min-h-screen bg-white dark:bg-gray-900 ">
  <!-- Hero Section -->
  <section class="h-screen flex items-center justify-center px-4">
    <div class="text-center">
      <h1 class="text-5xl font-bold mb-4 text-primary-200 dark:text-white">JiaJason</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">Software Engineer</p>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Experience</h2>
      <div class="space-y-8">
        <!-- Experience items will go here -->
        <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">SparkLayer B2B</h3>
            <h3 class="text-l italic mb-2 text-gray-900 dark:text-white"> July 2023 - July 2024</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-300">Software Developer Placement Intern</p>
          <ul class="list-disc list-inside space-y-2 mt-4 text-gray-600 dark:text-gray-300">
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
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 px-4 bg-white-50 dark:bg-gray-800">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Get in Touch</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8">I'm always open to new opportunities and collaborations.</p>
      <div class="flex justify-center space-x-6">
        
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jial7150@gmail.com" target="_blank"
         class="text-gray-600 dark:text-gray-300 hover:text-purple-800" aria-label="Send me an email">
          Email
        </a>
        <a href="https://github.com/JiaJasonLiu" class="text-gray-600 dark:text-gray-300 hover:text-purple-800" aria-label="Visit my GitHub profile">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jia-sheng-liu-9a8a23224/" class="text-gray-600 dark:text-gray-300 hover:text-purple-800" aria-label="Visit my LinkedIn profile">
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  /* Add any component-specific styles here */
</style>
