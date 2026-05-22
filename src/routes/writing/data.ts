import type { BlogPost } from "../../types/blog";

export const posts: BlogPost[] = [
	{
		slug: "welcome",
		title: "Welcome to my first blog post",
		synopsis: "This is blog for my personal website.",
		date: "June 28, 2025",
		content: "",
		image: "/writing/first_blog.webp",
		tags: ["personal", "meta"],
	},
	{
		slug: "jshandbook",
		title: "JSHandbook 1st Edition",
		synopsis: "Everything I have learned throughout the years.",
		date: "July 03, 2023",
		content: "",
		image: "/writing/jshandbook_v1.webp",
		tags: ["javascript", "learning"],
	},
	{
		slug: "openclaw_technical",
		title: "The Technical Architecture of My AI Agents",
		synopsis:
			"An exploration of setting up a personal AI agent (Aura) using OpenClaw in Docker, controlled via Telegram.",
		date: "April 17, 2026",
		content: "",
		image: "/writing/openclaw_technical.webp",
		tags: ["ai", "engineering"],
	},
	{
		slug: "ultimate_goals",
		title: "My Ultimate Life Goal",
		synopsis:
			"A holiday forced me to stop and think — what do I actually want from life? Turns out, the answer was simpler than I expected.",
		date: "May 5, 2026",
		content: "",
		image: "/writing/ultimate_goal.webp",
		tags: ["life", "reflection"],
	},
	{
		slug: "vue_types",
		title: "The Foundation Is the Tool",
		synopsis:
			"A Vue compiler error, and the unglamorous truth about why tools become what they are — and stay that way.",
		date: "May 22, 2026",
		content: "",
		image: "/writing/vue_types.webp",
		tags: ["vue", "engineering"],
	},
];
