import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Payment(props) {
  const { products } = props;
  const navigate = useNavigate();

  const total = products.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);

  const handlePurchase = () => {
    navigate('/thankyou');
  };

  return (
    <div className="container mt-5">
      <h2>Payment Details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={4} className="text-end"><b>Total:</b></td>
            <td>{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>

      <Button onClick={handlePurchase}>Purchase</Button>
    </div>
  );
}

export default Payment;
