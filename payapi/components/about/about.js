import styles from "./about.module.scss";
import { FadeInWhenVisibleLeft, FadeInWhenVisibleRight } from "../utils";
import { motion } from "framer-motion";

export default function About() {
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
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
      },
    },
  };

  return (
    <section className={styles.about}>
      <div className={styles.article}>
        <img src="./home/desktop/test1.svg" alt="code" />
        <FadeInWhenVisibleRight>
          <div className={styles.articleText}>
            <h2 className="header3Large">Easy to implement</h2>
            <p>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </FadeInWhenVisibleRight>
      </div>
      <div className={styles.article}>
        <img src="./home/desktop/test.svg" alt="code" />
        <FadeInWhenVisibleLeft>
          <div className={styles.articleText}>
            <h2 className="header3Large">Simple UI & UX</h2>
            <p>
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
        </FadeInWhenVisibleLeft>
      </div>
      <motion.div
        className={styles.benefits}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={dropUpVariants} className={styles.article}>
          <img
            className="logo"
            src="./home/desktop/icon-personal-finances.svg"
            alt="code"
          />
          <div className={styles.articleText}>
            <h2 className="header3Large">Personal Finances</h2>
            <p>
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.
            </p>
          </div>
        </motion.div>
        <motion.div variants={dropUpVariants} className={styles.article}>
          <img
            className="logo"
            src="./home/desktop/icon-banking-and-coverage.svg"
            alt="code"
          />
          <div className={styles.articleText}>
            <h2 className="header3Large">Banking & Coverage</h2>
            <p>
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
        </motion.div>
        <motion.div variants={dropUpVariants} className={styles.article}>
          <img
            className="logo"
            src="./home/desktop/icon-consumer-payments.svg"
            alt="code"
          />
          <div className={styles.articleText}>
            <h2 className="header3Large">Consumer Payment</h2>
            <p>
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className={styles.demoForm}>
        <h2 className="header3Large">Ready to start?</h2>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
          ></input>
          <button className="primary">Schedule a Demo</button>
        </form>
      </div>
    </section>
  );
}
