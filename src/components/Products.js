import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './Product.css'

function Products({ selectedProducts, setSelectedProducts }) {
  const [products, setProducts] = useState([])

  function increment(e, id) {
    e.preventDefault()
    let myProducts = products.map((product, i) => {
      if (product.id === id) {
        product.quantity += 1
        setSelectedProducts([...selectedProducts, product])
      }
      return product
    })
    setProducts([...myProducts])
  }

  function decrement(e, id) {
    e.preventDefault()
    let myProducts = products.map((product, i) => {
      if (product.id === id) {
        if (product.quantity > 0) {
          product.quantity -= 1
          setSelectedProducts(selectedProducts.filter((p) => p.id !== id))
        }
      }
      return product
    })
    setProducts([...myProducts])
  }

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(
        (result) => {
          let myProducts = result.data.map((product, i) => {
            return { ...product, quantity: 0 }
          })
          setProducts([...myProducts])
        },
        (err) => {
          console.log(err)
        }
      )
  }, [])

  return (
    <div className="container mt-5">
      <div className=" col-lg-12 ">
        <div className="products-grid">
          {products.map((product, i) => {
            return (
              <div key={i} className="product-card">
                <img src={product.image} alt={product.title} height={'90px'} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <div className="quantity-container">
                  <Button onClick={(e) => increment(e, product.id)}>+</Button>
                  <span>{product.quantity}</span>
                  <Button onClick={(e) => decrement(e, product.id)}>-</Button>
                </div>
                <p>Total: {(product.price * product.quantity).toFixed(2)}</p>
              </div>
            )
          })}
          <div className="text-end grand-total"></div>
        </div>
      </div>
    </div>
  )
}

export default Products
