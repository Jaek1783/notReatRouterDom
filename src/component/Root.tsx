import React from "react";
import BtnStyle from "../assets/btn-style";
const RootPage: React.FC = () => {
  const GoAboutPage = () => {
    history.pushState(undefined, "", "/about");
    const popStateEvent = new PopStateEvent("popstate", { state: "/" });
    dispatchEvent(popStateEvent);
  };
  const GoBack = () => {
    history.back();
  };
  return (
    <>
      <h1>This is the Root Page</h1>
      <BtnStyle>
        <button onClick={GoAboutPage}>About</button>
        <button onClick={GoBack}>GoBack</button>
      </BtnStyle>
    </>
  );
};

export default RootPage;
