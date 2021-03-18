import { useState } from "react";
import "./styles.css";

function Tab1() {
  return <div>Tab1</div>;
}
function Tab2() {
  return <div>Tab2</div>;
}

function App() {
  const init = window.location.hash === "#tab2" ? "tab2" : "tab1";
  const [ui, setUi] = useState(init);
  const onClickTab1 = () => {
    setUi("tab1");
    window.location.hash = "tab1";
  };
  const onClickTab2 = () => {
    setUi("tab2");
    window.location.hash = "tab2";
  };
  return (
    <div className="App">
      <button onClick={onClickTab1}>tab1</button>
      <button onClick={onClickTab2}>tab2</button>
      {ui === "tab1" ? <Tab1 /> : <Tab2 />}
    </div>
  );
}

export default App;
