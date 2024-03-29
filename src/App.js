import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./Login";
import Otp from "./Otp";
import RouteDecider from "./components/RouteDecider";
import DetailsForm from "./components/DetailsForm";
import Addresses from "./components/Adresses";
import AddProduct from "./components/AddProduct";
import Carousel from "./library/Carousel";
import AllProducts from "./components/AllProducts";
import Logo from "./icon/react-svg-icon/Logo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="route-decider" element={<RouteDecider />} />
          <Route path="/details-page" element={<DetailsForm />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
      <Logo />
      {/* <div>
        <img src="./assets/annimated final.svg"></img>
      </div> */}
    </>
  );
}

export default App;
