import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Detalle from "./pages/Detalle";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/peliculas/:id" component={Detalle} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
