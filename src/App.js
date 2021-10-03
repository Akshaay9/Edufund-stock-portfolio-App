import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import ProductListing from "./pages/productListing/ProductListing";
import Profile from "./pages/profile/Profile";
import Product from "./pages/individualProduct/Product";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing/signup" element={<Landing />} />
          <Route path="/landing/login" element={<Landing />} />
          <Route path="/" element={<ProductListing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
