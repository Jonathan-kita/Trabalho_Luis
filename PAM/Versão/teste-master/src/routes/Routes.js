import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth";
import DefaulLayout from "../pages/_layouts/default";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const Layout = isPrivate ? DefaulLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
