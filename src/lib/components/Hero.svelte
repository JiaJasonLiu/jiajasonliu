<script lang="ts">
import { type Theme, themes } from "$lib/theme";

let {
	variant = "amethyst",
	kicker,
	lead,
	em,
	subtitle,
	stacked = false,
}: {
	/** Colour theme — drives the kicker and italic-word accents. */
	variant?: Theme;
	/** Mono eyebrow above the title. */
	kicker: string;
	/** Upright leading part of the title, e.g. "Projects &". */
	lead: string;
	/** Italic, accent-coloured word, e.g. "experiments". */
	em: string;
	/** Serif sub-heading below the title. */
	subtitle: string;
	/** Force a line break between lead and em (two-line title). */
	stacked?: boolean;
} = $props();

const t = $derived(themes[variant]);
</script>

<header class="hero">
	<p class="rise hero-kicker" style="color:{t.kicker};">{kicker}</p>
	<h1 class="rise hero-title" style="animation-delay:.12s;">
		{#if stacked}
			{lead}<br /><span class="hero-em" style="color:{t.em};">{em}</span>
		{:else}
			{lead} <span class="hero-em" style="color:{t.em};">{em}</span>
		{/if}
	</h1>
	<p class="rise hero-sub" style="animation-delay:.24s;">{subtitle}</p>
</header>

<style>
	.hero {
		max-width: 760px;
		margin: 0 auto;
		text-align: center;
		padding: clamp(120px, 18vh, 220px) 24px 60px;
	}
	.hero-kicker {
		margin: 0 0 22px;
		font-family: var(--font-mono);
		font-size: 12px;
		letter-spacing: 0.34em;
		text-transform: uppercase;
	}
	.hero-title {
		margin: 0;
		font-family: var(--font-lora);
		font-size: clamp(44px, 8vw, 80px);
		font-weight: 600;
		line-height: 1.04;
		letter-spacing: -1px;
		color: #33294a;
	}
	.hero-em {
		font-style: italic;
	}
	.hero-sub {
		max-width: 560px;
		margin: 24px auto 0;
		font-family: var(--font-lora);
		font-size: 19px;
		line-height: 1.6;
		color: #8e7aaa;
	}
</style>
