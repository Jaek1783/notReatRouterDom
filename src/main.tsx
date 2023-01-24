import ReactDOM from "react-dom/client";

import "./index.css";
import Root from "./component/Root";
import About from "./component/About";
import Route from "./router-component/Route";
import Router from "./router-component/Router";

const routes = [
  { path: "/", component: Root },
  { path: "/about", component: About },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router routes={routes}>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} component={route.component} />
    ))}
  </Router>
);
