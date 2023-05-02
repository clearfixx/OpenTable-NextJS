import { PRICE } from "@prisma/client";

const Price = ({ price }: { price: PRICE }) => {
  const renderPrice = () => {
    if (price === "CHEAP") {
      return (
        <>
          <span className="text-black font-semibold">$$</span>
          <span className="text-grey-100 opacity-30">$$</span>
        </>
      );
    }

    if (price === "REGULAR") {
      return (
        <>
          <span className="text-black font-semibold">$$$</span>
          <span className="text-grey-100 opacity-30">$</span>
        </>
      );
    }

    if (price === "EXPENSIVE") {
      return (
        <>
          <span className="text-black font-semibold">$$$$</span>
        </>
      );
    }

    return (
      <>
        <span className="text-grey-100 opacity-30">$$$$</span>
      </>
    );
  };

  return <p className="flex mr-3">{renderPrice()}</p>;
};

export default Price;
