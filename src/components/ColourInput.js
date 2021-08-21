import { useState } from "react";
import { convertToHSL } from "../functions/convertToHSL";

export function ColourInput({setHSLColour}){
    const [colourInput, setColourInput] = useState(null);

    return(
        <form
          className="colour-input-section"
          onSubmit={(e) => {
            e.preventDefault();
            setHSLColour(convertToHSL(`#${colourInput}`));
          }}
        >
          <label htmlFor="colour-input">Colour</label>
          <input
            name="colour-input"
            onChange={(e) => setColourInput(e.target.value)}
          ></input>
          <button>Convert to hsl</button>
        </form>
    )
}

// ----------------------------------------------------------------------------------------------------
