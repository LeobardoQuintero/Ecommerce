import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import AllProduct from "./Components/AllProducts";
import { getAllProducts } from "./API";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Components/Cart";
import CheckoutPage from "./Components/CheckoutPage";
import Categories from "./Components/Categories";
import CategoriesDropdown from "./Components/CategoriesDropdown";
import Register from "./Components/Register";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      const userObj = JSON.stringify(user);
      localStorage.setItem("user", userObj);
      const carArr = JSON.stringify(cart);
      localStorage.setItem("cart", carArr);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }, [token, cart, user]);
  return (
    <>
      <div>
        <Navbar token={token} setToken={setToken} />
        <CategoriesDropdown />
        <Routes>
          <Route
            path="/"
            element={
              <AllProduct products={products} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="/Login"
            element={
              <Login setToken={setToken} setUser={setUser} setCart={setCart} />
            }
          />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/products/:productId"
            element={<SingleProduct setCart={setCart} cart={cart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} products={products} setCart={setCart} />}
          />
          <Route path="/checkout" element={<CheckoutPage />} />

          <Route
            path="/categories/:categoryItem"
            element={
              <Categories products={products} setCart={setCart} cart={cart} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
