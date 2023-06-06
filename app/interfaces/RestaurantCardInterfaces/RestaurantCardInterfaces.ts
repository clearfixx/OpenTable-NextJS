import { Cuisine, Location, PRICE, Review } from "@prisma/client";

export default interface IRestaurantCard {

  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;  
  slug: string;
  reviews: Review[];
}

export interface RestaurantCardProps {

  restaurant: IRestaurantCard;
  
}