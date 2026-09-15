"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { asset } from "@/lib/base-path";
import { stripLocale } from "@/lib/locale-href";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/packages/locales/client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSelector } from "./language-selector";
import { LocaleLink as Link } from "./locale-link";

export const Header = () => {
  const t = useScopedI18n("header");
  const pathname = stripLocale(usePathname());
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/platform", label: t("platform") },
    { href: "/about", label: t("about") },
    { href: "/service", label: t("solution") },
    { href: "/project", label: t("project") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="flex fixed top-0 z-50 w-full items-center border-b border-border bg-background">
      <div className="flex w-full items-center justify-between gap-2 px-3 sm:px-6 py-2">
        <Link href="/">
          <Image
            src={asset("/logo-new.png")}
            alt="logo isagog"
            width={200}
            height={200}
            className = "p-3"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={cn(
                  "font-sans font-[400] text-primary hover:text-black text-base",
                  isActive && "text-[#000000] font-[400]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <LanguageSelector className="text-primary" />
        </nav>
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector className="text-primary" />
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full transition-colors">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-40 bg-background border-none shadow-none"
            >
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-sans font-[300] text-primary text-base",
                      pathname === item.href && "text-[#000000] font-[400]"
                    )}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
