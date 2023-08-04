import React from "react";
import Filter from "./Filter";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const productList = [
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
  const { categoryName } = useParams();

  return (
    <>
      <div className="productList">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-4">
              <Filter />
            </div>
            <div className="col-8">
              <h2 className="text-center product-category-title">
                Showing Results for {categoryName} Category
              </h2>
              <div className="product-list-wrapper">
                <div className="product-list-box">
                  {productList.map((product) => (
                    <div className="product-item">
                      <Link to={`/product/${product.id}/details`}>
                        <div className="product-img">
                          <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="product-name text-center">
                          {product.name}
                        </div>
                        <div className="product-price">
                          <i className="fa fa-inr">{product.cost}</i>
                        </div>
                        <div className="product-description">
                          {product.description}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
