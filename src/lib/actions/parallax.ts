// Cursor parallax over an artboard. Each [data-depth] wrapper (e.g. a
// <Blob />) is translated by mouseOffset * depth * 26px; the inner element
// keeps its own drift animation, so the two transforms compose instead of
// fighting. Respects prefers-reduced-motion.
export function parallax(node: HTMLElement) {
	const reduce =
		typeof window !== "undefined" &&
		window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
	if (reduce) return;

	const layers = () =>
		node.querySelectorAll<HTMLElement>("[data-depth]");

	const move = (e: MouseEvent) => {
		const r = node.getBoundingClientRect();
		const mx = (e.clientX - r.left) / r.width - 0.5;
		const my = (e.clientY - r.top) / r.height - 0.5;
		for (const el of layers()) {
			const d = Number.parseFloat(el.dataset.depth ?? "1") || 1;
			el.style.transform = `translate(${mx * d * 26}px, ${my * d * 26}px)`;
		}
	};
	const leave = () => {
		for (const el of layers()) el.style.transform = "translate(0, 0)";
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
