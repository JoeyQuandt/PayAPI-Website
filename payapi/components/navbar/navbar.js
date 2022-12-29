import React from "react";
import styles from "./style.navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useScroll, motion } from "framer-motion";
import { useEffect } from "react";

export default function Navbar() {
  /*Navigation bar*/
  const [hidden, setHidden] = React.useState(false);
  const { scrollY } = useScroll();
  /*Update function scroll onchange*/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const [menu, setMenu] = React.useState(false);
  function handleClick() {
    setMenu((prevMenu) => !prevMenu);
  }
  return (
    <>
      <motion.nav
        className={styles.navBar}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -25 },
        }}
      >
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
          onClick={handleClick}
          className={styles.hamburger}
          src="./hamburger.svg"
          alt="hamburger"
          width={28}
          height={17}
        />
        <button className="primary">Schedule a Demo</button>
      </motion.nav>
      <motion.div
        className={styles.menu}
        animate={menu ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: "100%" },
        }}
      >
        <div className={styles.menuItems}>
          <Image
            onClick={handleClick}
            className={styles.close}
            src="./shared/mobile/close.svg"
            alt="close"
            width={22}
            height={23}
          />
          <span className="line"></span>
          <ul className={styles.navLinks}>
            <Link href="/">Pricing</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </ul>
          <button className="primary">Schedule a Demo</button>
        </div>
      </motion.div>
    </>
  );
}
