import cx from "classnames";
import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex",
        "flex-col",

        "gap-[20px]",
      )}
    >
      {children}
    </div>
  );
}

export function Header({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "text-[20px]",
        "tracking-[0.25em]",
        "font-black",
        "text-center",

        "break-after-avoid",
      )}
    >
      {children}
    </div>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <span className={cx("font-black")}>{children}</span>;
}
