import cx from "classnames";
import { MouseEventHandler, ReactNode } from "react";

export function NavBarItem({
  theme = "light",
  children,
  onClick,
}: {
  theme?: "dark" | "light";
  children: ReactNode;
  onClick: MouseEventHandler;
}) {
  return (
    <button
      className={cx(
        theme === "dark"
          ? ["text-[#ffffff]", "hover:bg-[#ffffff]", "hover:text-[#000000]", "transition-all"]
          : ["text-[#000000]", "hover:bg-[#000000]", "hover:text-[#ffffff]", "transition-all"],

        "grid",
        "place-items-center",

        "px-[15px]",

        "font-medium",
        "text-[15px]",

        "whitespace-pre",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
