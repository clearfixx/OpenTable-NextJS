import Link from "next/link";

import styles from "./RestaurantNavBar.module.scss";

const RestaurantNavBar = ({ slug }: { slug: string }) => {
  return (
    <nav className={styles.restaurant_nav_bar}>
      <Link href={`/restaurant/${slug}`} className="mr-7 font-lg">
        Overview
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className="mr-7">
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavBar;
