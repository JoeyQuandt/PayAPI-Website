import styles from "./style.navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <Image
        className={styles.logo}
        src="./logo.svg"
        alt="logo"
        width={135}
        height={38}
      />
      <ul className={styles.navLinks}>
        <Link href="/">Pricing</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </ul>
      <Image
        className={styles.hamburger}
        src="./hamburger.svg"
        alt="hamburger"
        width={28}
        height={17}
      />
      <button className="primary">Schedule a Demo</button>
    </nav>
  );
}
