import React from "react";
import { Link, useParams } from "react-router-dom";

import "./ProductDetails.css";

const ProductDetails = () => {
  // const params = useParams();
  // const productId = params.productId;

  const product = {
    id: 1,
    name: "Sonu",
    imageUrl:
      "https://www.sony.co.in/image/023a50e89ab83b825c45db0fad554f8d?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9",

    cost: 1000,
  };

  const isLoggedIn = true;

  function addToCart() {
    localStorage.setItem("cart", "TV");
  }

  function renderAddToCartButton() {
    if (isLoggedIn) {
      return (
        <div
          className="product-details-action btn btn-primary text-decoration-none"
          onClick={addToCart}
        >
          Add To Cart
        </div>
      );
    } else {
      return (
        <Link
          to="/login"
          className="product-details-action btn btn-success text-decoration-none"
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {" "}
            Login{" "}
          </span>
          to Add To Cart
        </Link>
      );
    }
  }

  const { productId } = useParams();

  return (
    <div className="productDetails">
      <div className="container">
        <div className="row">
          <div className="product-details-wrapper">
            <div className="product-img">
              <div>
                <img src={product.imageUrl} alt={product.name} />
              </div>
            </div>
            <div className="product-details-box">
              <div className="product-name">{product.name}</div>
              <div className="product-price fw-bold">
                <i className="fa fa-inr">{product.cost}</i>
              </div>
              <div className="product-description">
                <div className="product-description-title">Description</div>
                <div className="product-description-data">
                  {product.description}
                </div>
              </div>
              {renderAddToCartButton()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
