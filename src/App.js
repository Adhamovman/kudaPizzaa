import { createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Favourite from "./pages/favourite";
import "./App.css";
import { products } from "./const/products";
import LanguageContext from "./context/languageContext";

export const ProductContext = createContext();

const initialState = {
  favouriteProducts: [],
  cartProducts: [],
};
function reducer(state, action) {
  let findedFavouriteProduct = state.favouriteProducts.find(
    (el) => el.id === action.id
  );
  let findedCartProducts = state.cartProducts.find((el) => el.id === action.id);
  let favouriteProducts = [];
  let cartProducts = [];

  if (findedCartProducts) {
    cartProducts = state.cartProducts.filter((el) => el.id !== action.id);
  } else {
    cartProducts = [
      ...state.cartProducts,
      products.find((el) => el.id === action.id),
    ];
  }

  if (findedFavouriteProduct) {
    favouriteProducts = state.favouriteProducts.filter(
      (el) => el.id !== action.id
    );
  } else {
    favouriteProducts = [
      ...state.favouriteProducts,
      products.find((el) => el.id === action.id),
    ];
  }

  switch (action.type) {
    case "addFavouriteProducts":
      return { ...state, favouriteProducts };
    case "deleteFavouriteProducts":
      return {
        ...state,
        favouriteProducts: state.favouriteProducts.filter(
          (el) => el.id !== action.id
        ),
      };
    case "addCartProducts":
      return { ...state, cartProducts };
    case "deleteCartProducts":
      return {
        ...state,
        cartProducts: state.cartProducts.filter((el) => el.id !== action.id),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <LanguageContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </BrowserRouter>
      </LanguageContext>
    </ProductContext.Provider>
  );
}

export default App;
