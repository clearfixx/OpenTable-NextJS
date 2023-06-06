import styles from "./LoaderComponent.module.scss";

const LoaderComponent = () => {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loading_text}>Loading data...</div>
    </div>
  );
};

export default LoaderComponent;
