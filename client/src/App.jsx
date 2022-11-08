import Product from "./pages/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import ProductList from "./pages/ProductList";
import Shop from "./pages/Shop";

import SignUp from "./components/Signup";
import { useSelector } from "react-redux";
import { Search } from "./components/Search";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // const user = false;

  return (
    <>
      <Router>
        <Routes>
          {/* {user && <Route path="/" exact element={<Main />} />} */}
          {/* <Route path="/" element={<Navigate replace to="/Login" />} /> */}

          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />}>
            <Route path=":category" element={<ProductList />} />
          </Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
