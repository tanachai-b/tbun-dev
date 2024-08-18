import cx from "classnames";
import { ReactNode } from "react";

export function ContactButtons({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "w-fit",
        "self-center",

        "grid",
        "grid-flow-col",
        "auto-cols-fr",

        "gap-[20px]",
      )}
    >
      {children}
    </div>
  );
}

export function ContactButton({ src, label, href }: { src: string; label: string; href: string }) {
  return (
    <a
      className={cx(
        "rounded-[10px]",

        "outline",
        "outline-[0px]",
        "outline-[#00000000]",
        "text-[black]",

        "hover:outline-[10px]",
        "hover:outline-[#00000040]",
        "hover:bg-[black]",
        "hover:text-[white]",

        "transition-all",

        "flex",
        "flex-col",
        "items-center",

        "p-[10px]",
        "gap-[10px]",

        "text-[15px]",
        "font-bold",
      )}
      href={href}
      target="_blank"
    >
      <div
        className={cx("bg-current", "size-[40px]")}
        style={{ mask: `url(${src})`, maskSize: "100%" }}
      />

      <div>{label}</div>
    </a>
  );
}
