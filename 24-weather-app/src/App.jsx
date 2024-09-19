import logo from "./logo.svg";
import { lazy } from "react";
import "./App.css";
import Form from "./Pages/Map/Form.js";
import Countries from "./Pages/Map/Countries.js";
import City from "./Pages/Cities/City.jsx";
import CityDetail from "./Pages/Cities/CityDetail.js";
import ProtectedRoute from "./Pages/ProtectedRoute.js";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { CitiesProvider } from "./Context/CitiesContext.jsx";
const AppLayout = lazy(() => import("./Pages/Map/AppLayout.jsx"));
const Home = lazy(() => import("./Pages/Home/Home.js"));
const Product = lazy(() => import("./Pages/Product/Product.js"));
const Login = lazy(() => import("./Pages/Login/Login.js"));
const Pricing = lazy(() => import("./Pages/Pricing/Pricing.js"));
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
