import logo from "./logo.svg";
import { lazy } from "react";
import "./App.css";
import Home from "./Pages/Home/Home.js";
import Product from "./Pages/Product/Product.js";
import Login from "./Pages/Login/Login.js";
import Pricing from "./Pages/Pricing/Pricing.js";
import Header from "./Pages/Header.js";
// import AppLayout from "./Pages/Map/AppLayout.jsx";
import Form from "./Pages/Map/Form.js";
import Countries from "./Pages/Map/Countries.js";
import City from "./Pages/Cities/City.jsx";
import CityDetail from "./Pages/Cities/CityDetail.js";
import ProtectedRoute from "./Pages/ProtectedRoute.js";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { CitiesProvider } from "./Context/CitiesContext.jsx";
const AppLayout = lazy(() => import("./Pages/Map/AppLayout.jsx"));
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<City />}></Route>
          <Route path="countries" element={<Countries />}></Route>
          <Route path="form" element={<Form />}></Route>
          <Route path="cities/:placeId" element={<CityDetail />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
