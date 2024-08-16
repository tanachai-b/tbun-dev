import cx from "classnames";
import { ReactNode, useState } from "react";
import { Intersectable, Resizable } from "src/common-components";

export function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);

  return (
    <Container
      onIntersect={(ratio) => ratio > 0.2 && setIsVisible(true)}
      onResize={({ width }) => setWidth(width)}
    >
      <ZoomOutEffect isVisible={isVisible}>
        <TBunLogo factor={width / 1920} />
      </ZoomOutEffect>
    </Container>
  );
}

function Container({
  children,
  onIntersect,
  onResize,
}: {
  children: ReactNode;
  onIntersect: (ratio: number) => void;
  onResize: (boundingClientRect: DOMRect) => void;
}) {
  return (
    <Intersectable
      className={cx(
        "w-full",
        "h-[calc(100vh-100px)]",

        "grid",

        "overflow-clip",
      )}
      onIntersect={onIntersect}
    >
      <Resizable
        className={cx(
          "size-full",

          "grid",
          "place-items-center",
        )}
        onResize={onResize}
      >
        {children}
      </Resizable>
    </Intersectable>
  );
}

function ZoomOutEffect({ isVisible, children }: { isVisible: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        isVisible ? "opacity-100" : "opacity-0",
        isVisible ? "scale-[100%]" : "scale-[1000%]",
        "transition-all",
        "duration-[1s]",
      )}
    >
      {children}
    </div>
  );
}

function TBunLogo({ factor }: { factor: number }) {
  return (
    <div className={cx("flex", "flex-row", "items-center", "justify-center")}>
      <div className={cx("font-black")} style={{ fontSize: `${400 * factor}px` }}>
        TBUN
      </div>

      <div className={cx("w-[1.5ch]")} style={{ fontSize: `${200 * factor}px` }}>
        .dev
      </div>
    </div>
  );
}
