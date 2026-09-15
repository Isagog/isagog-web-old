import Image from "next/image";
import { LocaleLink as Link } from "@/app/_components/custom/locale-link";
import { asset } from "@/lib/base-path";
import { getScopedI18n, setStaticParamsLocale } from "@/packages/locales/server";
import {
  AnimateImage,
  Hero,
  Highlight,
  KnowledgeCarousel,
  NavWithDescriptionSection,
} from "./components";

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const t = await getScopedI18n("home-page.knowledge");
  const tNav = await getScopedI18n("home-page.navigation");
  const tTextSection = await getScopedI18n("home-page.text-section");
  const tIntroHighlight = await getScopedI18n("home-page.intro-highlight");

  const data = [
    {
      title: t("1.title"),
      subtitle: t("1.subtitle"),
      description: t("1.description"),
      firstParagraph: tTextSection("1.firstParagraph"),
      secondParagraph: tTextSection("1.secondParagraph"),
      thirdParagraph: tTextSection("1.thirdParagraph"),
    },
    {
      title: t("2.title"),
      subtitle: t("2.subtitle"),
      description: t("2.description"),
      firstParagraph: tTextSection("2.firstParagraph"),
      secondParagraph: tTextSection("2.secondParagraph"),
      thirdParagraph: tTextSection("2.thirdParagraph"),
    },
    {
      title: t("3.title"),
      subtitle: t("3.subtitle"),
      description: t("3.description"),
      firstParagraph: tTextSection("3.firstParagraph"),
      secondParagraph: tTextSection("3.secondParagraph"),
      thirdParagraph: tTextSection("3.thirdParagraph"),
      linkToExample: tTextSection("3.linkToExample"),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col justify-center items-center relative isolate ">
      <Hero />
      <KnowledgeCarousel data={data} />
      <div className="w-full flex flex-col justify-evenly  my-18 mx-5 sm:mx-auto sm:max-w-7/8">
        <NavWithDescriptionSection
          title={tNav("about.title")}
          description={tNav("about.description")}
          href="/about"
          imageUrl={asset("/images/about-images/tree-bonsai.png")}
        />
        <NavWithDescriptionSection
          title={tNav("solution.title")}
          description={tNav("solution.description")}
          href="/service"
          imageUrl={asset("/images/about-images/tree-canopy.png")}
        />
        <NavWithDescriptionSection
          title={tNav("project.title")}
          description={tNav("project.description")}
          href="/project"
          imageUrl={asset("/images/about-images/tree-cypress.png")}
        />
        <NavWithDescriptionSection
          title={tNav("blog.title")}
          description={tNav("blog.description")}
          href="/blog"
          imageUrl={asset("/images/about-images/tree-palm.png")}
        />
      </div>
      <div className="relative w-full bg-mist overflow-hidden flex flex-col justify-center items-center text-center text-terracotta h-[498px] mt-12">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src={asset("/images/about-images/tree-pine.png")}
            alt=""
            width={400}
            height={500}
            className="absolute -left-10 bottom-0 h-[400px] w-auto object-contain"
          />
          <Image
            src={asset("/images/about-images/tree-cypress.png")}
            alt=""
            width={400}
            height={500}
            className="hidden sm:block absolute left-[16%] bottom-0 h-[280px] w-auto object-contain opacity-80"
          />
          <Image
            src={asset("/images/about-images/tree-bushy.png")}
            alt=""
            width={400}
            height={500}
            className="hidden sm:block absolute right-[16%] bottom-0 h-[260px] w-auto object-contain opacity-80"
          />
          <Image
            src={asset("/images/about-images/tree-palm.png")}
            alt=""
            width={400}
            height={500}
            className="absolute -right-8 bottom-0 h-[420px] w-auto object-contain"
          />
        </div>
        <div className="relative z-10 space-y-6 flex flex-col justify-center items-center">
          <p className="uppercase tracking-widests text-[22px] font-sans font-[400] leading-12">
            {tIntroHighlight("title")}
            <br />
            {tIntroHighlight("description")}
          </p>
          <p className="uppercase tracking-wide text-[22px] font-sans font-[400]">
            {tIntroHighlight("subtitle")}
          </p>
          <div className="border-y border-terracotta">
            <Link
              href="mailto:info@isagog.com"
              className="inline-block py-2 text-[15px] rounded-none text-terracotta hover:bg-transparent cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              {tIntroHighlight("button")}
            </Link>
          </div>
        </div>
      </div>
      <Highlight />
      <AnimateImage />
    </main>
  );
};

export default HomePage;
