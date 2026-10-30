
// import { motion, useReducedMotion } from "motion/react";

// export default function Reveal({
//   children,
//   delay = 0,
//   y = 32,
//   className = "",
// }) {
//   const reduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       className={className}
//       initial={{
//         opacity: 0,
//         y: reduceMotion ? 0 : y,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.15,
//       }}
//       transition={{
//         duration: reduceMotion ? 0 : 0.8,
//         delay: reduceMotion ? 0 : delay,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }




import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
