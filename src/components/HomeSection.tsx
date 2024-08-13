import cx from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { Resizable } from "src/common-components";

export function HomeSection() {
  const [width, setWidth] = useState(0);

  return (
    <Container onResize={({ width }) => setWidth(width)}>
      <ZoomOutEffect>
        <TBunLogo factor={width / 1920} />
      </ZoomOutEffect>
    </Container>
  );
}

function Container({
  children,
  onResize,
}: {
  children: ReactNode;
  onResize: (boundingClientRect: DOMRect) => void;
}) {
  return (
    <Resizable
      className={cx(
        "w-full",
        "h-[calc(100vh-100px)]",
        "overflow-clip",

        "grid",
        "place-items-center",
      )}
      onResize={onResize}
    >
      {children}
    </Resizable>
  );
}

function ZoomOutEffect({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setTimeout(() => setIsLoaded(true), 0);
  }, []);

  return (
    <div
      className={cx(
        isLoaded ? "opacity-100" : "opacity-0",
        isLoaded ? "scale-[100%]" : "scale-[1000%]",
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

      <div className={cx("font-normal", "w-[1.5ch]")} style={{ fontSize: `${200 * factor}px` }}>
        .dev
      </div>
    </div>
  );
}
