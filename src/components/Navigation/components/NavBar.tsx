import cx from "classnames";
import { ReactNode, useEffect, useState } from "react";

export function NavBar({ children }: { children: ReactNode }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => window.addEventListener("scroll", () => setScroll(window.scrollY)), []);

  return (
    <Container>
      <GradientBackground />

      <Content>{children}</Content>

      <ForegroundShadow isVisible={scroll > window.innerHeight - 100} />
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  return (
    <div
      className={cx(
        "sticky",
        "top-0",
        "z-[1]",

        "h-[50px]",
        "overflow-clip",

        !isVisible ? "opacity-0" : "",
        "transition-all",
        "duration-[1s]",
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

        "h-[100vh]",
        "w-[100vw]",

        "bg-gradient-to-br",
        "from-[#ffe000]",
        "to-[#ffa000]",
      )}
    />
  );
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "absolute",

        "size-full",

        "flex",
        "flex-row",

        "px-[15px]",
      )}
    >
      {children}
    </div>
  );
}

function ForegroundShadow({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={cx(
        "absolute",

        "size-full",
        "top-[100%]",

        "pointer-events-none",

        "h-[100vh]",
        isVisible ? "shadow-[0_10px_20px_0_#000000]" : "",
        "transition-all",
        "duration-[1s]",
      )}
    />
  );
}
