import cx from "classnames";
import { MouseEventHandler, ReactNode } from "react";

export function NavScreenItem({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: MouseEventHandler;
}) {
  return (
    <button
      className={cx(
        "h-[50px]",
        "px-[80px]",

        "font-medium",
        "text-[15px]",
        "text-right",

        "text-[#ffffff]",

        "hover:text-[#000000]",
        "hover:bg-[#ffffff]",
        "transition-all",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
