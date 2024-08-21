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
      <ZoomEffect isVisible={isVisible}>
        <TBunLogo factor={width / 1920} />
      </ZoomEffect>
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
    <Intersectable className={cx("h-[calc(100vh-100px)]")} onIntersect={onIntersect}>
      <Resizable
        className={cx(
          "size-full",

          "grid",
          "place-items-center",

          "overflow-clip",
        )}
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
