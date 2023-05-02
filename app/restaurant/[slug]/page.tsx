import RestaurantNavBar from "./components/RestaurantNavBar/RestaurantNavBar";
import RestaurantTitle from "./components/RestaurantTitle/RestaurantTitle";
import RestaurantRating from "./components/RestaurantRating/RestaurantRating";
import RestaurantDescription from "./components/RestaurantDescription/RestaurantDescription";
import RestaurantImages from "./components/RestaurantImages/RestaurantImages";
import RestaurantReviews from "./components/RestaurantReviews/RestaurantReviews";
import ReservationCard from "./components/ReservationCard/ReservationCard";
import { prisma } from "@/app/api/prismaClient";
import { IRestaurantPage } from "@/app/interfaces/RestaurantPageInterfaces/RestaurantPageInterfaces";
import styles from "./Layout.module.scss";

const fetchRestaurantBySlug = async (
  slug: string
): Promise<IRestaurantPage> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      main_image: true,
    },
  });

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  return restaurant;
};

const RestaurantDetail = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <>
      <div className={styles.restaurant_detail_wrapper}>
        <RestaurantNavBar slug={restaurant.slug} />
        <RestaurantTitle name={restaurant.name} />
        <RestaurantRating />
        <RestaurantDescription description={restaurant.description} />
        <RestaurantImages images={restaurant.images} name={restaurant.name} />
        <RestaurantReviews />
      </div>
      <div className={styles.reservation_card_wrapper}>
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetail;
