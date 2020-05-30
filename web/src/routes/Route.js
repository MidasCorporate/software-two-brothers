/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import LayoutClient from '~/pages/_layouts/client';
// import LayoutAdmin from '~/pages/_layouts/admin';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  const Layouts = LayoutClient;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layouts>
          <Component {...props} />
        </Layouts>
      )}
    />
  );
}

RouteWrapper.prototype = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
