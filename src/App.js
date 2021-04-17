import Home from "./components/Home/Home";
import * as ROUTES from "./constants/routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <hr />
        <Switch>
          <Route exact path={ROUTES.LOG_IN}>
            <h1>LOGIN PAGE</h1>
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <h1>SIGN IN</h1>
          </Route>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
