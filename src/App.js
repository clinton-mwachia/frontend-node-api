import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { CSpinner } from "@coreui/react";

const Layout = React.lazy(() => import("./layout/Layout"));
const Login = React.lazy(() => import("./views/pages/Login"));

const loading = (
  <div>
    <div
      style={{ position: "absolute", bottom: "50%", top: "50%", right: "50%" }}
    >
      <CSpinner />
    </div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login"
            render={(props) => <Login {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) => <Layout {...props} />}
          />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
