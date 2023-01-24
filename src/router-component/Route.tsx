import React from "react";

interface RouteProps {
  path: string;
  component: React.ReactNode;
}

const Route: React.FC<RouteProps> = ({ path, component }) => {
  const currentPath = window.location.pathname;

  if (path === currentPath) {
    return <>{component}</>;
  } else {
    return null;
  }
};

export default Route;
