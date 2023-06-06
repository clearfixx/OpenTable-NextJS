import { Review } from "@prisma/client";
import RestaurantReviewCard from "../RestaurantReviewCard/RestaurantReviewCard";

const RestaurantReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        What {reviews.length} {reviews.length === 1 ? "person" : "people"} are
        saying
      </h1>
      <div>
        {/* REVIEW CARD */}
        {reviews.map((review) => (
          <RestaurantReviewCard review={review} key={review.id} />
        ))}
        {/* REVIEW CARD */}
      </div>
    </div>
  );
};

export default RestaurantReviews;
