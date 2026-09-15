"use client";

import { SectionTitle } from "@/app/_components/custom/section-title";
import { asset } from "@/lib/base-path";
import { useScopedI18n } from "@/packages/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export const TeamCard = () => {
  const t = useScopedI18n("about-page.team");
  const team = [
    {
      avatar: "/images/team-images/Guido.avif",
      name: "Guido Vetere",
      title: t("1.title"),
      desc: t("1.desc"),
    },
    {
      avatar: "/images/team-images/Robert.avif",
      name: "Robert J. Alexander",
      title: t("2.title"),
      desc: t("2.desc"),
    },
    {
      avatar: "/images/team-images/David.avif",
      name: "David Valente",
      title: t("3.title"),
      desc: t("3.desc"),
    },
    {
      avatar: "/images/team-images/Maria.jpg",
      name: "Maria Boscarato",
      title: t("4.title"),
      desc: t("4.desc"),
    },
    {
      avatar: "/images/team-images/Piero.jpg",
      name: "Piero Donini",
      title: t("5.title"),
      desc: t("5.desc"),
    },
  ];
  return (
    <div className="sm:mt-20">
      <ul className="grid gap-16 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, idx) => (
          <motion.li
            key={idx}
            variants={item}
            className="bg-transparent overflow-hidden transform transition duration-500 sm:hover:scale-105"
          >
            <div className="relative h-64">
              <Image
                src={asset(member.avatar ?? "/placeholder.png")}
                alt={member.name}
                width={1000}
                height={1000}
                className="h-full w-full object-cover transition duration-300 transform sm:hover:scale-110"
              />
            </div>
            <div>
              <SectionTitle as="h3" className="pt-4">
                {member.name}
              </SectionTitle>
              <p className="text-terracotta font-serif mt-1 text-sm">
                {member.title}
              </p>
              <p className="mt-4 font-sans whitespace-pre-line">
                {member.desc}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
