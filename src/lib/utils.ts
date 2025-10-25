export function convertToTailwind(html: string): string {
	// This function can be expanded to convert specific HTML elements to Tailwind classes
	const format = `
		<head>
			<style>
				h1, h2, h3, h4 {
					font-family: 'Poppins', serif;
				}
				h1 {
					margin-top: 0rem;
					margin-bottom: 1rem;
					}
				h2 {
					margin-top: 2rem;
					margin-bottom: 1rem;
				}
				h3 {
					margin-bottom: 1rem;
				}
				h4 {
					margin-bottom: 1rem;
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
					margin-top: 0;
					margin-bottom: 0.5rem;
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
				li {
					font-size: 18px;
				}
				ul {
					margin-top: 0;
					margin-bottom: 1rem;
				}
			</style>
		</head>
		`
	html = format + html
	return html
		.replace(/<h1>/g, '<h2 class="dark:text-gray-200">')
		.replace(/<h2>/g, '<h2 class="font-semibold">')
		.replace(/<h3>/g, '<h3 class="font-semibold">')
		.replace(/<strong>/g, '<strong class="not-prose dark:text-gray-100">')
		.replace(/<p>/g, '<p>')
		.replace(/<ul>/g, '<ul class="pl-5">')
		.replace(/<ol>/g, '<ol class="pl-5 mb-4">');
}