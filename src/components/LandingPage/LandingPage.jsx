import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import axios from "axios";
const LandingPage = () => {
  const categories = [
    "Electronics",
    "Apparel",
    "Fashion",
    "Footwear",
    "Kids",
    "Homecare",
    "Skincare",
  ];

  async function getData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home container">
      <div className="row">
        <div className="col-12">
          <h2 className="home-title">Welcome to Shop</h2>
        </div>
        <div className="col-12">
          <div className="category-list">
            <div className="category-item">
              <Link to="/products/all">All Products</Link>
            </div>

            {categories.map((category) => (
              <div className="category-item" key={category}>
                <Link to={`/products/${category}`} className="text-white">
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <div className="category-title">Select a category</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
