import { FC } from "react";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

const cardContent = () => {
  let content = [];
  const itemsCount: number = 12;
  const key = (length: number) => {
    return Math.random().toString(36).substr(2, length);
  };
  for (let i = 0; i < itemsCount; i++) {
    const item = <RestaurantCard key={key(2).toString()} />;
    content.push(item);
  }
  return content;
};

const Home: FC = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {/* {cardContent()} */}
            <RestaurantCard />
          </div>
        </main>
      </main>
    </main>
  );
};

export default Home;