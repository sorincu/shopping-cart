import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// css
import styles from "./css/App.module.css";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

// components
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  function addToCart(product) {
    let productFound = false;

    for (let i = 0; i < cart.length; i++) {
      if (product.id === cart[i].id) {
        cart[i].quantity++;
        cart[i].subtotal = cart[i].price * cart[i].quantity;
        productFound = true;
        setCart([...cart]);
        break;
      }
    }

    if (!productFound) {
      product.quantity = 1;
      product.subtotal = product.price;
      setCart([...cart, product]);
    }
  }

  function calculateTotalPrice() {
    let sum = 0;

    cart.forEach((product) => {
      sum += product.subtotal;
    });

    setTotalPrice(sum);
  }

  function updateQuantity(productId, quantity) {
    if (quantity === 0) {
      setCart(cart.filter((product) => product.id !== productId));
      return;
    }

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) {
        cart[i].quantity = quantity;
        cart[i].subtotal = cart[i].price * cart[i].quantity;
        setCart([...cart]);
        break;
      }
    }
  }

  function openCart() {
    setShowCart(true);
  }

  function closeCart() {
    setShowCart(false);
  }

  return (
    <div className={styles.mainDiv}>
      <nav>
        <Link to="/" className={styles.logo}>
          SYNTHESIS
        </Link>

        <div className={styles.navButtons}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <p id={styles.cartBtn} onClick={openCart}>
            {`Cart-${cart.length}`}
          </p>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route
          path="/products/all/:productId/*"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryId" element={<Products />} />
      </Routes>

      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cart={cart}
        totalPrice={totalPrice}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;
