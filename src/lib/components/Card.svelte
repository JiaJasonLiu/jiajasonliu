<script lang="ts">
import type { Snippet } from "svelte";
let {
	title,
	description,
	children,
}: { title?: string; description?: string; children?: Snippet } = $props();
</script>

<div
  class="px-8 py-6 text-left bg-white rounded-lg border border-primary group group-hover:bg-surface cursor-pointer"
>
  <!-- Add icon -->
   <!-- Add type -->
    <!-- Add -->
    {#if title}
      <h2 class="font-lora mb-2 text-2xl text-accent group-hover:text-primary font-semibold tracking-sm captialize">
        {title}
      </h2>
    {/if}
    {#if description}
    <p class="text-muted group-hover:text-accent text-lg">
      {description}
    </p>
    {/if}
  <p>
    {@render children?.()}
  </p>
</div>
