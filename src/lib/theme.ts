// Per-page colour themes for the aurora Artboard + Hero. `variant` on
// those components selects one of these. Blob colours reference the named
// variants in Blob.svelte; kicker/em are hero accent colours.
export type BlobColor = "amethyst" | "lavender" | "blue" | "rose" | "teal" | "green";

export type Theme = "amethyst" | "blue" | "rose" | "green";

export interface ThemeTokens {
	/** Primary blob colour (used by the larger blobs). */
	blob: BlobColor;
	/** Secondary blob colour, for contrast. */
	blobAlt: BlobColor;
	/** Hero kicker (mono eyebrow) colour. */
	kicker: string;
	/** Hero emphasised (italic) word colour. */
	em: string;
}

export const themes: Record<Theme, ThemeTokens> = {
	amethyst: { blob: "amethyst", blobAlt: "lavender", kicker: "#7a5fa8", em: "#7a5fa8" },
	blue: { blob: "blue", blobAlt: "lavender", kicker: "#6a6fd6", em: "#4f56d1" },
	rose: { blob: "rose", blobAlt: "lavender", kicker: "#c85e9c", em: "#a83d7d" },
	green: { blob: "green", blobAlt: "teal", kicker: "#3f9e78", em: "#2f9e6b" },
};
