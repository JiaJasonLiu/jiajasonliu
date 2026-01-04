<script lang="ts">
  export let title: string;
</script>

<div
  class="px-8 py-6 border text-center bg-white border-purple-100  rounded-lg shadow-2xl/50 shadow-indigo-500/50"
>
  <h2 class="font-montserrat mb-4 text-lg text-primary tracking-[0.25rem] uppercase">
    {title}
  </h2>
  <p>
    <slot />
  </p>
</div>
