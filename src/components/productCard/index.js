import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "./productCard.scss";
import { ProductContext } from "../../App";
import likeIcon from "../../assets/home/heart.svg";
import likedIcon from "../../assets/home/full-heart.svg";
const ProductCard = ({ id, filter, image, name, description, price }) => {
  const {
    state: { favouriteProducts },
    dispatch,
  } = useContext(ProductContext);

  return (
    <Card className="productCard">
      <div className="card-head">
        <img className="w-100" src={image} />
        <div>
          {" "}
          <p className={`little-p discount ${filter ? "" : "d-none"}`}>
            {filter}
          </p>
        </div>
        <button
          onClick={() => dispatch({ type: "addFavouriteProducts", id })}
          className="like"
        >
          <img
            src={
              favouriteProducts.find((el) => el.id === id)
                ? likedIcon
                : likeIcon
            }
          />
        </button>
      </div>
      <Card.Body>
        <Card.Title className="card-h">{name}</Card.Title>
        <Card.Text className="main-p">{description}</Card.Text>
        <div className="d-flex gap-1 text-end flex-column-reverse">
          {" "}
          <button
            onClick={() => dispatch({ type: "addCartProducts", id })}
            className="main-btn addToCard"
          >
            Выбрать
          </button>{" "}
          <p className="card-h color-orange m-0">от {price} ₽</p>{" "}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
