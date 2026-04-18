<script>
import Card from "$lib/components/Card.svelte";

const intros = [
	{
		title: "Identity",
		value: "Jia Sheng Liu",
	},
	{
		title: "Position",
		value: "Software Engineer, Sparklayer B2B",
	},
	{
		title: "Location",
		value: "Bath, United Kingdom",
	},
];
</script>
<main>
  <!-- Hero Section -->
  <section id="hero" class="border border-purple-100 py-52">
    <div class="max-w-7xl mx-auto flex flex-col justify-between items-center">
      <h1 class="text-6xl text-center font-lora text-primary dark:text-gray-300 italic">
        Step into <br/> <span class="font-bold not-italic">Dream Amethyst</span>
      </h1>
      <h2 class="mt-6 w-3/4 text-xl text-center text-secondary dark:text-gray-400">
        a space for ideas, dreams, and unexpected adventures. Step in, explore, and see where it takes you.
      </h2>
    </div>
  </section>
  <div class="grid grid-cols-1 sm:grid-cols-3 sm:-translate-y-15 gap-x-12">
    <div></div>
    <div class="px-10 text-center border border-purple-100 bg-white items-center py-8 rounded-lg shadow-2xl shadow-indigo-500/30">
        <h2 class="font-montserrat mb-4 text-xl text-primary tracking-[0.5rem] uppercase">
          CREATOR
        </h2>
        {#each intros as intro}
          <div class="gap-2">
            <div class="border-t py-2 border-purple-200">
              <h3 class="text-[#947ba8] uppercase font-montserrat">
                {intro.title}
              </h3>
              <span class="text-sm font-lora font-semibold text-gray-800">
                {intro.value}
            </span>
            </div>
          </div>
        {/each}
    </div>
    </div>
  <section id="welcome" class="w-full grid grid-cols-1 sm:grid-cols-3 gap-x-12 sm:mb-10 sm:-translate-y-13">
      <div class="flex flex-col gap-6 sm:-translate-y-35">
        <Card title="JSHandBook">
          <p>
            Everything I wish someone had told me earlier — documented, so I don't forget again.
          </p>
        </Card>
        <Card title="Highway RL">
          <p>
            Taught reinforcement learning agents to navigate traffic. Spoiler: they learned faster than some drivers.
          </p>
        </Card>
      </div>
      <div class="flex flex-col gap-6 sm:translate-y-4">
        <Card title="This Site">
          <p>
            A personal corner of the internet — built with SvelteKit, Tailwind, and stubbornness.
          </p>
        </Card>
        <Card title="Soccer">
          <p>
            Playing the beautiful game whenever I can. The pitch is where I switch off.
          </p>
        </Card>
      </div>
      <div class="flex flex-col gap-6 sm:-translate-y-20">
        <Card title="Master the Highway Environment">
          <p>
            Reinforcement Learning Agents try to traverse a Highway Environment. Can it/they do it?
          </p>
        </Card>
        <Card title="Currently Reading">
          <p>
            Who Moved My Cheese — "The quicker you let go of old cheese, the sooner you find new cheese."
          </p>
        </Card>
      </div>
  </section>
  <!-- Experience Section -->
  <section id="experience">      
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
    </div>
  </section>
</main>

