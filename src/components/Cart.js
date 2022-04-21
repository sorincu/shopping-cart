import styles from "../css/Cart.module.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart(props) {
  return (
    <>
      {props.showCart && (
        <div className={styles.container}>
          <p className={styles.closeBtn} onClick={props.closeCart}>x</p>
          <h1 className={styles.cartTitle}>Your <br /> Shopping <br /> Cart</h1>
          {props.cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              updateQuantity={props.updateQuantity}
            />
          ))}

          {props.cart.length > 0 ? (
            <div className={styles.totalPriceDiv}>
              <p>{`Total price is: £${props.totalPrice}`}</p>
              <Link onClick={props.closeCart} to="/" className={styles.checkoutBtn}>Checkout</Link>
            </div>
          ) : (
            <>
              <p>Cart is empty.</p>
              <Link onClick={props.closeCart} to="/products">Browse products</Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
