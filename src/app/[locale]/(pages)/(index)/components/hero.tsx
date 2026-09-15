"use client";
import { asset } from "@/lib/base-path";
import { useScopedI18n } from "@/packages/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const t = useScopedI18n("home-page.hero");

  return (
    <div className="flex flex-col items-center gap-2 justify-center min-h-screen mx-2">
      <Image
        src={asset("/images/tree.avif")}
        alt="Tree"
        width={4000}
        height={4000}
        className="w-40 h-44 mb-6"
      />
      <h1 className="text-3xl sm:text-4xl font-serif text-center text-primary font-[400] tracking-widest">
        {t("title")}
      </h1>
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center font-serif w-full text-lg text-primary"
      >
        {t("description")
          .split("\n")
          .map((line, i) => (
            <p key={i}>{line}</p>
          ))}
      </motion.span>
    </div>
  );
};
