/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Test from "./pages/Test";
import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import Account from "./pages/Account.jsx";
import AdidasPage from "./pages/AdidasPage.jsx";
import Cart from "./pages/Cart.jsx";
import JordanPage from "./pages/JordanPage.jsx";
import Membership from "./pages/Membership.jsx";
import NewBalancePage from "./pages/NewBalancePage.jsx";
import NikePage from "./pages/NikePage.jsx";
import PumaPage from "./pages/PumaPage.jsx";
import ReebokPage from "./pages/ReebokPage.jsx";
import SavedShoes from "./pages/SavedShoes.jsx";
import Settings from "./pages/Settings.jsx";
//import { PrivateRoute } from "./components/PrivateRoute.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adidas-page" element={<AdidasPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/jordan-page" element={<JordanPage />} />
          <Route path="/" element={<NewBalancePage />} />
          <Route path="/" element={<ReebokPage />} />
          <Route path="/" element={<Settings />} />
          <Route path="/" element={<Membership />} />
          <Route path="/" element={<NikePage />} />
          <Route path="/" element={<PumaPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/account" element={<Account />} />
            <Route path="/" element={<SavedShoes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
