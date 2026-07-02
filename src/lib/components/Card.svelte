<script lang="ts">
let {
	kicker = "",
	title,
	description,
	href,
	tone = "light",
}: {
	kicker?: string;
	title?: string;
	description?: string;
	href?: string;
	tone?: "light";
} = $props();

let hovered = $state(false);
</script>

<svelte:element
  this={href ? "a" : "article"}
  {href}
  role={href ? "link" : "article"}
  data-tone={tone}
  class="card"
  class:is-hover={hovered}
  onmouseenter={() => (hovered = true)}
  onmouseleave={() => (hovered = false)}
  onfocus={() => (hovered = true)}
  onblur={() => (hovered = false)}
>
  <span class="card__glow" aria-hidden="true"></span>

  {#if kicker}
    <span class="card__kicker">{kicker}</span>
  {/if}
  {#if title}
    <h3 class="card__title">{title}</h3>
  {/if}
  {#if description}
    <p class="card__desc">{description}</p>
  {/if}

  <span class="card__cue" aria-hidden="true">
    <span class="card__cue-line"></span>
    <span class="card__cue-text">explore</span>
  </span>
</svelte:element>

<style>
  .card {
    position: relative;
    display: block;
    overflow: hidden;
    height: 100%;
    padding: 24px 26px;
    border-radius: 18px;
    background: #ffffff;
    border: 1px solid rgba(122, 95, 168, 0.2);
    box-shadow: 0 1px 3px rgba(78, 56, 128, 0.05);
    cursor: pointer;
    text-decoration: none;
    transition:
      transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
      box-shadow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
      border-color 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
      background 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .card.is-hover {
    transform: translateY(-6px);
    background: linear-gradient(160deg, #ffffff, #f7f4fb);
    border-color: rgba(122, 95, 168, 0.55);
    box-shadow: 0 24px 46px -16px rgba(122, 95, 168, 0.42);
  }

  .card__glow {
    position: absolute;
    top: -45%;
    right: -25%;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(142, 122, 170, 0.32), transparent 70%);
    opacity: 0;
    transition: opacity 0.55s;
    pointer-events: none;
  }
  .card.is-hover .card__glow {
    opacity: 1;
  }

  .card__kicker {
    position: relative;
    display: block;
    margin-bottom: 10px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(122, 95, 168, 0.5);
    transition: color 0.4s;
  }
  .card.is-hover .card__kicker {
    color: #7a5fa8;
  }

  .card__title {
    position: relative;
    margin: 0 0 8px;
    font-family: var(--font-lora);
    font-size: 22px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.2px;
    color: #8e7aaa;
    transition: color 0.4s;
  }
  .card.is-hover .card__title {
    color: #7a5fa8;
  }

  .card__desc {
    position: relative;
    margin: 0;
    font-size: 15.5px;
    line-height: 1.6;
    color: #b0a7bd;
    transition: color 0.4s;
  }
  .card.is-hover .card__desc {
    color: #6b6577;
  }

  .card__cue {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    opacity: 0;
    transform: translateY(6px);
    transition:
      opacity 0.45s,
      transform 0.45s;
  }
  .card.is-hover .card__cue {
    opacity: 1;
    transform: translateY(0);
  }
  .card__cue-line {
    width: 10px;
    height: 1px;
    background: #7a5fa8;
    transition: width 0.45s;
  }
  .card.is-hover .card__cue-line {
    width: 26px;
  }
  .card__cue-text {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #7a5fa8;
  }

  @media (prefers-reduced-motion: reduce) {
    .card.is-hover {
      transform: none;
    }
  }
</style>
