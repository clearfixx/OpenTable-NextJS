import Navbar from "@/app/components/Navbar/Navbar";
import ReserveHeader from "./Components/ReserveHeader/ReserveHeader";
import ReservForm from "./Components/ReserveForm/ReservForm";

const ReservationPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ReserveHeader />
            <ReservForm />
          </div>
        </div>
      </main>
    </main>
  );
};

export default ReservationPage;
