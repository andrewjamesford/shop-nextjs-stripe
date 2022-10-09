import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";

export const Products = ({ products }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {products.length ? (
        <ul className={styles.products}>
          {products.map((product) => (
            <li key={product.id}>
              <Image
                src={product.images[0]}
                alt={`Image of ${product.name}`}
                layout={"responsive"}
                width={0}
                height={0}
                priority={true}
              />
              <h2>{product.name}</h2>
              <a href="#" className={styles.link} onClick={handleAddToCart}>
                Add To Cart
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div>No products</div>
      )}
    </>
  );
};
