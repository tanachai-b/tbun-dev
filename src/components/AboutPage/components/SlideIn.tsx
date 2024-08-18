import cx from "classnames";
import { ReactNode, useState } from "react";
import { Intersectable } from "src/common-components";

export function SlideIn({
  className,
  delay: initDelay,
  children,
}: {
  className?: string;
  delay: number;
  children: ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [delay, setDelay] = useState(initDelay);

  return (
    <Intersectable
      className={cx(
        "relative",

        !isVisible ? ["opacity-0", "left-[100px]"] : ["opacity-100", "left-0"],
        "transition-all",
        "duration-[500ms]",

        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onIntersect={(ratio) => {
        ratio <= 0.2 && setDelay(0);
        ratio > 0.2 && setIsVisible(true);
      }}
    >
      {children}
    </Intersectable>
  );
}
