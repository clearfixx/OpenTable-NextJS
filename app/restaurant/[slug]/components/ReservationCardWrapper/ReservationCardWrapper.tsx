"use client";

import { useEffect, useState } from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import styles from "./ReservationCardWrapper.module.scss";

const ReservationCardWrapper = () => {
  const [isSticky, setIsSticky] = useState(false);

  const stickyWrapper = () => {
    let windowHeight = window.scrollY;
    windowHeight > 592 ? setIsSticky(true) : setIsSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyWrapper);
  }, []);

  return (
    <div
      className={`${styles.reservation_card_wrapper} ${
        isSticky ? "sticky" : ""
      }`}
    >
      <ReservationCard />
    </div>
  );
};

export default ReservationCardWrapper;
