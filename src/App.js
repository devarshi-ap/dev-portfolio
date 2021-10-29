import Home from "./routes/home/components/Home";
import Project from "./routes/projects/components/Project";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/projects" exact component={() => <Project />} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;