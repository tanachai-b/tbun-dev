import cx from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { Icon, Resizable } from "./common-components";

export default function App() {
  return (
    <Container>
      <Slide>
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
      </Slide>
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
      {children}
    </div>
  );
}

function Slide({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div
      className={cx(
        "size-full",
        "overflow-clip",

        "flex",
        "flex-col",
        "items-center",
        "justify-center",

        isLoaded ? "opacity-100" : "opacity-0",
        "transition-all",
        "duration-[1s]",
      )}
    >
      {children}
    </div>
  );
}

function TBunLogo() {
  const [width, setWidth] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <Resizable className={cx("w-full", "select-none")} onResize={({ width }) => setWidth(width)}>
      <div
        className={cx(
          "flex",
          "flex-row",
          "items-center",
          "justify-center",

          isLoaded ? "scale-100" : "scale-[200%]",
          "transition-all",
          "duration-[1s]",
        )}
      >
        <div className={cx("font-black")} style={{ fontSize: `${400 * (width / 1920)}px` }}>
          TBUN
        </div>

        <div
          className={cx("font-normal", "w-[1.5ch]")}
          style={{ fontSize: `${200 * (width / 1920)}px` }}
        >
          .dev
        </div>
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
