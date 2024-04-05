import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import AllProduct from "./Components/AllProducts";
import { getAllProducts } from "./API";
import SingleProduct from "./Components/SingleProduct";
import Register from "./Components/Register";


function App() {
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    fetchAllProducts();
  },[]);


  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);
  return (
    <>
      <Navbar token={token} setToken={setToken} />
      <div>
        <Routes>
          <Route path="/" element={<AllProduct products={products}/>} />
          <Route path="/Login" element={<Login setToken={setToken} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/:productId" element={<SingleProduct/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
