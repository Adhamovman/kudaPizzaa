import React, { useContext } from "react";
import "./favouriteCard.scss";
import "../../global.scss";
import { ProductContext } from "../../App";
const FavouriteCard = ({ id, image, name, description, price }) => {
  const { dispatch } = useContext(ProductContext);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-4 col-sm-3 d-flex align-items-center">
          <img src={image} className="w-100" alt={name} />
        </div>
        <div className="col-8 col-sm-9">
          <div className="card-body">
            <h5 className="card-title card-h">{name}</h5>
            <p className="card-text main-p">{description}</p>
            <div className="d-flex align-items-center justify-content-between">
              {" "}
              <p className="card-text m-0">{price}</p>
              <button
                className="main-btn"
                onClick={() =>
                  dispatch({ type: "deleteFavouriteProducts", id })
                }
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
