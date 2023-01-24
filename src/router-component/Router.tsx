import React from "react";
import useRouter from "../helper/util";
interface RouterProps {
  routes: { path: string; component: React.ComponentType }[];
}

const Router: React.FC<RouterProps> = ({ routes }) => {
  const path = useRouter();

  const renderComponent = () => {
    const route = routes.find((route) => route.path === path);
    return route ? <route.component /> : null;
  };

  return renderComponent();
};

export default Router;
