import cx from "classnames";
import { ReactNode } from "react";

export function InfoSection({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex-auto",

        "h-[500px]",
        "bg-[white]",

        "flex",
        "flex-row",
        "justify-center",
      )}
    >
      <div
        className={cx(
          "w-[500px]",

          "flex",
          "flex-col",

          "p-[20px]",
          "pt-[50px]",
          "gap-[50px]",

          "text-[17px]",
          "text-justify",
        )}
      >
        {children}
      </div>
    </div>
  );
}
