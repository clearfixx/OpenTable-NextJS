import { Cuisine, Location, PRICE } from "@prisma/client";
import styles from "./Searchsidebar.module.scss";
import Link from "next/link";

const SearchSidebar = ({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) => {
  const priceClassName: string =
    "border w-full text-reg text-center font-light p-2 hover:border-[1px] hover:border-black";
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: `${priceClassName} rounded-l`,
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className: `${priceClassName}`,
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className: `${priceClassName} rounded-r`,
    },
  ];
  return (
    <aside className={styles.aside}>
      <div className={styles.query_block}>
        <h1 className={styles.query_block_title}>Region</h1>
        {locations.map((location: Location) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            key={location.id.toString()}
            className={styles.search_query_item}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className={styles.query_block}>
        <h1 className={styles.query_block_title}>Cuisine</h1>
        {cuisines.map((cuisine: Cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            key={cuisine.id.toString()}
            className={styles.search_query_item}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className={styles.query_block}>
        <h1 className={styles.query_block_title}>Price</h1>
        <div className="flex">
          {prices.map(
            ({
              price,
              label,
              className,
            }: {
              price: PRICE;
              label: string;
              className: string;
            }) => (
              <>
                <Link
                  href={{
                    pathname: "/search",
                    query: {
                      ...searchParams,
                      price,
                    },
                  }}
                  className={className}
                >
                  {label}
                </Link>
              </>
            )
          )}
        </div>
      </div>
    </aside>
  );
};

export default SearchSidebar;
