import { ImagePlaceholder } from "@/app/_components/custom/image-placeholder";
import { SectionTitle } from "@/app/_components/custom/section-title";
import { asset } from "@/lib/base-path";
import Image from "next/image";

export const ImageWithDescription = ({
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  imageUrl,
  imagePosition = "left",
  imgClassName,
  className,
}: {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph?: string;
  imageUrl?: string;
  imagePosition?: "left" | "right";
  imgClassName?: string;
  className?: string;
}) => {
  return (
    <div
      className={` flex flex-col md:flex-row justify-between items-center mb-16 gap-8 ${className} ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {imageUrl ? (
        <Image
          src={asset(imageUrl)}
          alt="placeholder"
          width={500}
          height={500}
          className={imgClassName}
        />
      ) : (
        <ImagePlaceholder shape="square" className={imgClassName ?? "w-1/2 h-80"} />
      )}
      <div className="space-y-8 md:w-96  text-center md:text-left mx-4 sm:mx-0">
        <SectionTitle
          as="h2"
          accent
          className="text-3xl md:text-nowrap font-semibold"
        >
          {title}
        </SectionTitle>
        <p className="font-sans text-[18px] font-[300]">{firstParagraph}</p>
        <p className="font-sans text-[18px] font-[300]">{secondParagraph}</p>
        {thirdParagraph && (
          <p className="font-sans text-[18px] font-[300]">{thirdParagraph}</p>
        )}
      </div>
    </div>
  );
};
