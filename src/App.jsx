import { useState } from "react";
import TextField from "./TextField";
import ColorBox from "./ColorBox";
import "./App.css";
function App() {
  const [clr, setClr] = useState("white");
  return (
    <>
      <ColorBox clr={clr} />
      <TextField clr={clr} setClr={setClr} />
    </>
  );
}

export default App;
