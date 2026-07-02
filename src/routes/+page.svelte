<script>
import Card from "$lib/components/Card.svelte";

const introRows = [
	{ label: "Identity", value: "Jia Sheng Liu" },
	{ label: "Role", value: "Software Engineer" },
	{ label: "Location", value: "Bath, UK" },
];

// Cursor parallax over the hero artboard. Each [data-depth] wrapper is
// translated by mouseOffset * depth * 26px; the inner blob keeps its own
// drift animation, so the two transforms compose instead of fighting.
/** @param {HTMLElement} node */
function parallax(node) {
	const reduce =
		typeof window !== "undefined" &&
		window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
	if (reduce) return;

	/** @param {MouseEvent} e */
	const move = (e) => {
		const r = node.getBoundingClientRect();
		const mx = (e.clientX - r.left) / r.width - 0.5;
		const my = (e.clientY - r.top) / r.height - 0.5;
		const layers = /** @type {NodeListOf<HTMLElement>} */ (
			node.querySelectorAll("[data-depth]")
		);
		for (const el of layers) {
			const d = Number.parseFloat(el.dataset.depth ?? "1") || 1;
			el.style.transform = `translate(${mx * d * 26}px, ${my * d * 26}px)`;
		}
	};
	const leave = () => {
		const layers = /** @type {NodeListOf<HTMLElement>} */ (
			node.querySelectorAll("[data-depth]")
		);
		for (const el of layers) {
			el.style.transform = "translate(0, 0)";
		}
	};

	node.addEventListener("mousemove", move);
	node.addEventListener("mouseleave", leave);
	return {
		destroy() {
			node.removeEventListener("mousemove", move);
			node.removeEventListener("mouseleave", leave);
		},
	};
}
</script>

<div>
<div
  use:parallax
  style="position:relative;overflow:hidden;width:100%;margin:0 auto;background:linear-gradient(180deg,#faf8fd 0%,#f1eaf9 34%,#f7f3fc 52%,#ffffff 68%);"
