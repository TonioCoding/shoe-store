/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Test from "./test/Test.jsx";
import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import Account from "./pages/AccountPage.jsx";
import AdidasPage from "./pages/AdidasPage.jsx";
import Cart from "./pages/CartPage.jsx";
import JordanPage from "./pages/JordanPage.jsx";
import Membership from "./pages/MembershipPage.jsx";
import NewBalancePage from "./pages/NewBalancePage.jsx";
import NikePage from "./pages/NikePage.jsx";
import PumaPage from "./pages/PumaPage.jsx";
import ReebokPage from "./pages/ReebokPage.jsx";
import SavedShoes from "./pages/SavedShoesPage.jsx";
import Settings from "./pages/SettingsPage.jsx";
import BrandsPage from "./pages/BrandsPage.jsx";
import SalesPage from "./pages/SalesPage.jsx";
import SportsPage from "./pages/SportsPage.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ShoePage from "./pages/ShoePage.jsx";

const App = () => {
  window.onload = () => {
    const navbarHeight = document.getElementById("nav-bar").offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adidas-page" element={<AdidasPage />} />
        <Route path="/brands-page" element={<BrandsPage />} />
        <Route path="/sales-page" element={<SalesPage />} />
        <Route path="/sports-page" element={<SportsPage />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/jordan-page" element={<JordanPage />} />
        <Route path="/newbalance-page" element={<NewBalancePage />} />
        <Route path="/reebok-page" element={<ReebokPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/membership-page" element={<Membership />} />
        <Route path="/nike-page" element={<NikePage />} />
        <Route path="/puma-page" element={<PumaPage />} /> */}
        <Route
          path={"/shoes"}
          element={<ShoePage />}
        />
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
