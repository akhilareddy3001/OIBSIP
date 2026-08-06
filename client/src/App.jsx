import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Menu from "./pages/user/Menu";
import PizzaDetails from "./pages/user/PizzaDetails";
import CreatePizza from "./pages/user/CreatePizza";
import Cart from "./pages/user/Cart";
import Checkout from "./pages/user/Checkout";
import OrderSuccess from "./pages/user/OrderSuccess";
import Login from "./pages/user/Login";

import Orders from "./pages/user/Orders";
import OrderDetails from "./pages/user/OrderDetails";
function App() {
  return (
    <BrowserRouter>

    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pizza/:id" element={<PizzaDetails />} />
        <Route path="/create-pizza" element={<CreatePizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id"element={<OrderDetails />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;