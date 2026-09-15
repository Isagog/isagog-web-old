"use client";

import { SectionTitle } from "@/app/_components/custom/section-title";
import { asset } from "@/lib/base-path";
import { useScopedI18n } from "@/packages/locales/client";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  const t = useScopedI18n("contact-page");
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[80vh] mx-5 text-center">
      <Image
        src={asset("/images/trees.avif")}
        alt="Tree"
        width={1280}
        height={853}
        className="w-full max-w-md h-auto object-contain"
      />
      <SectionTitle as="h1" className="text-lg font-[400]">
        <span className="block sm:whitespace-nowrap">{t("label")}</span>
        <Link href="mailto:info@isagog.com" className="block text-terracotta">
          info@isagog.com
        </Link>
      </SectionTitle>
    </div>
  );
};
export default ContactPage;