>
  <!-- Aurora blobs: outer wrapper = parallax target, inner = drifting light -->
  <div data-depth="1" style="position:absolute;top:-40px;left:18%;width:400px;height:400px;pointer-events:none;">
    <div style="width:100%;height:100%;border-radius:50%;filter:blur(22px);background:radial-gradient(circle,rgba(158,120,214,.5),transparent 68%);animation:auroraDrift 15s ease-in-out infinite;"></div>
  </div>
  <div data-depth="1.6" style="position:absolute;top:30px;right:18%;width:400px;height:400px;pointer-events:none;">
    <div style="width:100%;height:100%;border-radius:50%;filter:blur(24px);background:radial-gradient(circle,rgba(196,164,232,.48),transparent 66%);animation:auroraDrift2 19s ease-in-out infinite;"></div>
  </div>
  <div data-depth="2.2" style="position:absolute;top:480px;left:calc(50% - 320px);width:640px;height:460px;pointer-events:none;">
    <div style="width:100%;height:100%;border-radius:50%;filter:blur(34px);background:radial-gradient(circle,rgba(158,120,214,.28),transparent 66%);animation:auroraDrift 24s ease-in-out infinite;"></div>
  </div>

  <div data-depth="2.2" style="position:absolute;top:480px;left:calc(20% - 320px);width:640px;height:460px;pointer-events:none;">
    <div style="width:100%;height:100%;border-radius:50%;filter:blur(34px);background:radial-gradient(circle,rgba(158,120,214,.28),transparent 66%);animation:auroraDrift 24s ease-in-out infinite;"></div>
  </div>
  <div>
    <!-- Hero -->
    <div style="max-width:760px;margin:0 auto;text-align:center;padding:220px 40px 0;">
      <div class="rise" style="font-family:var(--font-mono);font-size:12px;letter-spacing:.34em;text-transform:uppercase;color:#7A5FA8;margin-bottom:24px;">
        Jason Liu · Software Engineer · Bath, UK
      </div>
      <h1 class="rise hero-title" style="font-family:var(--font-lora);font-style:italic;line-height:1.02;color:#4E3880;margin:0;letter-spacing:-1px;animation-delay:.16s;">
        Step into<br />
        <span class="sheen" style="font-weight:700;font-style:normal;">Dream Amethyst</span>
      </h1>
      <p class="rise" style="font-size:19px;line-height:1.6;color:#8E7AAA;max-width:500px;margin:26px auto 0;animation-delay:.32s;">
        A space for ideas, dreams, and unexpected adventures. Step in, explore, and see where it takes you.
      </p>
      <div class="rise" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:34px;animation-delay:.48s;">
        <a class="pill pill--filled" href="/project">View Projects</a>
        <a class="pill pill--outline" href="/writing">Read Writing</a>
      </div>
    </div>

    <!-- Transition: thin line → eyebrow that bridges hero into the grid -->
    <div style="display:flex;flex-direction:column;align-items:center;gap:14px;margin-top:52px;">
      <span style="width:1px;height:46px;background:linear-gradient(180deg,transparent,rgba(122,95,168,.5));"></span>
      <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:rgba(122,95,168,.6);">
        Wandering the corners
      </span>
    </div>

    <!-- Card grid -->
    <div style="padding:30px 44px 46px;">
      <div class="grid-a">
        <Card kicker="Writing" title="JSHandBook" href="/writing" description="Everything I wish someone had told me earlier — documented, so I don't forget again." />

        <!-- Intro panel: purple gradient, spans two rows, anchors the middle -->
        <div class="intro" style="position:relative;overflow:hidden;border-radius:18px;padding:26px 24px;background:linear-gradient(165deg,#7A5FA8,#4E3880);box-shadow:0 26px 50px -18px rgba(78,56,128,.55);display:flex;flex-direction:column;justify-content:center;">
          <h2 style="text-align:center;font-family:var(--font-montserrat);font-size:26px;font-weight:700;color:#fff;letter-spacing:.4rem;text-transform:uppercase;margin:0 0 22px;">
            Intro
          </h2>
          <div style="display:flex;flex-direction:column;gap:15px;">
            {#each introRows as row}
              <div style="border-top:1px solid rgba(255,255,255,.25);padding-top:11px;">
                <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.6);">{row.label}</div>
                <div style="font-family:var(--font-lora);font-size:19px;font-weight:700;color:#fff;margin-top:3px;">{row.value}</div>
              </div>
            {/each}
            <div style="border-top:1px solid rgba(255,255,255,.25);padding-top:13px;font-family:var(--font-lora);font-style:italic;font-size:15px;line-height:1.5;color:rgba(255,255,255,.85);text-align:center;">
              Built with SvelteKit, Tailwind, and stubbornness.
            </div>
          </div>
        </div>

        <Card kicker="Project" title="Highway RL" href="/project" description="Taught RL agents to navigate traffic. They learned faster than some drivers." />
        <Card kicker="Engineering" title="AI Agents · Aura" description="A personal AI agent on OpenClaw, in Docker, controlled from Telegram." />
        <Card kicker="Experience" title="SparkLayer B2B" description="Placement intern — built a Redis queue processing millions of records daily." />
      </div>

      <div class="grid-b">
        <Card kicker="Reading" title="Currently Reading" description="Who Moved My Cheese — let go of old cheese sooner, find new cheese sooner." />
        <Card kicker="Reflection" title="The Foundation Is the Tool" href="/writing" description="A Vue compiler error, and the truth about why tools become what they are." />
        <Card kicker="Life" title="Soccer" description="Playing the beautiful game whenever I can. The pitch is where I switch off." />
      </div>
    </div>
  </div>
</div>
</div>

<style>
  .sheen {
    background: linear-gradient(100deg, #7a5fa8, #b18bd6, #7a5fa8);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: sheen 6s linear infinite;
  }

  .hero-title {
    font-size: clamp(44px, 8vw, 80px);
  }

  /* Hero pills */
  .pill {
    font-family: var(--font-mono);
    font-size: 14px;
    padding: 13px 26px;
    border-radius: 999px;
    cursor: pointer;
    text-decoration: none;
    transition:
      background 0.3s,
      color 0.3s;
  }
  .pill--filled {
    color: #fff;
    background: #7a5fa8;
    box-shadow: 0 12px 26px -10px rgba(122, 95, 168, 0.7);
  }
  .pill--filled:hover {
    background: #4e3880;
  }
  .pill--outline {
    color: #7a5fa8;
    border: 1px solid rgba(122, 95, 168, 0.45);
  }
  .pill--outline:hover {
    background: rgba(122, 95, 168, 0.08);
  }

  /* Symmetric grid — Intro panel spans two rows on the middle column */
  .grid-a,
  .grid-b {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    align-items: stretch;
  }
  .grid-b {
    margin-top: 24px;
  }
  .intro {
    grid-row: span 2;
  }

  @media (max-width: 900px) {
    .grid-a,
    .grid-b {
      grid-template-columns: 1fr 1fr;
    }
    /* Intro drops its two-row span and becomes a full-width tile */
    .intro {
      grid-row: auto;
      grid-column: span 2;
    }
  }
  @media (max-width: 620px) {
    .grid-a,
    .grid-b {
      grid-template-columns: 1fr;
    }
    .intro {
      grid-column: auto;
    }
  }
</style>
