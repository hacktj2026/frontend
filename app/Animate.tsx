"use client";

import { motion } from "framer-motion";

function Animate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {children}
    </motion.div>
  );
}

export default Animate;
