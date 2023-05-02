import RestaurantNavBar from "../components/RestaurantNavBar/RestaurantNavBar";
import Menu from "../components/Menu/Menu";
import { prisma } from "@/app/api/prismaClient";
import styles from "./Menu.module.scss";

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  return restaurant.items;
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug);
  return (
    <>
      <div className={styles.restaurant_menu_wrapper}>
        <RestaurantNavBar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
};

export default RestaurantMenu;
