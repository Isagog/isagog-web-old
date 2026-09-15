"use client";

import { asset } from "@/lib/base-path";
import { motion } from "framer-motion";
import Image from "next/image";

export const ImageWithTitle = ({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) => {
  return (
    <div className="sm:flex hidden flex-col items-center justify-center gap-8 mt-28">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-2xl font-bold h-14 text-center"
      >
        {title}
      </motion.h1>
      <div className="w-full bg-forest rounded-lg p-8 sm:p-12 flex items-center justify-center">
        <Image src={asset(imageUrl)} alt={title} width={1000} height={1000} />
      </div>
    </div>
  );
};
