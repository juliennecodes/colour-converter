import { useState } from "react";
import "./App.css";
import { ColourInput } from "./components/ColourInput";
import { ColourOutput } from "./components/ColourOutput";

function App() {
  const [hslColour, setHSLColour] = useState(null);

  return (
    <div className="App text-blue-900">
      <main className="px-6 py-4 grid cols-1 gap-3">
        <h1 className="text-xs font-semibold uppercase text-blue-900">Colour Converter</h1>
        <ColourInput setHSLColour={setHSLColour}/>

        <ColourOutput hslColour={hslColour}/>

      </main>
    </div>
  );
}

export default App;
