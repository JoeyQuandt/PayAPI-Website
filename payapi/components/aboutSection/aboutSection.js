import styles from "./aboutSection.module.scss";
import Form from "../elements/form/form";
import { motion } from "framer-motion";
import { FadeInWhenVisibleLeft, FadeInWhenVisibleRight } from "../utils";

export default function AboutSection() {
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
    <section id="about" className={styles.aboutSection}>
      <FadeInWhenVisibleLeft>
        <div className={styles.heading}>
          <h1 className="heading3Large">
            We empower innovators by delivering access to the financial system
          </h1>
        </div>
      </FadeInWhenVisibleLeft>
      <div className={styles.article}>
        <h2 className="header4">Our Vision</h2>
        <p>
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.
        </p>
      </div>
      <div className={styles.article}>
        <h2 className="header4">Our Business</h2>
        <p>
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.
        </p>
      </div>
      <div className={styles.AboutImage} />
      <motion.div
        className={styles.AboutNumbers}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className={styles.AboutStats} variants={dropUpVariants}>
          <h3>Team Members</h3>
          <p className="header1Small">300+</p>
        </motion.div>
        <motion.div className={styles.AboutStats} variants={dropUpVariants}>
          <h3>Offices in the US</h3>
          <p className="header1Small">3</p>
        </motion.div>
        <motion.div className={styles.AboutStats} variants={dropUpVariants}>
          <h3>Transactions analyzed</h3>
          <p className="header1Small">10M+</p>
        </motion.div>
      </motion.div>
      <div className={styles.article}>
        <h2 className="header4">The Culture</h2>
        <p>
          We strongly believe there's always an opportunity to learn from each
          other outside of day-to-day work, whether it's company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title.
        </p>
      </div>
      <div className={styles.article}>
        <h2 className="header4">The People</h2>
        <p>
          We're all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </div>
      <div className={styles.formSection}>
        <Form />
      </div>
    </section>
  );
}
