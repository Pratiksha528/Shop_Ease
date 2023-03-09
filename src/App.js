import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Payment from "./components/Payment";
import { useState } from "react";
import Thankyou from "./components/Thankyou";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  let total = 0;
  for (let i = 0; i < selectedProducts.length; i++) {
    total += selectedProducts[i].price * selectedProducts[i].quantity;
  }

  return (
    <div className="App">
      <Router>
        <Header selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts} />
        <Routes>
          <Route path="/" element={<Products />} selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts} />
          <Route path="/payment" element={<Payment products={selectedProducts} total={total} />} />
          <Route path="/thankyou" element={<Thankyou />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
