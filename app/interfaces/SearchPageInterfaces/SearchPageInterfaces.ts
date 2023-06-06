import { Location, Cuisine, PRICE } from "@prisma/client";

export interface ISearchPageInterfaces {

  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  
}