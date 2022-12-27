import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function footer() {
  return (
    <footer className={styles.footer}>
      <Image src="./logo_white.svg" alt="logo" width={135} height={38} />
      <ul className={styles.footerLinks}>
        <Link href="/">Pricing</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </ul>
      <div className={styles.footerSocials}>
        <Image
          src="./shared/desktop/facebook.svg"
          alt="facebook"
          width={24}
          height={24}
        />
        <Image
          src="./shared/desktop/twitter.svg"
          alt="twitter"
          width={24}
          height={24}
        />
        <Image
          src="./shared/desktop/linkedin.svg"
          alt="linkedin"
          width={24}
          height={24}
        />
      </div>
    </footer>
  );
}
