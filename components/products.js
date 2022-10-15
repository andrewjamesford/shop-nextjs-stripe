import React from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";
import { useEffect } from "react";

export const Products = ({ products }) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <>
      {products.length ? (
        <ul className={styles.products}>
          {products.map((product) => (
            <li key={product.id}>
              <form action="/api/checkout_sessions" method="POST">
                <Image
                  src={product.images[0]}
                  alt={`Image of ${product.name}`}
                  layout={"responsive"}
                  width={0}
                  height={0}
                  priority={true}
                />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button type="submit" role="link" className={styles.link}>
                  Buy Now
                </button>
                <input
                  type="hidden"
                  name="priceId"
                  value={product.default_price}
                />
              </form>
            </li>
          ))}
        </ul>
      ) : (
        <div>No products</div>
      )}
    </>
  );
};
