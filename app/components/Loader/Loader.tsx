import styles from "./Loader.module.scss";
import Header from "../Header/Header";

const Loader = () => {
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            className="animate-puls bg-slate-200 w-52 h-72 m-3 rounded overflow-hidden border cursor-pointer"
            key={num}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default Loader;
