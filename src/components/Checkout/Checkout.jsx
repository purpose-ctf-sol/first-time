import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const [confirmPaymentSuccess, setConfirmPaymentSuccess] = useState(false);

  function confirmPayment() {
    setConfirmPaymentSuccess(true);
  }

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
  return (
    <div className="checkout">
      <div className="container">
        <div className="row">
          <div className="cart-title">Checkout</div>
          <div className="cart-wrapper">
            <div className="order-details">
              <div className="order-details-title">Order Summary</div>
              <>
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
                  </div>
                ))}
              </>

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

                {confirmPaymentSuccess === true ? (
                  <div>
                    Order Confirmed
                    <Link className="btn btn-success" to="/">
                      Continue Shopping
                    </Link>
                  </div>
                ) : (
                  <div
                    className="confirm-payment btn btn-success"
                    onClick={confirmPayment}
                  >
                    <Link>Confirm Payment</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
