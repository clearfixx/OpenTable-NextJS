import Link from "next/link";
import styles from "./RestaurantBreadCrumbs.module.scss";

const BreadCrumbs = ({ params }: any) => {
  const restaurnatName = params.slug.split("-").join(" ");
  return (
    <nav className={styles.breadcrumbs}>
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <span className={styles.inactive}>{restaurnatName}</span>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
