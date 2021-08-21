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
    <section className="colour-output-section">
      <div
        className="colour-swatch"
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
          height: "250px",
          width: "250px",
        }}
      ></div>

      <div className="hsl-text" onClick={()=> copyColourToClipboard(hue, saturation, lightness)}>
        <p className="hsl-value">{`hsl(${hue}, ${saturation}%, ${lightness}%)`}</p>
      </div>
    </section>
  );
}

function NoColourOutput() {
  return (
    <section className="colour-output-section">
      <div
        className="colour-swatch"
        style={{
          border: "2px dotted black",
          height: "250px",
          width: "250px",
        }}
      ></div>

      <div className="hsl-text">
        <p>No colour just yet</p>
      </div>
    </section>
  );
}

function copyColourToClipboard(hue, saturation, lightness) {
    const hslValue = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    navigator.clipboard.writeText(hslValue);
  }