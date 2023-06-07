import fullStar from "@/public/icons/full-star.png";
import halfStar from "@/public/icons/half-star.png";
import emptyStar from "@/public/icons/empty-star.png";
import Image, { StaticImageData } from "next/image";
import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "@/utils/CalculateReviewRating/CalculateReviewRatingAverage";

export default function StarsComponent({
  reviews,
  rating,
}: {
  reviews: Review[];
  rating?: number;
}) {
  const reviewRating: number = rating || calculateReviewRatingAverage(reviews);

  const renderStars = () => {
    const stars = [];

    for (let i: number = 0; i < 5; i++) {
      const difference: number = parseFloat((reviewRating - i).toFixed(1));
      if (difference >= 1) stars.push(fullStar);
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) stars.push(emptyStar);
        else if (difference > 0.2 && difference < 0.6) stars.push(halfStar);
        else stars.push(fullStar);
      } else stars.push(emptyStar);
    }

    return stars.map((star: StaticImageData, i: number) => {
      return (
        <li key={i} className="mr-[2px]">
          <Image src={star} width={12} height={12} alt={""} />
        </li>
      );
    });
  };

  return (
    <>
      <ul className="flex flex-row m-0 p-0">{renderStars()}</ul>
    </>
  );
}
