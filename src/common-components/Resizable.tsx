import { ReactNode, useEffect, useRef } from "react";

export function Resizable({
  className,
  children,
  onResize,
}: {
  className?: string;
  children: ReactNode;
  onResize: (boundingClientRect: DOMRect) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (!ref.current) return;
      onResize(ref.current.getBoundingClientRect());
    });

    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [ref.current, onResize]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
