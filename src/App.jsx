import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Purchases from "./pages/Purchases";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <h2>Ecommerce</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
