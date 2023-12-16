/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Test from "./pages/Test"
//import { PrivateRoute } from "./components/PrivateRoute.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
