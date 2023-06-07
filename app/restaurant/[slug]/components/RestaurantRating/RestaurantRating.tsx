import StarsComponent from "@/app/components/StarsComponent/StarsComponent";
import { calculateReviewRatingAverage } from "@/utils/CalculateReviewRating/CalculateReviewRatingAverage";
import { Review } from "@prisma/client";

const RestaurantRating = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 mr-2 flex items-center">
        <p>{calculateReviewRatingAverage(reviews).toFixed(1)}</p>
      </div>
      <div className="flex items-center">
        <StarsComponent reviews={reviews} />
        <p className="text-reg ml-4">
          {reviews.length} Review{reviews.length === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
};

export default RestaurantRating;
