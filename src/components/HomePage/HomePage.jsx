import React from "react";
import style from "./home.module.css";
import Container from "../../utils/Container/Container";
import bookIcon from "../../assets/book-icon.png"


const HomePage = () => {
  return (
    <div className={style.home}>
      <Container>
        <div className={style.topHome}>
          <div className={style.card}>
            <div className={style.leftSec}>
              <h3>عدد الكتب</h3>
                <p>250</p>
            </div>
            <div className={style.rightSec}>
                <img src={bookIcon} alt="book-icon"/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
