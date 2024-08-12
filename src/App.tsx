import cx from "classnames";
import { ReactNode } from "react";
import { Icon } from "./common-components";

export default function App() {
  return (
    <Container>
      <div className={cx("flex", "flex-col", "items-center")}>
        <TBunLogo />

        <div className={cx("grid", "grid-cols-2", "gap-[30px]")}>
          <LinkButton label="Sticky Notes" href="http://sticky-notes.tbun.dev" />

          <LinkButton label="Color Swatches" href="http://color-swatches.tbun.dev" />
        </div>
      </div>
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "size-full",

        "bg-gradient-to-br",
        "from-[#ffe000]",
        "to-[#ffa000]",

        "grid",
        "place-content-center",
      )}
    >
      {children}
    </div>
  );
}

function TBunLogo() {
  return (
    <div className={cx("flex", "flex-row", "items-center")}>
      <div className={cx("font-black", "text-[200px]")}>TBUN</div>

      <div className={cx("font-normal", "text-[100px]", "w-[1.5ch]")}>.dev</div>
    </div>
  );
}

function LinkButton({ label, href }: { label: ReactNode; href: string }) {
  return (
    <a
      className={cx(
        "w-[300px]",

        "bg-black",
        "rounded-[10px]",

        "outline",
        "outline-[#00000000]",
        "outline-[0px]",
        "hover:outline-[#00000040]",
        "hover:outline-[10px]",
        "transition-all",

        "flex",
        "flex-row",
        "justify-center",
        "items-center",

        "px-[20px]",
        "py-[10px]",

        "text-white",
        "font-black",

        "group",
      )}
      href={href}
    >
      <div className={cx("text-[15px]")}>{label}</div>

      <div className={cx("w-0")}>
        <div
          className={cx(
            "ml-[10px]",

            "relative",
            "left-[-20px]",
            "opacity-0",

            "group-hover:left-0",
            "group-hover:opacity-100",
            "transition-all",

            "grid",
            "text-[30px]",
          )}
        >
          <Icon icon={"arrow_forward"} />
        </div>
      </div>
    </a>
  );
}
