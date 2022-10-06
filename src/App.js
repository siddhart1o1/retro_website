import LoginScreen from "./Screens/LoginScreen";
import SignUpPage from "./Screens/SignUpPage";
import Navbar from "./components/General/Navbar";
import HomePage from "./Screens/HomePage";
import ProductPage from "./Screens/ProductPage";
import { Routes, Route } from "react-router-dom";
import SellProduct from "./Screens/SellProduct";

function App() {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginScreen />} />
        {user ? (
          <>
            <Route path="/sell" element={<SellProduct />} />
            <Route path="/:category" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </>
        ) : (
          <>NOT ALLOWD</>
        )}
      </Routes>
    </div>
  );
}

export default App;
