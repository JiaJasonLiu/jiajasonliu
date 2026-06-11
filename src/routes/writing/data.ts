import type { BlogPost } from "../../types/blog";

export const posts: BlogPost[] = [
	{
		slug: "welcome",
		title: "Welcome to my first blog post",
		synopsis: "This is blog for my personal website.",
		date: "June 28, 2025",
		content: "",
	},
	{
		slug: "jshandbook",
		title: "JSHandbook 1st Edition",
		synopsis: "Everything I have learned throughout the years.",
		date: "July 03, 2023",
		content: "",
	},
	{
		slug: "openclaw_technical",
		title: "The Technical Architecture of My AI Agents",
		synopsis:
			"An exploration of setting up a personal AI agent (Aura) using OpenClaw in Docker, controlled via Telegram.",
		date: "April 17, 2026",
		content: "",
	},
	{
		slug: "ultimate_goals",
		title: "My Ultimate Life Goal",
		synopsis:
			"A holiday forced me to stop and think — what do I actually want from life? Turns out, the answer was simpler than I expected.",
		date: "May 5, 2026",
		content: "",
	},
	{
		slug: "vibe_coded_phone",
		title: "I Vibe Coded a Website From My Phone (Because I Was Bored)",
		synopsis:
			"I was bored, found a site that gives you things to do, and instead of doing any of them — I built one. From my phone. No laptop, no IDE, just Claude and a notes app.",
		date: "June 11, 2026",
		content: "",
	},
];
