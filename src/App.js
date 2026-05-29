import {Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SkinCare from "./pages/SkinCare";
import OnSale from "./pages/OnSale";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import Brands from "./pages/Brands";
import Makeup from "./pages/Makeup";
import HairCare from "./pages/HairCare";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import BrandPage from "./pages/BrandPage";
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OnSale" element={<OnSale />} />
        <Route path="/SkinCare" element={<SkinCare />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/Makeup" element={<Makeup />} />
        <Route path="/Haircare" element={<HairCare />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/brands/:brandName" element={<BrandPage />}
/>
      </Routes>
  );
}

export default App;