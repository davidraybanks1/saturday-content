// Neither Host Grotesk nor Geist Mono includes arrow glyphs, so text arrows
// fell back to whatever monospace font the visitor's OS has. Draw them instead.
const PATHS = {
  right: "M1.5 6h9M7 2.5 10.5 6 7 9.5",
  left: "M10.5 6h-9M5 2.5 1.5 6 5 9.5",
  out: "M3 9 9 3M4 3h5v5",
};

export default function Arrow({ dir = "right" }: { dir?: keyof typeof PATHS }) {
  return (
    <svg
      viewBox="0 0 12 12"
      width="0.95em"
      height="0.95em"
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "-0.12em", margin: dir === "left" ? "0 .4em 0 0" : "0 0 0 .4em" }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
    >
      <path d={PATHS[dir]} />
    </svg>
  );
}
