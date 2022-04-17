import React from "react";
import { Button } from "react-bootstrap";
import './Product.css';

const Product = (props) => {
  const { image, title, price, description } = props.product;
  const {setCartCount} = props;
  return (
    <div className="container">
      <div className="row row-cols-3">
          <div className="card col-md-4">
              <div className="card-body">
                  <img src={image} alt={title} />
                  <h2>{title.slice(0,13)}</h2>
                  <h1>{price} USD</h1>
                  <p>{description.slice(0,150)}</p>
                  <Button onClick={setCartCount}>Add to Cart</Button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Product;
