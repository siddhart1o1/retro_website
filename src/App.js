import LoginScreen from "./Screens/LoginScreen";
import SignUpPage from "./Screens/SignUpPage";
import Navbar from "./components/General/Navbar";
import HomePage from "./Screens/HomePage";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <SignUpPage></SignUpPage> */}
      <HomePage></HomePage>
    </div>
  );
}

export default App;
