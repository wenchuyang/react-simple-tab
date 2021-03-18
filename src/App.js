import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./styles.css";

function Tab1() {
  return <div>Tab1</div>;
}
function Tab2() {
  return <div>Tab2</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/tab1">
          <button>tab1</button>
        </Link>
        <Link to="/tab2">
          <button>tab2</button>
        </Link>
        <Switch>
          <Route path="/tab1">
            <Tab1 />
          </Route>
          <Route path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/">
            <Tab1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
