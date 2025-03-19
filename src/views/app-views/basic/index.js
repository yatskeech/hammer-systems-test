import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Basic = ({ match }) => (
	<Suspense fallback={<Loading cover="content"/>}>
		<Switch>
			<Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
			<Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
			<Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
			<Route path={`${match.url}/customers`} component={lazy(() => import(`./customers`))} />
			<Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
			<Route path={`${match.url}/promo-codes`} component={lazy(() => import(`./promo-codes`))} />
			<Route path={`${match.url}/offline-points`} component={lazy(() => import(`./offline-points`))} />
			<Route path={`${match.url}/staff`} component={lazy(() => import(`./staff`))} />
			<Route path={`${match.url}/mailing`} component={lazy(() => import(`./mailing`))} />
			<Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
		</Switch>
	</Suspense>
);

export default Basic;