import { Link } from "react-router-dom";
import styles from "../css/Home.module.css";

export default function Home() {
  return (
    <div className={styles.background}>
      <h1 className={styles.mainOffer}>Erica Synths Techno System</h1>
      <h2 className={styles.mainOfferDescription}>
        An all-in-one silver bullet for producing almost limitless drum sounds,
        textures and more
      </h2>
      <Link to="/products">
        <button className={styles.mainOfferBtn}>Shop Now</button>
      </Link>
    </div>
  );
}
