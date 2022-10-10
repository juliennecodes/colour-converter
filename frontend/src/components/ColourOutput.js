export function ColourOutput({ hslColour }) {
  return hslColour ? (
    <YesColourOutput hslColour={hslColour} />
  ) : (
    <NoColourOutput />
  );
}

// ----------------------------------------------------------------------------------------------------
function YesColourOutput({ hslColour }) {
    const hue = hslColour.hue;
    const saturation = hslColour.saturation;
    const lightness = hslColour.lightness;

  return (
    <section className="colour-output-section grid cols-1 my-3 border-2 border-solid border-blue-900 gap-3 rounded-lg px-8 py-12 justify-items-center shadow-lg">
      <div
        className="colour-swatch rounded-lg w-64 h-64"
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        }}
      ></div>

      <div className="hsl-text" onClick={()=> copyColourToClipboard(hue, saturation, lightness)}>
        <p className="hsl-value text-2xl ">{`hsl(${hue}, ${saturation}%, ${lightness}%)`}</p>
      </div>

    </section>
  );
}

function NoColourOutput() {
  return (
    <section className="colour-output-section grid cols-1 my-3 border-2 border-solid border-blue-900 gap-3 rounded-lg px-8 py-12 justify-items-center shadow-lg">
      <div
        className="colour-swatch border-4 border-dotted border-blue-900 w-64 h-64"
      ></div>

      <div className="hsl-text">
        <p className="text-2xl">No colour just yet</p>
      </div>
    </section>
  );
}

function copyColourToClipboard(hue, saturation, lightness) {
    const hslValue = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    navigator.clipboard.writeText(hslValue);
  }