import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Payment from "./components/Payment";
import { useState, useEffect } from "react";
import Thankyou from "./components/Thankyou";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [count, setCount] = useState(selectedProducts.length);

  useEffect(() => {
    let total = 0;
    selectedProducts.forEach((p) => {
      total += p.quantity;
    });
    setCount(total);
  }, [selectedProducts]);

  return (
    <div className="App">
      <Router>
        <Header count={count} selectedProducts={selectedProducts} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Products
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            }
          />
          <Route
            exact
            path="/payment"
            element={<Payment products={selectedProducts} />}
          />
          <Route exact path="/thankyou" element={<Thankyou />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
