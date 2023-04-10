import React from "react";
import logo from "../../assets/footer/logo.png";
import locationIcon from "../../assets/footer/location-icon.png";
import phoneIcon from "../../assets/footer/phone-icon.png";
import fb from "../../assets/footer/fb-icon.png";
import insta from "../../assets/footer/insta-icon.png";
import "./footer.scss";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="footer-main col-sm-6 col-md-3">
            <img src={logo} />
            <p className="main-p">© Copyright 2021 — Куда Пицца</p>
          </div>

          <div className="footer-about  col-sm-6 col-md-3">
            <h3 className="huge-p">Куда пицца</h3>
            <ul className="p-0">
              <li>
                <a className="main-p" href="#">
                  О компании
                </a>
              </li>
              <li>
                <a className="main-p" href="#">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a className="main-p" href="#">
                  Условия гарантии
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-help col-sm-6 col-md-3">
            <h3 className="huge-p">Помощь</h3>
            <ul className="p-0">
              <li>
                <a className="main-p" href="#">
                  Ресторан
                </a>
              </li>
              <li>
                <a className="main-p" href="#">
                  Контакты
                </a>
              </li>
              <li>
                <a className="main-p" href="#">
                  Поддержка
                </a>
              </li>
              <li>
                <a className="main-p" href="#">
                  Отследить заказ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact col-sm-6 col-md-3">
            <h3 className="huge-p">Контакты</h3>
            <ul className="p-0">
              <li>
                <a href="#" className="main-p d-flex">
                  <img scr={phoneIcon} /> +7 (926) 223-10-11
                </a>
              </li>
              <li>
                <a href="#" className="main-p d-flex">
                  <img scr={locationIcon} /> Москва, ул. Юных Ленинцев, д.99
                </a>
              </li>
              <li>
                <a href="#" className="main-p">
                  <div className="d-flex flex-wrap gap-2">
                    <div className=" main-p d-flex align-items-center gap-1">
                        <img src={fb} /> Facebook
                    </div>

                    <div className=" main-p d-flex align-items-center gap-1">
                        <img src={insta} /> Instagram
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
