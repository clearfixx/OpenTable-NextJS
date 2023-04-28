import Navbar from "@/app/components/Navbar/Navbar";
import RestaurantHeader from "./components/RestaurantHeader/RestaurantHeader";
import RestaurantNavBar from "./components/RestaurantNavBar/RestaurantNavBar";
import RestaurantTitle from "./components/RestaurantTitle/RestaurantTitle";
import RestaurantRating from "./components/RestaurantRating/RestaurantRating";
import RestaurantDescription from "./components/RestaurantDescription/RestaurantDescription";
import RestaurantImages from "./components/RestaurantImages/RestaurantImages";
import RestaurantReviews from "./components/RestaurantReviews/RestaurantReviews";
import ReservationCard from "./components/ReservationCard/ReservationCard";

const RestaurantDetail = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <RestaurantHeader />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <RestaurantTitle />
            <RestaurantRating />
            <RestaurantDescription />
            <RestaurantImages />
            <RestaurantReviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
};

export default RestaurantDetail;
