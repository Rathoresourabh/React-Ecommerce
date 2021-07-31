import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
function Routes() {
  return (
      <Switch>
          <Route path="/" exact >
              <Header/>
              <Home/>
          </Route>
          <Route path="/contact" exact >
              <Header/>
              <Contact/>
          </Route>
          <Route path="/cart" exact >
              <Header/>
              <Cart/>
          </Route>
      </Switch>
  );
}

export default Routes;
