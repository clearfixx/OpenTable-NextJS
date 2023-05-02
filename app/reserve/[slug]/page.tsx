import ReserveHeader from "./Components/ReserveHeader/ReserveHeader";
import ReservForm from "./Components/ReserveForm/ReservForm";
import styles from "./ReservationPage.module.scss";

const ReservationPage = () => {
  return (
    <>
      <div className={styles.reservation_page_wrapper}>
        <div className={styles.reservation_page_main}>
          <ReserveHeader />
          <ReservForm />
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
