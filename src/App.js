import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import ProductListing from "./pages/productListing/ProductListing";
import Profile from "./pages/profile/Profile";
import Product from "./pages/individualProduct/Product";
import Nav from "./components/navbar/Nav";
import Private from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <ToastContainer
          position="top-right"
          autoClose={30}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
        />
        <ToastContainer />
        <Routes>
          <Private path="/" element={<ProductListing />} />
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
