import { useState } from "react";
import "./App.css";
import { ColourInput } from "./components/ColourInput";
import { ColourOutput } from "./components/ColourOutput";

function App() {
  // hslColour should look like this {hue: 193, saturation: 72, lightness: 65 }
  const [hslColour, setHSLColour] = useState(null);

  // const hslColour = {hue: 193, saturation: 72, lightness: 65 };
  // I was just testing that the div and paragraph would display the right colour output

  return (
    <div className="App">
      <main>
        <h1>Colour Converter</h1>
        <ColourInput setHSLColour={setHSLColour}/>

        <ColourOutput hslColour={hslColour}/>

        <p>^ Click to Copy</p>
      </main>
    </div>
  );
}

export default App;
