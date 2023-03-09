import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Product.css";

function Products({ selectedProducts, setSelectedProducts }) {
  const [products, setProducts] = useState([]);

  function increment(id) {
    setProducts(
      products.map((p) => {
        if (p.id === id) {
          p.quantity += 1;
        }
        return p;
      })
    );

    if (selectedProducts.find((p) => p.id === id)) {
      if (products.find((p) => p.id === id)) {
        setSelectedProducts(selectedProducts.filter((p) => p.id !== id));
        setSelectedProducts((selectedProducts) => [
          ...selectedProducts,
          products.find((p) => p.id === id),
        ]);
      }
    } else {
      setSelectedProducts((selectedProducts) => [
        ...selectedProducts,
        products.find((p) => p.id === id),
      ]);
    }
  }

  function decrement(id) {
    setProducts(
      products.map((p) => {
        if (p.id === id && p.quantity > 0) {
          p.quantity -= 1;
        }
        return p;
      })
    );

    if (selectedProducts.find((p) => p.id === id)) {
      if (products.find((p) => p.id === id)) {
        setSelectedProducts(selectedProducts.filter((p) => p.id !== id));
        setSelectedProducts((selectedProducts) => [
          ...selectedProducts,
          products.find((p) => p.id === id),
        ]);
      }
    }
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(
      (result) => {
        let myProducts = result.data.map((product, i) => {
          return { ...product, quantity: 0 };
        });
        setProducts(myProducts);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className="container mt-5">
      <div className=" col-lg-12 ">
        <div className="products-grid">
          {products.map((product, i) => {
            return (
              <div key={i} className="product-card">
                <img src={product.image} alt={product.title} height={"90px"} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <div className="quantity-container">
                  <Button onClick={increment.bind(this, product.id)}>+</Button>
                  <span>{product.quantity}</span>
                  <Button onClick={decrement.bind(this, product.id)}>-</Button>
                </div>
                <p>Total: {(product.price * product.quantity).toFixed(2)}</p>
              </div>
            );
          })}
          <div className="text-end grand-total"></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
