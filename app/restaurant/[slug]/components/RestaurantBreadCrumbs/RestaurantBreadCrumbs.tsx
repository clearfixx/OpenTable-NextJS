import Link from "next/link";
import styles from "./RestaurantBreadCrumbs.module.scss";

const BreadCrumbs = () => {
  return (
    <nav className={styles.breadcrumbs}>
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="#">Restaurants</a>
        </li>
        <li>
          <a>Restaurant Nane</a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
