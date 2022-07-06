import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

import routes from "../routes";

const loading = (
  <div>
    <div
      style={{ position: "absolute", bottom: "50%", top: "50%", right: "50%" }}
    >
      <CSpinner />
    </div>
  </div>
);

const Content = () => {
  return (
    <CContainer lg>
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, id) => {
            return (
              route.component && (
                <Route
                  key={id}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) =>
                    localStorage.getItem("token") ? (
                      <>
                        <route.component {...props} />
                      </>
                    ) : (
                      <Redirect to="/login" />
                    )
                  }
                />
              )
            );
          })}
          <Redirect from="/" to="/todos" />
        </Switch>
      </Suspense>
    </CContainer>
  );
};

export default Content;
