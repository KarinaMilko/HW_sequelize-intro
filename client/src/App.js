import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import CreatePhonesListPage from "./pages/CreatePhonesListPage";
import PhonesListPage from "./pages/PhonesListPage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/phone/create">Add Phone</Link>
          </li>
          <li>
            <Link to="/phones">Phone List</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/phone/create">
          <CreatePhonesListPage />
        </Route>
        <Route path="/phones">
          <PhonesListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
