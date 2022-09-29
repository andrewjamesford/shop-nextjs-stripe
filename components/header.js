import React from "react";
import {
  MagnifyingGlassIcon,
  BuildingStorefrontIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import styles from "../styles/header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.mainNav}>
        <BuildingStorefrontIcon className={styles.logo} />

        <div className={styles.iconNav}>
          <nav>
            <ul>
              <li>
                <MagnifyingGlassIcon className={styles.searchIcon} />
              </li>
              <li>
                <ShoppingBagIcon className={styles.cartIcon} />
              </li>
              <li>
                <Bars3Icon className={styles.menuIcon} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
