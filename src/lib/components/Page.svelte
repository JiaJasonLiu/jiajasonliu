<script lang="ts">
import type { Snippet } from "svelte";
let {
	title,
	description,
	children,
}: {
	title: string;
	description: string;
	children: Snippet;
} = $props();
</script>

<div class="container max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold mb-3">{title}</h1>
    <h2 class="text-xl font-light mb-8">{description}</h2>
    {@render children()}
</div> 