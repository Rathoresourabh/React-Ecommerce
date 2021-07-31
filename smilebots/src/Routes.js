import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Order from "./Pages/Order"
import Shop from "./Pages/Shop"

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
          <Route path="/favourite" exact >
              <Header/>
              <Order/>
          </Route>
          <Route path="/cart" exact >
              <Header/>
              <Cart/>
          </Route>
          <Route path="/order" exact >
              <Header/>
              <Order/>
          </Route>
          <Route path="/shop" exact >
              <Header/>
              <Shop/>
          </Route>
      </Switch>
  );
}

export default Routes;
