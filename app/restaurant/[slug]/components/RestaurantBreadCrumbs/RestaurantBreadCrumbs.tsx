import styles from "./RestaurantBreadCrumbs.module.scss";

const BreadCrumbs = () => {
  return (
    <nav className={styles.breadcrumbs}>
      <ol>
        <li>
          <a href="/">Home</a>
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
