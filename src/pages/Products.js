import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../css/Products.module.css";

// data
import products from "../data/products";
import categories from "../data/categories";

export default function Products() {
  const { categoryId } = useParams();
  const category = categories.find((category) => category.id === categoryId);
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const productsByCategory = products.filter(
        (product) => product.categoryId === categoryId
      );

      setProductsByCategory(productsByCategory);
    } else {
      const productsByCategory = products;

      setProductsByCategory(productsByCategory);
    }
  }, [categoryId]);

  return (
    <div className={styles.content}>
      <div className={styles.sidebar}>
        <p>Shop /</p>
        <h3 className={styles.categoryName}>
          {category ? category.name : "Products"}
        </h3>

        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category}>
              <Link to={`/products/${category.id}`}>{category.name}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.products}>
        {productsByCategory.map((p) => (
          <div key={p.id} className={styles.productDiv}>
            <Link to={`/products/all/${p.id}`}>
              <img
                src={p.image}
                onMouseOver={(e) => (e.currentTarget.src = p.previewImage)}
                onMouseOut={(e) => (e.currentTarget.src = p.image)}
                className={styles.productImg}
                alt="product"
              />
              <div className={styles.productText}>
                <h3>{`${p.category} ${p.name}`}</h3>
                <p>£{p.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
