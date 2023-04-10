import React, { Component } from "react";
import discountIcon from "../../assets/home/fire-icon.png";
import filterIcon from "../../assets/home/filter-icon.png";
import Layout from "../../components/layout/layout";
import { categories } from "../../const/categories";
import { Container, Row } from "react-bootstrap";
import { capital } from "../../const/capital";
import "./home.scss";
import ProductCard from "../../components/productCard";
import { products } from "../../const/products";
class Home extends Component {
  render() {
    return (
      <Layout>
        <section id="home">
          <div className="container">
            <div className="foodTypes d-flex justify-content-between gap-2 py-4 ">
              <a
                href="#"
                className="typeCard d-flex text-center flex-lg-column align-items-center"
              >
                <img src={discountIcon} alt="" />
                <p className="huge-p m-0">Акции</p>
              </a>
              {categories.map((category) => {
                return (
                  <a
                    key={category.image}
                    href="#"
                    className="typeCard d-flex text-center flex-lg-column align-items-center"
                  >
                    <img src={category.image} alt="" />
                    <p className="huge-p m-0">{category.name}</p>
                  </a>
                );
              })}
            </div>
            <Row>
              {capital.map((card) => {
                return (
                  <div
                    key={card.image}
                    className="capital-card col-6 col-md-3 mb-4"
                  >
                    <img src={card.image} />
                    <p className="huge-p m-0">{card.text}</p>
                  </div>
                );
              })}
            </Row>
          </div>
        </section>
        <section id="pizza">
          <Container>
            <div className="section-about d-flex justify-content-between align-items-center mb-5">
              <h2 className="main-h">Пицца</h2>
              <button className="btn-secendary d-flex align-items-center gap-1">
                <img src={filterIcon} alt="filter" /> Фильтры
              </button>
            </div>
            <Row>
              {products
                .filter((product) => product.category === "Пицца")
                .map((product) => {
                  return (
                    <div className="col-6 col-md-3 mb-3">
                      {" "}
                      <ProductCard key={product.id} {...product} />
                    </div>
                  );
                })}
            </Row>
          </Container>
        </section>
      </Layout>
    );
  }
}
export default Home;
