import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import ProductListing from "./pages/productListing/ProductListing";
import Profile from "./pages/profile/Profile";
import Product from "./pages/individualProduct/Product";
import Nav from "./components/navbar/Nav";
import Private from "./PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>

          <Private  path="/" element={<ProductListing />} />
          <Private path="/profile" element={<Profile />} />
          <Private path="/product/:id" element={<Product />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing/signup" element={<Landing />} />
          <Route path="/landing/login" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
