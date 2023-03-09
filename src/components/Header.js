import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap'
import Products from './Products'
import Payment from './Payment'

function Header() {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [showPayment, setShowPayment] = useState(false)

  const selectedProductsCount = selectedProducts.length

  const handlePayment = () => {
    setShowPayment(true)
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShopEase</Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink>
              <Button 
                className='btn btn-light justify-content-end' 
                onClick={handlePayment}
              >
                Count: {selectedProductsCount}
              </Button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      {showPayment ? (
        <Payment products={selectedProducts} total={selectedProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)} />
      ) : (
        <Products
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      )}
    </>
  )
}

export default Header
