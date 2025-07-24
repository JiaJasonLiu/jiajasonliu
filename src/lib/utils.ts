export function convertToTailwind(html: string): string {
	// This function can be expanded to convert specific HTML elements to Tailwind classes
	const format = `
		<head>
			<style>
				body {
					font-family: 'Georgia', serif;
					line-height: 2;
					font-size: 18px;
					padding: 2rem;
				}
				table {
					width: 100%;
					border-collapse: collapse;
					margin: 20px 0;
				}
				table th, table td {
					border: 1px solid #ccc;
					padding: 10px;
					text-align: left;
				}
				table th {
					background-color: #f4f4f4;
				}
			</style>
		</head>
		`
	html = format + html
	return html
		.replace(/<h1>/g, '<h1 class="text-3xl font-bold">')
		.replace(/<h2>/g, '<h2 class="text-2xl font-semibold">')
		.replace(/<h3>/g, '<h3 class="text-xl font-semibold">')
		.replace(/<p>/g, '<p class="">')
		.replace(/<ul>/g, '<ul class="list-disc pl-5 mb-4">')
		.replace(/<ol>/g, '<ol class="list-decimal pl-5 mb-4">');
}