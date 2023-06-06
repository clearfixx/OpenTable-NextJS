import { Review } from "@prisma/client";

export interface IRestaurantPage {

  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  main_image: string;
  reviews: Review[];
  
}