import React, { Component, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import locationIcon from "../../assets/navbar/location-icon.png";
import userIcon from "../../assets/navbar/user-icon.png";
import mainLogo from "../../assets/navbar/main-logo.png";
import { Badge, Button, Dropdown } from "react-bootstrap";
import cartIcon from "../../assets/navbar/cart-icon.png";
import heartIcon from "../../assets/navbar/heart.svg";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../App";
import { languageContext } from "../../context/languageContext";

const Header = () => {
  const {
    state: { favouriteProducts },
  } = useContext(ProductContext);
  const { lang, changeLang } = useContext(languageContext);
  return (
    <>
      <nav className="secendaryNav py-2 ">
        <div className="container">
          <ul className="nav-info m-0 d-flex justify-content-between align-items-center p-0">
            <div className="location-info d-flex  gap-3">
              <Dropdown>
                <Dropdown.Toggle
                  variant="white"
                  className="d-flex align-items-center little-p location p-0"
                  id="dropdown-basic"
                >
                  <img src={locationIcon} alt="" />
                  <p className="little-p m-0">Москва</p>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-0 ">
                  <Dropdown.Item
                    href="#/action-1"
                    className="p-0 currentLocation"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11992.292332389417!2d69.19507928319172!3d41.28551386999946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1680073522556!5m2!1sru!2s"
                      width="600"
                      height="450"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <a className="little-p d-none d-lg-block" href="#">
                {" "}
                Проверить адрес
              </a>
              <p className="little-p m-0 d-none d-lg-block">
                Среднее время доставки*: <strong> 00:24:19 </strong>
              </p>
            </div>

            <div className="user-info d-flex align-items-center  gap-3">
              <p className="little-p m-0">Время работы: с 11:00 до 23:00</p>
              <a
                href="#"
                className="user align-items-center  gap-1 d-none d-lg-flex"
              >
                <img src={userIcon} alt="" />
                <p className="little-p m-0">Войти в аккаунт</p>
              </a>
            </div>
          </ul>
        </div>
      </nav>
      <header id="header">
        <nav className="nav">
          <Navbar key="lg" bg="white" expand="lg" className="w-100">
            <Container>
              <Navbar.Brand href="#">
                <img src={mainLogo} alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="align-items-center">
                  <Nav className=" flex-grow-1">
                    <Nav.Link href="#discount">{lang.discount}</Nav.Link>
                    <Nav.Link href="#pizza">{lang.pizza}</Nav.Link>
                    <Nav.Link href="#sushi">{lang.sushi}</Nav.Link>
                    <Nav.Link href="#drinks">{lang.drinks}</Nav.Link>
                    <Nav.Link href="#snacks">{lang.snacks}</Nav.Link>
                    <Nav.Link href="#combo">{lang.combo}</Nav.Link>
                    <Nav.Link href="#dessert">{lang.dessert}</Nav.Link>
                    <Nav.Link href="#sauce">{lang.sause}</Nav.Link>
                    <NavDropdown
                      title={`${lang.others}`}
                      className="py-2 py-lg-0 navbarDropdown"
                      id={`offcanvasNavbarDropdown-expand-lg`}
                    >
                      <NavDropdown.Item href="#action3">
                        О компании
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Пользовательское соглашение
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Условия гарантии
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Button onClick={() => changeLang("en")}>EN</Button>
                  <Button onClick={() => changeLang("uz")}>Uz</Button>
                  <Button onClick={() => changeLang("ru")}>Ru</Button>
                  <NavLink
                    to="/favourite"
                    className="favourite-nav-btn position-relative me-2 d-flex gap-2 align-items-center main-btn navbar-btn"
                  >
                    <img src={heartIcon} alt="" />{" "}
                    <Badge className="counter">
                      {favouriteProducts.length}
                    </Badge>
                  </NavLink>
                  <NavLink
                    to="/cart"
                    className="d-flex gap-2 align-items-center main-btn navbar-btn"
                  >
                    <img src={cartIcon} alt="" />{" "}
                    <p className="main-p m-0 text-white text-nowrap">0 ₽</p>
                  </NavLink>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </nav>
      </header>
    </>
  );
};

export default Header;
