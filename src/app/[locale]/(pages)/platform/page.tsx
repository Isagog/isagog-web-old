import { Monitor, Network } from "lucide-react";
import { SectionTitle } from "@/app/_components/custom/section-title";
import { asset } from "@/lib/base-path";
import { getScopedI18n, setStaticParamsLocale } from "@/packages/locales/server";
import { TextCarousel } from "./components/text-carousel";

const PlatformPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const tHero = await getScopedI18n("platform-page.hero");
  const tDiagram = await getScopedI18n("platform-page.diagram");

  return (
    <div className="flex items-center flex-col gap-8 justify-center">
      <section className="flex flex-col items-center text-center gap-8 mt-24 sm:mx-[10%]">
        <SectionTitle as="h1" accent className="text-3xl font-[400]">
          {tHero("title")}
        </SectionTitle>
        <p className="text-2xl font-serif font-[300]">
          {tHero("description")}
        </p>
      </section>
      <iframe
        src={asset(`/platform-explorer/${locale === "it" ? "it" : "en"}.html`)}
        title={
          locale === "it"
            ? "Esplora la piattaforma Isagog"
            : "Explore the Isagog platform"
        }
        className="sm:block hidden w-full aspect-[1280/886] border-0"
      />
      <div className="sm:hidden flex flex-col items-center gap-3 text-center border border-forest/25 mx-5 p-8">
        <Network className="text-terracotta" size={36} strokeWidth={1.5} />
        <p className="font-serif font-[300] text-lg text-forest">
          {tDiagram("mobileNotice")}
        </p>
        <p className="flex items-center gap-2 text-terracotta font-sans uppercase text-sm tracking-wide">
          <Monitor size={18} strokeWidth={1.75} />
          {tDiagram("mobileCta")}
        </p>
      </div>
      <TextCarousel />
    </div>
  );
};
export default PlatformPage;
