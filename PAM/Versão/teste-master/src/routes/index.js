import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Routes";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import AdicionarAula from "../pages/AdicionarAula";
import ListarAula from "../pages/ListarAula";
import EditarAula from "../pages/EditarAula";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/AdicionarAula" component={AdicionarAula} isPrivate />
      <Route path="/ListarAula" component={ListarAula} isPrivate />
      <Route path="/editarAula" component={EditarAula} isPrivate />
    </Switch>
  );
}
