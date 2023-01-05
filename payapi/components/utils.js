import { motion } from "framer-motion";

/*Fade when visible*/
function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 5 },
      }}
    >
      {children}
    </motion.div>
  );
}

/*Fade when visible*/
function FadeInWhenVisibleLeft({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
      }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      {children}
    </motion.div>
  );
}
function FadeInWhenVisibleRight({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      }}
    >
      {children}
    </motion.div>
  );
}

export { FadeInWhenVisibleRight, FadeInWhenVisibleLeft, FadeInWhenVisible };
