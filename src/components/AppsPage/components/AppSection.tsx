import cx from "classnames";
import { Fragment, ReactNode, RefObject, useState } from "react";
import { Intersectable, LinkButton, Resizable } from "src/common-components";

export function AppSection({
  divRef,
  image,
  title,
  description,
  href,
}: {
  divRef: RefObject<HTMLDivElement>;
  image: string;
  title: ReactNode;
  description: ReactNode;
  href: string;
}) {
  return (
    <Container divRef={divRef}>
      <SlideIn from="left">
        <div
          className={cx("size-full", "bg-cover", "bg-center")}
          style={{ backgroundImage: `url(${image})` }}
        />
      </SlideIn>

      <SlideIn from="right">
        <Detail>
          <div className={cx("text-[70px]", "font-black", "leading-none")}>{title}</div>

          <div className={cx("text-[20px]")}>{description}</div>

          <LinkButton className={cx("w-[150px]")} href={href} target="_blank">
            OPEN
          </LinkButton>
        </Detail>
      </SlideIn>
    </Container>
  );
}

function Container({
  divRef,
  children,
}: {
  divRef: RefObject<HTMLDivElement>;
  children: ReactNode;
}) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  return (
    <Resizable
      divRef={divRef}
      className={cx(
        "w-full",
        "h-[calc(100vh-100px)]",

        "bg-[white]",
        "overflow-clip",

        "grid",
        "auto-cols-fr",
        size.width > size.height ? "grid-flow-col" : "grid-flow-row",
      )}
      onResize={({ width, height }) => setSize({ width, height })}
    >
      {children}
    </Resizable>
  );
}

function SlideIn({ from, children }: { from: "left" | "right"; children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Intersectable
      className={cx("grid")}
      onIntersect={(ratio) => ratio > 0.2 && setIsVisible(true)}
    >
      <div
        className={cx(
          "relative",

          !isVisible
            ? from === "left"
              ? ["left-[-200px]", "opacity-0"]
              : ["left-[200px]", "opacity-0"]
            : ["left-0", "opacity-100"],

          "transition-all",
          "duration-[500ms]",
        )}
      >
        {children}
      </div>
    </Intersectable>
  );
}

function Detail({ children }: { children: ReactNode }) {
  const childrenArray: ReactNode[] = Array.isArray(children) ? children : [children];

  return (
    <div
      className={cx(
        "size-full",
        "p-[10px]",

        "flex",
        "flex-col",
        "items-center",
        "justify-center",

        "text-center",
      )}
    >
      <div className={cx("flex-auto", "max-h-[30px]")} />

      {childrenArray.map((child, i) => (
        <Fragment key={i}>
          {child}

          <div className={cx("flex-auto", "max-h-[30px]")} />
        </Fragment>
      ))}
    </div>
  );
}
