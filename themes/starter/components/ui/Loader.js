import React from "react";
import "./Loader.css";

const AppLoader = ({ children }) => {
  return (
    <div className="lds-roller-wraper">
      {children && <div className="lds-roller-message">{children}</div>}
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default AppLoader;
