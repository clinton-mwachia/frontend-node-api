import { lazy } from "react";

const profile = lazy(() => import("./views/Profile"));
const todos = lazy(() => import("./views/Todos"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/todos", name: "Todos", component: todos },
  { path: "/profile", name: "Profile", component: profile },
];

export default routes;
