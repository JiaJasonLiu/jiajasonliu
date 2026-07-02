<script lang="ts">
// Aurora "Dream Amethyst" blob. Two layers: the outer element is the
// parallax target (data-depth, read by the use:parallax action on the
// artboard) and carries position/size; the inner element is the drifting
// blurred gradient, so the parallax translate and the drift animation
// compose instead of overwriting each other.
import type { BlobColor } from "$lib/theme";

let {
	color = "amethyst",
	depth = 1,
	top,
	left,
	right,
	bottom,
	size = 400,
	width,
	height,
	blur = 24,
	opacity = 0.48,
	fade = 68,
	drift = 1,
	duration = 18,
}: {
	/** Colour variant — new blobs can be a different colour. */
	color?: BlobColor;
	/** Parallax strength; higher = moves more with the cursor. */
	depth?: number;
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	/** Shorthand for a square blob; overridden by width/height. */
	size?: number;
	width?: number;
	height?: number;
	blur?: number;
	opacity?: number;
	/** Radial-gradient transparent stop, in %. */
	fade?: number;
	/** Which drift keyframe to use: 1 → auroraDrift, 2 → auroraDrift2. */
	drift?: 1 | 2;
	/** Animation duration in seconds. */
	duration?: number;
} = $props();

const RGB: Record<BlobColor, string> = {
	amethyst: "158, 120, 214",
	lavender: "196, 164, 232",
	blue: "120, 150, 214",
	rose: "214, 140, 190",
	teal: "120, 200, 200",
	green: "120, 200, 150",
};

const w = $derived(width ?? size);
const h = $derived(height ?? size);
const rgb = $derived(RGB[color] ?? RGB.amethyst);
const anim = $derived(drift === 2 ? "auroraDrift2" : "auroraDrift");
</script>

<div
	class="blob"
	data-depth={depth}
	aria-hidden="true"
	style="top:{top ?? 'auto'};left:{left ?? 'auto'};right:{right ?? 'auto'};bottom:{bottom ?? 'auto'};width:{w}px;height:{h}px;"
>
	<div
		class="blob__inner"
		style="filter:blur({blur}px);background:radial-gradient(circle, rgba({rgb}, {opacity}), transparent {fade}%);animation:{anim} {duration}s ease-in-out infinite;"
	></div>
</div>

<style>
	.blob {
		position: absolute;
		pointer-events: none;
	}
	.blob__inner {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
</style>
