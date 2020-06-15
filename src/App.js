import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation"

import Home from "./pages/home";
import Contador from "./pages/contador";
import CrudHooks from "./pages/crudHooks";
import CrudHooks2 from "./pages/CrudHooks2";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/contador" component={Contador} />
    <Route exact={true} path="/crudhooks" component={CrudHooks} />
    <Route exact={true} path="/crudhooks2" component={CrudHooks2} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
