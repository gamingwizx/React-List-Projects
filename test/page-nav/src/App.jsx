import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import FallbackPage from "./components/FallbackPage.jsx";
import Applayout from "./pages/Applayout.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Child from "./pages/Child.jsx";
import Id from "./pages/Id.jsx"

const Services = lazy(() => import("./pages/Services.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<FallbackPage />}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="services" element={<Services />}>
            <Route path="child" element={<Child />} />
          </Route>
          <Route path="product" element={<Product />}>
            <Route path="child" element={<Child />} />
          </Route>
            <Route path=":id" element={<Id />} />
          <Route path="login" element={<Applayout />}>
            <Route path="child" element={<Child />} />
            <Route path="child/:id" element={<Applayout />} />
          </Route>
          <Route path="*" element={<PageNotFound />}>
            
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
