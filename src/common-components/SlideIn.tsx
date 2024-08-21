import cx from "classnames";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { Intersectable } from "src/common-components";

export function SlideIn({
  className,
  customRef,
  children,
}: {
  className?: string;
  customRef?: RefObject<HTMLDivElement>;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const component = customRef?.current ?? ref.current;
    if (component == null) return;

    const { top = 0, left = 0 } = component.getBoundingClientRect();
    const diagonal = left * Math.cos(Math.PI / 4) + top * Math.sin(Math.PI / 4);

    setDelay(diagonal);
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [delay, setDelay] = useState(0);

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

        setTimeout(() => setDelay(0), delay);
      }}
    >
      <div ref={ref}>{children}</div>
    </Intersectable>
  );
}
