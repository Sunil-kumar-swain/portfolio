import "./BackgroundBlobs.css";

// Fixed, decorative, behind everything, aria-hidden. Pure CSS animation
// (transform + opacity only) so it never touches the JS thread and never
// triggers layout — cheap enough to run for the whole session at 60fps.
export default function BackgroundBlobs() {
  return (
    <div className="bg-blobs" aria-hidden="true">
      <span className="bg-blob bg-blob--one" />
      <span className="bg-blob bg-blob--two" />
      <span className="bg-blob bg-blob--three" />
      <div className="bg-grain" />
    </div>
  );
}
