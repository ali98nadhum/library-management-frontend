import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        {/* القائمة الرئيسية في الهيدر */}
        <nav className={style.navbar}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <a href="/all-book" className={style.navLink}>
                الكتب
              </a>
            </li>
            <li className={style.navItem}>
              <a href="#" className={style.navLink}>
                إضافة كتاب
              </a>
            </li>
            <li className={style.navItem}>
              <a href="#" className={style.navLink}>
                عرض الطلبات
              </a>
            </li>
            <li className={style.navItem}>
              <a href="#" className={style.navLink}>
                إضافة طلب
              </a>
            </li>
            <li className={style.navItem}>
              <a href="#" className={style.navLink}>
                طباعة فاتورة
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
