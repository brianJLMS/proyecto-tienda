import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <HashRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <ShoppingCart />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>

      <Footer />
    </HashRouter>
  );
}

export default App;
