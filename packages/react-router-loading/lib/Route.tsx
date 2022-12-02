import React, { FC } from 'react';
import { Route as OriginalRoute, RouteProps as OriginalRouteProps } from 'react-router';


interface RouteProps  {
  loading?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Route: FC<RouteProps & OriginalRouteProps> = ({ loading, ...props }) => <OriginalRoute {...props} />;

export default Route;
