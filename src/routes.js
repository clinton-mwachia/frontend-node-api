import { lazy } from "react";

const profile = lazy(() => import("./views/Profile"));
const todos = lazy(() => import("./views/todos/Todos"));
const AddTodos = lazy(() => import("./views/todos/AddTodo"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/todos", name: "Todos", component: todos },
  { path: "/add/todo", name: "AddTodo", component: AddTodos },
  { path: "/profile", name: "Profile", component: profile },
];

export default routes;
