import { useState } from "react";
import "./styles.css";

function Tab1() {
  return <div>Tab1</div>;
}
function Tab2() {
  return <div>Tab2</div>;
}

function App() {
  const [ui, setUi] = useState("tab1");
  return (
    <div className="App">
      <button onClick={() => setUi("tab1")}>tab1</button>
      <button onClick={() => setUi("tab2")}>tab2</button>
      {ui === "tab1" ? <Tab1 /> : <Tab2 />}
    </div>
  );
}

export default App;
