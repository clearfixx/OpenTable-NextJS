import SearchRestaurantCard from "./components/SearchRestaurantCard/SearchRestaurantCard";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import SearchSidebar from "./components/SearchSidebar/SearchSidebar";
import { prisma } from "../api/prismaClient";
import { ISearchPageInterfaces } from "../interfaces/SearchPageInterfaces/SearchPageInterfaces";

const fetchRestaurantByCity = (
  city: string
): Promise<ISearchPageInterfaces[]> => {
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
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
};

const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurantByCity(searchParams.city);
  console.log({ restaurants });
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar />
        <div className="w-5/6">
          {restaurants.map((restaurant) => (
            <SearchRestaurantCard
              key={restaurant.id.toString()}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
