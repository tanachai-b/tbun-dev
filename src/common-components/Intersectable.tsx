import { CSSProperties, ReactNode, RefObject, useEffect, useRef } from "react";

export function Intersectable({
  divRef,
  className,
  style,
  children,
  onIntersect,
}: {
  divRef?: RefObject<HTMLDivElement>;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  onIntersect: (ratio: number) => void;
}) {
  const inRef = useRef<HTMLDivElement>(null);
  const ref = divRef ?? inRef;

  useEffect(() => {
    if (!ref.current) return;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!ref.current) return;
        onIntersect(entry.intersectionRatio);
      },
      { threshold: [...Array.from({ length: 10 }, (_v, i) => i / 10), 1] },
    );

    intersectionObserver.observe(ref.current);
    return () => intersectionObserver.disconnect();
  }, [ref.current, onIntersect]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
