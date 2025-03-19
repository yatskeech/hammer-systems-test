import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Customers = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/list`} component={lazy(() => import(`./list`))} />
      <Route path={`${match.url}/groups`} component={lazy(() => import(`./groups`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/list`} />
    </Switch>
  </Suspense>
);

export default Customers;