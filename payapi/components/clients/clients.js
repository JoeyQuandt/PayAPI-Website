import styles from "./clients.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Clients() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // this will set the time inbetween children animation
      },
    },
  };

  const dropUpVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
      },
    },
  };
  return (
    <section id="clients" className={styles.clients}>
      <motion.div
        className={styles.clientsLogo}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.img
          variants={dropUpVariants}
          src="./home/clients/tesla.svg"
          alt="tesla"
        />
        <motion.img
          variants={dropUpVariants}
          src="./home/clients/microsoft.svg"
          alt="microsoft"
        />
        <motion.img
          variants={dropUpVariants}
          src="./home/clients/hewlett.svg"
          alt="hewlett packard"
        />
        <motion.img
          variants={dropUpVariants}
          src="./home/clients/oracle.svg"
          alt="oracle"
        />
        <motion.img
          variants={dropUpVariants}
          src="./home/clients/google.svg"
          alt="google"
        />
        <motion.img
          variants={dropUpVariants}
          src="./home/clients/nvidia.svg"
          alt="nvidia"
        />
      </motion.div>
      <div className={styles.clientsText}>
        <h2 className="header2">Who we worked with</h2>
        <p>
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <button className="secondaryLight">About Us</button>
      </div>
    </section>
  );
}
