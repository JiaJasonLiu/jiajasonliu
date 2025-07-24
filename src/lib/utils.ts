export function convertToTailwind(html: string): string {
	// This function can be expanded to convert specific HTML elements to Tailwind classes
	const format = `
			<head>
			<style>
			body {
			font-family: 'Georgia', serif;
			line-height: 1.6;
			font-size: 18px;
			padding: 2rem;
			}
		</style>
		</head>
		`
	html = format + html
	console.log(html)
	return html
		.replace(/<h1>/g, '<h1 class="text-3xl font-bold">')
		.replace(/<h2>/g, '<h2 class="text-2xl font-semibold">')
		.replace(/<h3>/g, '<h3 class="text-xl font-semibold">')
		.replace(/<p>/g, '<p class="">')
		.replace(/<ul>/g, '<ul class="list-disc pl-5 mb-4">')
		.replace(/<ol>/g, '<ol class="list-decimal pl-5 mb-4">');
}