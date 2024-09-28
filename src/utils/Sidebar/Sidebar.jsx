import React from "react";
import style from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <h2>
          <span>A</span>dmin <span>P</span>anel
        </h2>
      </div>
      <hr />
     
    </div>
  );
};

export default Sidebar;
