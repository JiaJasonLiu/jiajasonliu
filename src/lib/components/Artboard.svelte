<script lang="ts">
import type { Snippet } from "svelte";
import { parallax } from "$lib/actions/parallax";
import Blob from "$lib/components/Blob.svelte";
import { type Theme, themes } from "$lib/theme";

let {
	variant = "amethyst",
	children,
}: {
	/** Colour theme — drives the aurora blob colours (see $lib/theme). */
	variant?: Theme;
	children: Snippet;
} = $props();

const t = $derived(themes[variant]);
</script>

<div use:parallax class="artboard">
	<!-- Aurora blobs; colours come from the selected theme variant -->
	<Blob color={t.blob} depth={1} top="-60px" left="12%" size={420} blur={26} opacity={0.42} fade={68} drift={1} duration={17} />
	<Blob color={t.blobAlt} depth={1.6} top="20px" right="14%" size={380} blur={24} opacity={0.4} fade={66} drift={2} duration={21} />
	<Blob color={t.blob} depth={2.2} top="520px" left="calc(50% - 320px)" width={640} height={460} blur={34} opacity={0.24} fade={66} drift={1} duration={26} />

	<div class="artboard__content">
		{@render children()}
	</div>
</div>

<style>
	.artboard {
		position: relative;
		overflow: hidden;
	}
	.artboard__content {
		position: relative;
		z-index: 1;
		/* Room for card drop-shadows so overflow:hidden (which clips the
		   blobs) doesn't crop them. */
		padding: 0 8px 48px;
	}
</style>
