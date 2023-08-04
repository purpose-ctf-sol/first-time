import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import ProductList from "../ProductList/ProductList";
import Checkout from "../Checkout/Checkout";
import ProductDetails from "../ProductDetail/ProductDetails";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:categoryName" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/product/:productId/details"
          element={<ProductDetails />}
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
