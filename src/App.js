import Home from "./components/Home/Home";
import * as ROUTES from "./constants/routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <hr />
        <Header />
        <Switch>
          <Route path={`${ROUTES.PRODUCTDETAILS}`}>
            <ProductDetails />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
