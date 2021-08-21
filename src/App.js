import { useState } from "react";
import "./App.css";
import { ColourInput } from "./components/ColourInput";
import { ColourOutput } from "./components/ColourOutput";

function App() {
  const [hslColour, setHSLColour] = useState(null);

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
