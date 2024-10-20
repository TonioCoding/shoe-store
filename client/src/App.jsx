import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Test from "./test/Test.jsx";
import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import Account from "./pages/AccountPage.jsx";
import Cart from "./pages/CartPage.jsx";
import SavedShoes from "./pages/SavedShoesPage.jsx";
import BrandsPage from "./pages/BrandsPage.jsx";
import SalesPage from "./pages/SalesPage.jsx";
import SportsPage from "./pages/SportsPage.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ShoesPage from "./pages/ShoesPage.jsx";
import MembershipPage from "./pages/MembershipPage.jsx";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer.jsx";
import ShoePage from "./pages/ShoePage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";

const App = () => {
  const navbarRef = useRef(null);
  const [navbarRefHeight, setNavbarRefHeight] = useState(null);

  useEffect(() => {
    setNavbarRefHeight(navbarRef.current.offsetHeight);
    document.body.style.paddingTop = `${navbarRef.current.offsetHeight}px`;
  }, [navbarRefHeight]);

  return (
    <BrowserRouter>
      <NavBar ref={navbarRef} navbarRefHeight={navbarRefHeight} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/sports-page" element={<SportsPage />} />
        <Route path="/brands-page" element={<BrandsPage />} />
        <Route path="/sales-page" element={<SalesPage />} />
        <Route path="/membership-page" element={<MembershipPage />} />
        <Route path="/shoe-page" element={<ShoePage />} />
        <Route path="/adidas-page" element={<ShoesPage brand="Adidas" />} />
        <Route path="/jordan-page" element={<ShoesPage brand="Jordan" />} />
        <Route
          path="/newbalance-page"
          element={<ShoesPage brand="New Balance" />}
        />
        <Route path="/reebok-page" element={<ShoesPage brand="Reebok" />} />
        <Route path="/nike-page" element={<ShoesPage brand="Nike" />} />
        <Route path="/puma-page" element={<ShoesPage brand="Puma" />} />
        <Route path={"/shoes"} element={<ShoesPage />} />
        <Route path="/saved-shoes" element={<SavedShoes />} />
        <Route path="/test" element={<Test />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-center"
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
