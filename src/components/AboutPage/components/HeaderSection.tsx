import cx from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { Intersectable, Resizable } from "src/common-components";

export function HeaderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);

  return (
    <Container
      onIntersect={(ratio) => ratio > 0.2 && setIsVisible(true)}
      onResize={({ width }) => setWidth(width / 1920)}
    >
      <ZoomEffect isVisible={isVisible}>
        <FullName factor={width} />
      </ZoomEffect>
    </Container>
  );
}

function Container({
  onIntersect,
  onResize,
  children,
}: {
  onIntersect: (ratio: number) => void;
  onResize: (boundingClientRect: DOMRect) => void;
  children: ReactNode;
}) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onScroll() {
    setScroll(window.scrollY);
  }

  return (
    <Intersectable
      className={cx(
        "h-[calc(50vh-50px)]",

        "sticky",
        "top-[50px]",
      )}
      onIntersect={onIntersect}
    >
      <Resizable
        className={cx(
          "grid",
          "place-content-center",

          "overflow-clip",
        )}
        style={{ height: `calc(100% - ${scroll}px)` }}
        onResize={onResize}
      >
        {children}
      </Resizable>
    </Intersectable>
  );
}

function ZoomEffect({ isVisible, children }: { isVisible: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        !isVisible ? ["scale-[1000%]", "opacity-0"] : "",
        "transition-all",
        "duration-[1s]",
      )}
    >
      {children}
    </div>
  );
}

function FullName({ factor }: { factor: number }) {
  return (
    <div
      className={cx("text-center")}
      style={{
        fontSize: `${Math.min(200 * factor, 50)}px`,
        letterSpacing: `${0.5 * factor}em`,
      }}
    >
      <span className={cx("font-black")}>TANACHAI</span> <span>BUNLUTANGTUM</span>
    </div>
  );
}
