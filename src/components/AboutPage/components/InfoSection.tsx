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
          "w-[400px]",

          "flex",
          "flex-col",

          "p-[20px]",
          "pt-[30px]",
          "gap-[30px]",

          "text-[15px]",
          "text-justify",
        )}
      >
        {children}
      </div>
    </div>
  );
}
