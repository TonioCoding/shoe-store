/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Test from "./test/Test.jsx";
import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import Account from "./pages/AccountPage.jsx";
import Cart from "./pages/CartPage.jsx";
import SavedShoes from "./pages/SavedShoesPage.jsx";
import Settings from "./pages/SettingsPage.jsx";
import BrandsPage from "./pages/BrandsPage.jsx";
import SalesPage from "./pages/SalesPage.jsx";
import SportsPage from "./pages/SportsPage.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ShoePage from "./pages/ShoesPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import MembershipPage from "./pages/MembershipPage.jsx";
import { useEffect } from "react";

const App = () => {
  window.onload = () => {
    const navbarHeight = document.getElementById("nav-bar").offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  };

  useEffect(() => {
    const navbarHeight = document.getElementById("nav-bar").offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sports-page" element={<SportsPage />} />
        <Route path="/brands-page" element={<BrandsPage />} />
        <Route path="/sales-page" element={<SalesPage />} />
        <Route path="/membership-page" element={<MembershipPage />} />
        <Route path="/adidas-page" element={<ShoePage brand="Adidas" />} />
        <Route path="/jordan-page" element={<ShoePage brand="Jordan" />} />
        <Route
          path="/newbalance-page"
          element={<ShoePage brand="New Balance" />}
        />
        <Route path="/reebok-page" element={<ShoePage brand="Reebok" />} />
        <Route path="/nike-page" element={<ShoePage brand="Nike" />} />
        <Route path="/puma-page" element={<ShoePage brand="Puma" />} />
        <Route path={"/shoes"} element={<ShoePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/account" element={<Account />} />
          <Route path="/saved-shoes" element={<SavedShoes />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      ></ToastContainer>
    </BrowserRouter>
  );
};

export default App;
