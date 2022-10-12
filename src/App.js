import LoginScreen from "./Screens/LoginScreen";
import SignUpPage from "./Screens/SignUpPage";
import Navbar from "./components/General/Navbar";
import HomePage from "./Screens/HomePage";
import ProductPage from "./Screens/ProductPage";
import { Navigate, Routes, Route } from "react-router-dom";
import SellProduct from "./Screens/SellProduct";
import ChatScreen from "./Screens/ChatScreen";
import LikedProducts from "./Screens/likedProducts";
import SearchPage from "./Screens/SearchPage";
import Dashboard from "./Screens/Dashboard";
import UserChats from "./Screens/UserChats";

function App() {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/:category" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/search" element={<SearchPage />} />
      

        {user ? (
          <>
            <Route path="/sell" element={<SellProduct />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/chat/:id" element={<ChatScreen />} />
            <Route path="/user/liked" element={<LikedProducts />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/chats" element={<UserChats />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
