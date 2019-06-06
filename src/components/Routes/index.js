import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../layout/Home";
import Collections from "../../layout/Collections";
import Search from "../../layout/Search";
import NotFound from "../../layout/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/collections" component={Collections} />
      <Route path="/search/:type/:query" component={Search} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
