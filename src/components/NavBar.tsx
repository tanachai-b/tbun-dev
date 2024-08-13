import cx from "classnames";
import { MouseEventHandler, ReactNode, RefObject, useEffect, useState } from "react";

export function NavBar({
  stickyNotesRef,
  colorSwatchesRef,
}: {
  stickyNotesRef: RefObject<HTMLDivElement>;
  colorSwatchesRef: RefObject<HTMLDivElement>;
}) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => window.addEventListener("scroll", () => setScroll(window.scrollY)), []);

  return (
    <Container>
      <GradientBackground />

      <Content>
        <TBunLogo
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            // window.history.pushState("", "", "/");
          }}
        />

        <NavItem
          onClick={() => {
            stickyNotesRef.current?.scrollIntoView({ behavior: "smooth" });
            // window.history.pushState("", "", "/sticky-notes");
          }}
        >
          Sticky Notes
        </NavItem>

        <NavItem
          onClick={() => {
            colorSwatchesRef.current?.scrollIntoView({ behavior: "smooth" });
            // window.history.pushState("", "", "/color-swatches");
          }}
        >
          Color Swatches
        </NavItem>

        <div className={cx("grow")} />

        {/* <NavItem
          onClick={() => {
            window.history.pushState("", "", "/about");
          }}
        >
          About
        </NavItem> */}
      </Content>

      <ForegroundShadow isVisible={scroll > window.innerHeight - 100} />
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "sticky",
        "top-0",
        "z-[1]",

        "h-[50px]",
        "overflow-clip",

        "relative",
      )}
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "relative",

        "size-full",

        "flex",
        "flex-row",
        "items-stretch",

        "px-[15px]",
      )}
    >
      {children}
    </div>
  );
}

function GradientBackground() {
  return (
    <div
      className={cx(
        "absolute",
        "inset-0",

        "h-[100vh]",
        "w-[100vw]",

        "bg-gradient-to-br",
        "from-[#ffe000]",
        "to-[#ffa000]",
      )}
    />
  );
}

function ForegroundShadow({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={cx(
        "relative",

        "pointer-events-none",

        "h-[100vh]",
        isVisible ? "shadow-[0_10px_20px_0_#000000]" : "",
      )}
    />
  );
}

function TBunLogo({ onClick }: { onClick: MouseEventHandler }) {
  return (
    <button
      className={cx(
        "hover:bg-[#000000]",
        "hover:text-[#ffffff]",
        "transition-all",

        "grid",
        "place-items-center",

        "px-[15px]",

        "font-black",
        "text-[30px]",
      )}
      onClick={onClick}
    >
      TBUN
    </button>
  );
}

function NavItem({ children, onClick }: { children: ReactNode; onClick: MouseEventHandler }) {
  return (
    <button
      className={cx(
        "hover:bg-[#000000]",
        "hover:text-[#ffffff]",
        "transition-all",

        "grid",
        "place-items-center",

        "px-[15px]",

        "font-bold",
        "text-[15px]",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
