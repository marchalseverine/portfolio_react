import "./App.css";
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
