import React from "react";
import BtnStyle from "../assets/btn-style";

const AboutPage: React.FC = () => {
  const GoRootPage = () => {
    history.pushState(undefined, "", "/");
    const popStateEvent = new PopStateEvent("popstate", { state: "/" });
    dispatchEvent(popStateEvent);
  };

  const GoBack = () => {
    history.back();
  };

  return (
    <>
      <h1>This is About Page</h1>
      <BtnStyle>
        <button onClick={GoRootPage}>Root</button>
        <button onClick={GoBack}>GoBack</button>
      </BtnStyle>
    </>
  );
};
export default AboutPage;
