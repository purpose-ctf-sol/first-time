import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const productDetails = [
    {
      id: 1,
      name: "Sonu",
      imageUrl:
        "https://www.sony.co.in/image/023a50e89ab83b825c45db0fad554f8d?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9",
      cost: 1000,
    },
    {
      id: 2,
      name: "Sonu",
      imageUrl:
        "https://www.sony.co.in/image/023a50e89ab83b825c45db0fad554f8d?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9",

      cost: 11000,
    },
    {
      id: 3,
      name: "Sonu",
      imageUrl:
        "https://www.sony.co.in/image/023a50e89ab83b825c45db0fad554f8d?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9",

      cost: 41000,
    },
  ];
  const orderDetails = {
    cost: 1000,
  };
  function removeProductFromCart(productId) {
    console.log(`Remove ${productId} from Cart in Db `);
  }
  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="cart-title">My Insta Cart</div>
            <div className="cart-wrapper">
              <div className="order-details">
                <div className="order-details-title">Order Details</div>
                {productDetails.length !== 0 ? (
                  <>
                    {" "}
                    {productDetails.map((product) => (
                      <div className="order-details-product" key={product.id}>
                        <div className="order-details-product-img">
                          <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="order-details-product-data">
                          <div> {product.name}</div>
                          <div>
                            <i className="fa fa-inr"></i>
                            {product.cost.toFixed(2)}
                          </div>
                        </div>
                        <div className="order-details-product-actions">
                          <div
                            className="order-details-product-remove btn btn-info"
                            onClick={() => removeProductFromCart(product.id)}
                          >
                            Remove
                          </div>
                        </div>
                      </div>
                    ))}{" "}
                  </>
                ) : (
                  <div className="no-items-cart">Cart is Empty</div>
                )}
                {productDetails.length > 0 && (
                  <div className="price-details">
                    <div className="price-details-box">
                      <div className="price-details-title">Price Details</div>
                      <div className="price-details-data">
                        <div className="price-details-item">
                          <div>Discount</div>
                          <div>
                            {" "}
                            <i className="fa fa-inr" /> 0
                          </div>
                        </div>
                        <div className="price-details-item">
                          {" "}
                          <div>Delivery Charges</div>
                          <div> Free</div>
                        </div>
                        <div className="price-details-item">
                          <div>Price</div>
                          <div>
                            {" "}
                            <i className="fa fa-inr" /> {orderDetails.cost}
                          </div>
                        </div>
                        {/* <div className="price-details-item"></div> */}
                      </div>
                    </div>
                    <div className="details-action">
                      <Link
                        className="btn btn-info continue-shopping-btn"
                        to="/"
                      >
                        Continue Shopping
                      </Link>
                      <Link
                        className="checkout-btn btn btn-primary"
                        to="/checkout"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
