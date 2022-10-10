import { useState } from "react";
import { convertToHSL } from "../functions/convertToHSL";

export function ColourInput({ setHSLColour }) {
  const [colourInput, setColourInput] = useState(null);

  return (
    <section className="colour-input-section bg-blue-50 p-3 rounded-lg">
      <form
        className="grid grid-cols-1 gap-3 px-3 py-2"
        onSubmit={(e) => {
          e.preventDefault();
          setHSLColour(convertToHSL(`#${colourInput}`));
        }}
      >
        <label className="text-xs text-blue-400 pl-1.5" htmlFor="colour-input">
          Colour:
        </label>
        <input
          className="text-base rounded-lg relative -mt-2 p-2"
          name="colour-input"
          onChange={(e) => setColourInput(e.target.value)}
        ></input>
        <button className="rounded-lg justify-self-start my-1 px-12 py-2 text-sm bg-blue-200 text-blue-800 shadow-sm">
          Convert to HSL
        </button>
      </form>
    </section>
  );
}

// ----------------------------------------------------------------------------------------------------
