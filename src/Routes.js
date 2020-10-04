import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
