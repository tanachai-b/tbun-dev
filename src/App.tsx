import cx from "classnames";
import { ReactNode, useState } from "react";
import { Icon, Resizable } from "./common-components";

export default function App() {
  return (
    <Container>
      <TBunLogo />

      <div
        className={cx(
          "w-full",

          "flex",
          "flex-row",
          "justify-center",
          "flex-wrap",

          "px-[30px]",
          "gap-[30px]",
        )}
      >
        <LinkButton label="Sticky Notes" href="http://sticky-notes.tbun.dev" />

        <LinkButton label="Color Swatches" href="http://color-swatches.tbun.dev" />
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

        "flex",
        "flex-col",
      )}
    >
      <div
        className={cx(
          "size-full",

          "flex",
          "flex-col",
          "items-center",
          "justify-center",
        )}
      >
        {children}
      </div>
    </div>
  );
}

function TBunLogo() {
  const [width, setWidth] = useState(0);

  return (
    <Resizable
      className={cx(
        "w-full",

        "flex",
        "flex-row",
        "items-center",
        "justify-center",

        "select-none",
      )}
      onResize={({ width }) => setWidth(width)}
    >
      <div className={cx("font-black")} style={{ fontSize: `${450 * (width / 2000)}px` }}>
        TBUN
      </div>

      <div
        className={cx("font-normal", "w-[1.5ch]")}
        style={{ fontSize: `${220 * (width / 2000)}px` }}
      >
        .dev
      </div>
    </Resizable>
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
