import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/friends";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
          <li>
            <Link to='/dashboard'>Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
