<script lang="ts">
import type { Snippet } from "svelte";

let { title, children }: { title: string; children: Snippet } = $props();
</script>

<div
  class="px-8 py-6 border text-left bg-white border-gray-100 rounded-lg shadow-xl shadow-indigo-100/50"
>
   <h2 class="font-lora mb-4 text-lg text-primary tracking-sm captialize">
     {title}
   </h2>
  <p>
  {@render children()}
  </p>
</div>
