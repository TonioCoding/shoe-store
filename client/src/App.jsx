/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
//import { PrivateRoute } from "./components/PrivateRoute.js";
import HomePage from "./pages/HomePage.jsx";

function App() {
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
