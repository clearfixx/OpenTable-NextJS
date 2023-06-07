import { Inter } from "next/font/google";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";
import Header from "./components/Header/Header";
import { PrismaClient } from "@prisma/client";
import IRestaurantCard from "./interfaces/RestaurantCardInterfaces/RestaurantCardInterfaces";
import { prisma } from "./api/prismaClient";

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
      reviews: true,
    },
  });

  return restaurants;
};

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

const Home = async () => {
  const restaurants = await fetchRestaurants();
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
