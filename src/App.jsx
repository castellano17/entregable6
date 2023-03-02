import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Purchases from "./pages/Purchases";
import Cart from "./pages/Cart";
import ProtectedUserLogged from "./componens/App/ProtectedUserLogged";
import Navbar from "./componens/Layout/Navbar";
import { useEffect } from "react";
import { getAllCartProducts } from "./store/slices/Cart.slice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./componens/Layout/Footer";
import Notification from "./componens/App/Notification";
import SignUp from "./pages/SignUp";

function App() {
  const dispatch = useDispatch();

  const { token } = useSelector((store) => store.userInfo);
  useEffect(() => {
    if (token) {
      dispatch(getAllCartProducts());
    }
  }, [token]);

  return (
    <div className="App">
      <Navbar />
      <Notification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedUserLogged />}>
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
