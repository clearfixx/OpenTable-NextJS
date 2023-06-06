import IRestaurantCard from "@/app/interfaces/RestaurantCardInterfaces/RestaurantCardInterfaces";
import Link from "next/link";
import Image from "next/image";
import Price from "@/app/components/Price/Price";
import { calculateReviewRatingAverage } from "@/utils/CalculateReviewRating/CalculateReviewRatingAverage";

const RestaurantCard = ({ restaurant }: { restaurant: IRestaurantCard }) => {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);

    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else "";
  };
  return (
    <div className="border-b flex pb-5">
      <Image
        width={100}
        height={100}
        src={restaurant.main_image}
        alt={`${restaurant.name} cover image`}
        className="w-44 h-36 rounded"
      />

      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
          <p className="ml-2">
            {restaurant.reviews.length} review
            {restaurant.reviews.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <span className="mr-4">
              <Price price={restaurant.price} />
            </span>
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
