import LoginScreen from "./Screens/LoginScreen";
import SignUpPage from "./Screens/SignUpPage";
import Navbar from "./components/General/Navbar";
import HomePage from "./Screens/HomePage";
import ProductPage from "./Screens/ProductPage";
import { Routes, Route } from "react-router-dom";
import SellProduct from "./Screens/SellProduct";

import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sell" element={<SellProduct />} />
        <Route path="/:category" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
