import BreadCrumbs from "./components/RestaurantBreadCrumbs/RestaurantBreadCrumbs";
import RestaurantHeader from "./components/RestaurantHeader/RestaurantHeader";
import styles from "./Layout.module.scss";

const RestaurantLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string; name: string };
}) => {
  return (
    <>
      <main>
        <BreadCrumbs params={params} />
        <RestaurantHeader name={params.slug} />
        <div className={styles.layout}>{children}</div>
      </main>
    </>
  );
};

export default RestaurantLayout;
