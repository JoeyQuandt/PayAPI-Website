import styles from "./pricing.module.scss";
import Form from "../elements/form/form";
import PricingCard from "./pricingCard";
import { motion } from "framer-motion";

export default function PricingPlans() {
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
    <section id="Pricing" className={styles.PricingPlans}>
      <h1 className="heading3Large">Pricing</h1>
      <motion.div
        className={styles.PricingPlansGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={dropUpVariants}>
          <PricingCard
            title="Free Plan"
            price="0.00"
            description="Build and test using our core set of products with up to 100 API requests "
            benefitsList={["Transactions", "Auth", "Identity"]}
          />
        </motion.div>
        <motion.div variants={dropUpVariants}>
          <PricingCard
            title="Basic Plan"
            price="249.00"
            description="Launch your project with unlimited requests and no contractual minimums "
            benefitsList={[
              "Transactions",
              "Auth",
              "Identity",
              "Investments",
              "Assets",
            ]}
          />
        </motion.div>
        <motion.div variants={dropUpVariants}>
          <PricingCard
            title="Premium Plan"
            price="499.00"
            description="Get tailored solutions, volume pricing, and dedicated support for your team "
            benefitsList={[
              "Transactions",
              "Auth",
              "Identity",
              "Investments",
              "Assets",
              "Liabilities",
              "Income",
            ]}
          />
        </motion.div>
      </motion.div>
      <Form />
    </section>
  );
}
