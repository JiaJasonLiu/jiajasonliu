<script lang="ts">
import type { Snippet } from "svelte";
let { title, description, children }: { title?: string; description?: string; children?: Snippet } = $props();
</script>

<div
  class="px-4 py-4 border text-left bg-white rounded-lg border-indigo-800/50 hover:bg-indigo-100/30 cursor-pointer"
>
  <!-- Add icon -->
   <!-- Add type -->
    <!-- Add -->
    {#if title}
      <h2 class="font-lora mb-2 text-2xl text-gray-800 font-semibold tracking-sm captialize">
        {title}
      </h2>
    {/if}
    {#if description}
    <p class="text-secondary text-lg">
      {description}
    </p>
    {/if}
  <p>
    {@render children?.()}
  </p>
</div>
