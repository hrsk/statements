import styles from "./Home.module.scss";
import Image from "next/image";
import Calculate from "./../../../assets/images/calculate.png";

export const Home = () => {
  return (
    <section className={styles.content}>
      <h1 className={styles.contentTitle}>Welcome to My statement</h1>
      <Image src={Calculate} width={440} height={474} alt="" />
      <p className={styles.contentText}>
        Now that you are logged in, you can view your statement and change you
        profile. Enjoy!
      </p>
    </section>
  );
};
