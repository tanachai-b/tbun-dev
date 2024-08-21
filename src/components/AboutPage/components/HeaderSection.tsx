import cx from "classnames";
import { useState } from "react";
import { Intersectable, Resizable } from "src/common-components";

export function HeaderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);

  return (
    <Intersectable
      className={cx("h-[50vh]", "overflow-clip")}
      onIntersect={(ratio) => ratio > 0.2 && setIsVisible(true)}
    >
      <Resizable
        className={cx(
          "size-full",

          "grid",
          "place-items-center",

          "overflow-clip",
        )}
        onResize={({ width }) => setWidth(width)}
      >
        <div
          className={cx(
            !isVisible ? ["scale-[1000%]", "opacity-0"] : "",
            "transition-all",
            "duration-[1000ms]",
          )}
        >
          <div
            className={cx("text-center")}
            style={{
              fontSize: `${Math.min(200 * (width / 1920), 50)}px`,
              letterSpacing: `${0.5 * (width / 1920)}em`,
            }}
          >
            <span className={cx("font-black")}>TANACHAI</span> <span>BUNLUTANGTUM</span>
          </div>
        </div>
      </Resizable>
    </Intersectable>
  );
}
