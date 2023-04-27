import Link from "next/link";
import { FC } from "react";

import styles from "./RestaurantNavBar.module.scss";

const RestaurantNavBar: FC = () => {
  return (
    <nav className={styles.restaurant_nav_bar}>
      <Link href="/restaurant/milestone-grill" className="mr-7 font-lg">
        Overview
      </Link>
      <Link href="/restaurant/milestone-grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavBar;
