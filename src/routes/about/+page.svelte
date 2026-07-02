<script lang="ts">
import Artboard from "$lib/components/Artboard.svelte";
import { themes } from "$lib/theme";

const t = themes.green;
const emailHref =
	"https://mail.google.com/mail/?view=cm&fs=1&to=jial7150@gmail.com";
</script>

<Artboard variant="green">
	<section class="about">
		<div class="about__text">
			<p class="rise about-kicker" style="color:{t.kicker};">A little about me</p>
			<h1 class="rise about-title" style="animation-delay:.12s;">
				Always have a <span class="about-em" style="color:{t.em};">Plan Z</span>
			</h1>
			<div class="rise about-body" style="animation-delay:.24s;">
				<p>
					Having a dream to pursue is the most fulfilling aspect of life I can
					imagine. Hurdles will arise. Challenges will be faced. Backup plans
					will be made.
				</p>
				<p>
					Nonetheless, I'll keep striving to solve problems and reach my goals
					my own way — as a <strong style="color:{t.em};">Software Engineer</strong>.
				</p>
			</div>
			<p class="rise about-tagline" style="animation-delay:.32s;color:{t.kicker};">
				If you share the same passion for problem-solving, innovation, and
				outlook — let's talk.
			</p>
			<div class="rise about-actions" style="animation-delay:.4s;">
				<a class="btn btn--filled" style="background:{t.em};" href={emailHref} target="_blank" rel="noopener noreferrer">Get in touch</a>
				<a class="btn btn--outline" style="color:{t.em};border-color:{t.em};" href="https://github.com/JiaJasonLiu" target="_blank" rel="noopener noreferrer">GitHub</a>
			</div>
		</div>

		<img class="rise about-photo" src="/jiajason.png" alt="Jason Liu" style="animation-delay:.24s;" />
	</section>
</Artboard>

<style>
	.about {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 64px;
		max-width: 1100px;
		margin: 0 auto;
		padding: clamp(80px, 12vh, 150px) 8px 60px;
	}
	.about__text {
		flex: 1 1 0;
		min-width: 0;
	}
	.about-kicker {
		margin: 0 0 20px;
		font-family: var(--font-mono);
		font-size: 12px;
		letter-spacing: 0.34em;
		text-transform: uppercase;
	}
	.about-title {
		margin: 0;
		font-family: var(--font-lora);
		font-size: clamp(40px, 6.5vw, 68px);
		font-weight: 600;
		line-height: 1.05;
		letter-spacing: -1px;
		color: #33294a;
	}
	.about-em {
		font-style: italic;
	}
	.about-body {
		margin-top: 28px;
		display: flex;
		flex-direction: column;
		gap: 18px;
		font-family: var(--font-lora);
		font-size: 19px;
		line-height: 1.6;
		color: #6b6577;
	}
	.about-body :global(strong) {
		font-weight: 700;
	}
	.about-tagline {
		margin: 26px 0 0;
		font-family: var(--font-lora);
		font-style: italic;
		font-size: 16px;
		line-height: 1.55;
		max-width: 520px;
		opacity: 0.85;
	}
	.about-actions {
		display: flex;
		gap: 14px;
		flex-wrap: wrap;
		margin-top: 34px;
	}
	.btn {
		font-family: var(--font-mono);
		font-size: 14px;
		padding: 13px 26px;
		border-radius: 999px;
		text-decoration: none;
		transition:
			filter 0.3s,
			background 0.3s,
			color 0.3s;
	}
	.btn--filled {
		color: #fff;
		box-shadow: 0 12px 26px -10px rgba(47, 158, 107, 0.6);
	}
	.btn--filled:hover {
		filter: brightness(0.92);
	}
	.btn--outline {
		border: 1px solid;
		background: transparent;
	}
	.btn--outline:hover {
		background: rgba(47, 158, 107, 0.08);
	}
	.about-photo {
		flex: 0 0 auto;
		width: clamp(240px, 34vw, 360px);
		aspect-ratio: 1;
		border-radius: 50%;
		object-fit: cover;
		box-shadow: 0 30px 60px -20px rgba(47, 158, 107, 0.45);
	}

	@media (max-width: 820px) {
		.about {
			flex-direction: column-reverse;
			align-items: flex-start;
			gap: 36px;
		}
		.about-photo {
			width: clamp(200px, 60vw, 300px);
		}
	}
</style>
