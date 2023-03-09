import React from "react";
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const { count } = props;
  const navigate = useNavigate();
  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShopEase</Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink>
              <Button
                className="btn btn-light justify-content-end"
                onClick={handlePayment}
              >
                Count: {count}
              </Button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
