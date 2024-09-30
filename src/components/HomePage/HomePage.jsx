import React from "react";
import style from "./home.module.css";
import Container from "../../utils/Container/Container";
import bookIcon from "../../assets/book-icon.png";
import orderIcon from "../../assets/order-icon.png";
import saleIcon from "../../assets/money-transfer.png";

const HomePage = () => {
  return (
    <div className={style.home}>
      <Container>
        <div className={style.topHome}>
          <div className={style.grid}>
            {/* card 1 */}
            <div className={style.card}>
              <div className={style.leftSec}>
                <h3>عدد الكتب</h3>
                <p>250</p>
              </div>
              <div className={style.rightSec}>
                <img src={bookIcon} alt="book-icon" />
              </div>
            </div>
            {/* card 2 */}
            <div className={style.card}>
              <div className={style.leftSec}>
                <h3> طلبات الاسبوع </h3>
                <p>23</p>
              </div>
              <div className={style.rightSec}>
                <img src={orderIcon} alt="book-icon" />
              </div>
            </div>
            {/* card 3 */}
            <div className={style.card}>
              <div className={style.leftSec}>
                <h3> ايرادات الاسبوع </h3>
                <p>121</p>
              </div>
              <div className={style.rightSec}>
                <img src={saleIcon} alt="book-icon" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
