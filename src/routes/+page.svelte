<script>
import Card from "$lib/components/Card.svelte";

const intros = [
	{
		title: "Identity",
		value: "Jia Sheng Liu",
	},
	{
		title: "Role",
		value: "Software Engineer",
	},
	{
		title: "Location",
		value: "Bath, UK",
	},
];
</script>
<main>
  <!-- Hero Section -->
  <section id="hero" class="border border-primary rounded-lg py-52">
    <div class="max-w-7xl mx-auto flex flex-col justify-between items-center">
      <h1 class="text-7xl text-center font-lora text-primary dark:text-gray-300 italic">
        Step into <span class="font-bold not-italic">Dream Amethyst</span>
      </h1>
      <h2 class="mt-6 w-3/4 text-xl text-center text-accent dark:text-gray-400">
        a space for ideas, dreams, and unexpected adventures. Step in, explore, and see where it takes you.
      </h2>
    </div>
  </section>
  <section id="welcome" class="grid lg:grid-cols-3 gap-12 mt-6 lg:mt-0">
  <!-- Left Column -->
    <div class="flex flex-col gap-6 lg:translate-y-20">
      <Card title="JSHandBook" description="Everything I wish someone had told me earlier — documented, so I don't forget again."/>
      <Card title="Highway RL" description="Taught reinforcement learning agents to navigate traffic. Spoiler: they learned faster than some drivers."/>
    </div>
    <!-- Middle with Personal Details Card -->
      <div class="lg:-translate-y-27 px-6 text-left bg-white items-center py-8 rounded-lg border border-primary max-h-fit">
        <h2 class="text-center font-montserrat text-4xl text-primary py-4 font-bold tracking-[0.5rem] uppercase">
          INTRO
        </h2>
        <div class="flex flex-col gap-5">
          {#each intros as intro}
          <div class="flex flex-col border-t space-y-2 border-primary">
            <h3 class="mt-4 text-md text-muted tracking-wider uppercase font-bold font-lora whitespace-nowrap">
              {intro.title}
            </h3>
            <span class="text-xl font-lora font-bold tracking-wide text-primary">
              {intro.value}
            </span>
          </div>
          {/each}
          <span class="border-t border-primary pt-8 text-xl font-lora font-bold tracking-wide text-accent text-center">
            This is my personal corner of the internet — built with SvelteKit, Tailwind, and stubbornness.
          </span>
        </div>
      </div>
    <!-- Right Column -->
    <div class="flex flex-col gap-6 lg:translate-y-10">
        <Card title="Master the Highway Environment" description={"Reinforcement Learning Agents try to traverse a Highway Environment. Can it/they do it?"}/>
        <Card title="Currently Reading" description={'Who Moved My Cheese — "The quicker you let go of old cheese, the sooner you find new cheese."'}/>
        <Card title="Soccer" description="Playing the beautiful game whenever I can. The pitch is where I switch off."/>
      </div>
    </section>
</main>

<!-- TODO: add the experience else where and add New Sparklayer and German w/ ML 
<section id="experience">
  <h2 class="text-3xl font-bold mb-8 text-start text-gray-900 dark:text-white">Experiences</h2>
    <div class="space-y-8 group bg-white dark:bg-gray-700 p-3 rounded-lg border border-indigo-800/50">
      <div class="px-2 py-4">
        <span class="flex items-center justify-between">
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">SparkLayer B2B</h3>
          <h3 class="text-l italic mb-2 text-gray-900 dark:text-white"> July 2023 - July 2024</h3>
        </span>
        <p class="text-gray-600 dark:text-gray-300">Software Developer Placement Intern</p>
        <ul class="list-disc list-inside space-y-4 mt-4 text-gray-600 dark:text-gray-300">
          <li>Developed and maintained full-stack features for the SparkLayer B2B platform using modern web technologies.</li>
          <li>Created a custom Redis Queue that processes millions of data daily.</li>
          <li>Collaborated with cross-functional teams to deliver scalable and efficient solutions.</li>
          <li>Implemented RESTful APIs and integrated third-party services to enhance product capabilities.</li>
          <li>Improved code quality and performance through code reviews and refactoring.</li>
          <li>Contributed to UI/UX improvements, ensuring a seamless user experience.</li>
        </ul>
      </div>
  </div>
</section> -->

