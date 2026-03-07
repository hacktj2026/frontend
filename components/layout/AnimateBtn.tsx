"use client";

import { motion } from "framer-motion";

function AnimateBtn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ y: -2, scale: 1.1 }} className="py-2">
      {children}
    </motion.div>
  );
}

export default AnimateBtn;
