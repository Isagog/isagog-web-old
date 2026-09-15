"use client";

import { asset } from "@/lib/base-path";
import { motion } from "framer-motion";
import Image from "next/image";

export const AnimateImage = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="h-[250px] flex justify-center items-center"
    >
      <Image
        src={asset("/images/tree.avif")}
        alt="Your Image"
        className="w-48 h-48"
        width={1000}
        height={1000}
      />
    </motion.div>
  );
};
