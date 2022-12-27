import styles from "./about.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.article}>
        <img
          src="./home/desktop/illustration-easy-to-implement.svg"
          alt="code"
        />
        <h2 className="header3Large">Easy to implement</h2>
        <p>
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
      <div className={styles.article}>
        <img src="./home/desktop/illustration-simple-ui.svg" alt="code" />
        <h2 className="header3Large">Simple UI & UX</h2>
        <p>
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </div>
    </section>
  );
}
