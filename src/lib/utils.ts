export function convertToTailwind(html: string): string {
	// This function can be expanded to convert specific HTML elements to Tailwind classes
	const format = `
		<head>
			<style>
				h1, h2, h3, h4 {
					font-family: 'Poppins', serif;
				}
				h2 {
					margin-top: 2em;
				}
				h3 {
					margin-top: 1em;
				}
				h4 {
					margin-top: 0.5em;
				}
				
				body {		
					font-family: 'Inter', serif;
					line-height: 2;
					font-size: 18px;
					padding: 2rem;
				}
				p {		
					font-family: 'Inter', serif;
					line-height: 2;
					font-size: 18px;
					margin-top: 0.25em;
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
			</style>
		</head>
		`
	html = format + html
	return html
		.replace(/<h1>/g, '<h1 class="text-3xl font-bold mt-5">')
		.replace(/<h2>/g, '<h2 class="text-2xl font-semibold mt-3">')
		.replace(/<h3>/g, '<h3 class="text-xl font-semibold mt-1">')
		.replace(/<p>/g, '<p class="pb-1">')
		.replace(/<ul>/g, '<ul class="list-disc pl-5 mb-4">')
		.replace(/<ol>/g, '<ol class="list-decimal pl-5 mb-4">');
}