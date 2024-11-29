import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { lazy, Suspense, useState } from "react";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <Suspense fallback={<div>loading...</div>}>
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
