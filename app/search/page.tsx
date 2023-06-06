import SearchRestaurantCard from "./components/SearchRestaurantCard/SearchRestaurantCard";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import SearchSidebar from "./components/SearchSidebar/SearchSidebar";
import { prisma } from "../api/prismaClient";
import { ISearchPageInterfaces } from "../interfaces/SearchPageInterfaces/SearchPageInterfaces";
import Link from "next/link";
import { PRICE } from "@prisma/client";

interface ISearchParams {
  city?: any;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantByCity = (searchParams: ISearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    price: true,
    slug: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany({});
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany({});
};

const Search = async ({ searchParams }: { searchParams: ISearchParams }) => {
  const restaurants = await fetchRestaurantByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <SearchRestaurantCard
                  key={restaurant.id.toString()}
                  restaurant={restaurant}
                />
              ))}
            </>
          ) : (
            <>
              <div className="flex flex-col w-100 text-center pt-7 items-center">
                <h1 className="font-bold text-4xl my-5 mb-10">
                  Sorry, we found no restaurants in this area..
                </h1>
                <p className="text-3xl mb-10 font-semibold">
                  Try to find in other locations
                </p>
                <Link
                  className="text-white bg-red-700 py-4 px-20 font-semibold w-[320px] rounded hover:bg-red-800"
                  href="/"
                >
                  Or go to homepage
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
