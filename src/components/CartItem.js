import styles from "../css/CartItem.module.css";

export default function CartItem(props) {
  function incrementQuantity() {
    props.updateQuantity(props.product.id, props.product.quantity + 1);
  }

  function decrementQuantity() {
    props.updateQuantity(props.product.id, props.product.quantity - 1);
  }

  function handleQuantityChange(e) {
    let value = e.target.value;
    props.updateQuantity(props.product.id, Number(value));
  }

  return (
    <>
      {!!props.product.quantity && (
        <div className={styles.itemContainer}>
          <img
            className={styles.productImg}
            src={props.product.image}
            alt={props.product.name}
          />
          <div className={styles.itemDisplay}>
            <h2 className={styles.itemTitle}>{`${props.product.category} ${props.product.name}`}</h2>

            <div className={styles.quantityEditorDiv}>
              <button onClick={decrementQuantity}>-</button>
              <input
                className={styles.quantityDisplay}
                onChange={handleQuantityChange}
                type="number"
                value={props.product.quantity}
              />
              <button onClick={incrementQuantity}>+</button>
            </div>

            <p className={styles.itemPrice}>£{props.product.subtotal}</p>
          </div>
        </div>
      )}
    </>
  );
}
