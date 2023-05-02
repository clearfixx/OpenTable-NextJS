import { Inter } from "next/font/google";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";
import Header from "./components/Header/Header";
import { PrismaClient } from "@prisma/client";
import IRestaurantCard from "./interfaces/RestaurantCardInterfaces/RestaurantCardInterfaces";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgres://postgres:GevWypFxKDYK9DIp@db.cwkbfbpzvckbgcjpnvap.supabase.co:6543/postgres",
    },
  },
});

const fetchRestaurants = async (): Promise<IRestaurantCard[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    },
  });

  return restaurants;
};

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

const Home = async () => {
  const restaurants = await fetchRestaurants();
  // console.log({ restaurants });
  return (
    <main className={inter.variable}>
      <Header />
      <div className="py-3 px-10 mt-10 flex flex-wrap justify-center">
        {/* {cardContent()} */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id.toString()}
            restaurant={restaurant}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
