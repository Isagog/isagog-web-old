import { asset } from "@/lib/base-path";
import MarkdownToJSX from "markdown-to-jsx";
import Image from "next/image";

interface MarkdownRendererProps {
  content: string;
  imageClassName?: string;
}

export const MarkdownRenderer = ({
  content,
  imageClassName = "",
}: MarkdownRendererProps) => {
  return (
    <MarkdownToJSX
      options={{
        enforceAtxHeadings: true,
        overrides: {
          h1: {
            props: { className: "text-4xl font-bold mt-8 mb-4 text-center" },
          },
          h2: { props: { className: "text-3xl font-bold mt-6 mb-3" } },
          h3: { props: { className: "text-2xl font-semibold mt-6 mb-2" } },
          h4: { props: { className: "text-xl font-semibold mt-4 mb-2" } },
          h5: { props: { className: "text-lg font-semibold mt-3 mb-1" } },
          h6: { props: { className: "text-base font-medium mt-2 mb-1" } },
          p: { props: { className: "text-base leading-7 mb-4" } },
          a: { props: { className: "text-blue-600 hover:underline" } },
          ul: { props: { className: "list-disc list-inside mb-4" } },
          ol: { props: { className: "list-decimal list-inside mb-4" } },
          li: { props: { className: "mb-1" } },
          blockquote: {
            props: {
              className:
                "border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4",
            },
          },
          img: {
            component: ({ src, ...props }) => (
              <Image
                {...props}
                src={asset(src ?? "")}
                className={`${imageClassName} block mx-auto my-6 w-auto h-auto`}
                alt="article-image"
                width={500}
                height={500}
              />
            ),
          },
          code: {
            props: {
              className: "bg-gray-100 text-sm px-1 py-0.5 rounded font-mono",
            },
          },
          pre: {
            props: {
              className:
                "bg-gray-800 text-white text-sm p-4 rounded-lg overflow-x-auto mb-4",
            },
          },
          table: {
            props: {
              className: "table-auto border-collapse w-full my-6",
            },
          },
          thead: {
            props: {
              className: "bg-gray-100",
            },
          },
          th: {
            props: {
              className: "border px-4 py-2 text-left font-semibold",
            },
          },
          td: {
            props: {
              className: "border px-4 py-2",
            },
          },
          strong: {
            props: {
              className: "font-bold text-gray-900",
            },
          },
          em: {
            props: {
              className: "italic text-gray-700",
            },
          },
        },
      }}
    >
      {content}
    </MarkdownToJSX>
  );
};
