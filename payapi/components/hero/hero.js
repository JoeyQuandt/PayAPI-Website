import styles from "./hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className={styles.Hero}>
      <img src="./home/desktop/phone.svg" alt="phone" />
      <div className={styles.HeroText}>
        <h1 className="header3Large">
          Start building with our APIS for absolutely free.
        </h1>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
          ></input>
          <button className="primary">Schedule a Demo</button>
        </form>
        <p className="paragraph">
          Have any questions? <strong>Contact Us</strong>
        </p>
      </div>
    </section>
  );
}
