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

      <div className={style.list}>
        {/* button 1 */}
        <div className="btn-group dropstart">
          <button
            type="button"
            className={`btn dropdown-toggle ${style["custom-dropdown-button"]}`}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            الكتب
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className={`dropdown-item ${style["custom-dropdown-item"]}`} href="#">
                عنصر 1
              </a>
            </li>
            <li>
              <a className={`dropdown-item ${style["custom-dropdown-item"]}`} href="#">
                عنصر 2
              </a>
            </li>
            <li>
              <a className={`dropdown-item ${style["custom-dropdown-item"]}`} href="#">
                عنصر 3
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className={`dropdown-item ${style["custom-dropdown-item"]}`} href="#">
                عنصر 4
              </a>
            </li>
          </ul>
        </div>
        {/* button 2 */}
        <div className="btn-group dropstart">
          <button
            type="button"
            className={`btn dropdown-toggle ${style["custom-dropdown-button"]}`}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            الطلبات
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className={`dropdown-item ${style["custom-dropdown-item"]}`} href="#">
                عنصر 1
              </a>
            </li>
            <li>
              <a className={`dropdown-item ${style["custom-dropdown-item"]}`} href="#">
                عنصر 2
              </a>
            </li>
            <li>
              <a className={`dropdown-item ${style["custom-dropdown-item"]}`} href="#">
                عنصر 3
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className={`dropdown-item ${style["custom-dropdown-item"]}`} href="#">
                عنصر 4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
