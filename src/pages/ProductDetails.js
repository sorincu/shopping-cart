import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import styles from "../css/ProductDetails.module.css";

export default function ProductDetails(props) {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  const [imageNumber, setImageNumber] = useState(0);

  function moveLeft() {
    if (imageNumber === 0) {
      setImageNumber(product.gallery.length - 1);
      return;
    }

    setImageNumber(imageNumber - 1);
  }

  function moveRight() {
    if (imageNumber === product.gallery.length - 1) {
      setImageNumber(0);
      return;
    }

    setImageNumber(imageNumber + 1);
  }

  return (
    <div className={styles.content}>
      <div className="image">
        <img
          className={styles.productImage}
          src={product.gallery[imageNumber]}
          alt={product.name}
        />
        <div className={styles.imageNavButtons}>
          <button onClick={moveLeft}>{"<"}</button>
          <button onClick={moveRight}>{">"}</button>
        </div>

        <h2 className={styles.photoOrderNumber}>{`${imageNumber + 1} / ${
          product.gallery.length
        }`}</h2>
      </div>

      <div className="details">
        <div className={styles.productTitleOutterContainer}>
          <div className={styles.productTitleInnerContainer}>
            <h2
              className={styles.productTitle}
            >{`${product.category} ${product.name}`}</h2>
            <p>£{product.price}</p>
          </div>

          <button
          className={styles.addToCartBtn}
          onClick={() => props.addToCart(product)}
        >
          Add to Cart
        </button>
        </div>
        
        <div className={styles.productDescription}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque
            repudiandae itaque dolorem nihil, voluptas corporis tempora
            provident optio harum modi inventore esse nostrum exercitationem
            magnam tempore odio laborum velit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            voluptate neque harum. Quam facere accusamus exercitationem in
            quidem mollitia eligendi porro eos voluptates iure incidunt,
            laudantium sed harum omnis quasi?
          </p>
        </div>
      </div>
    </div>
  );
}
