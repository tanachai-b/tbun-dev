import cx from "classnames";
import { Fragment, ReactNode, useState } from "react";
import { Intersectable, LinkButton, Resizable } from "src/common-components";

export function AppSection({
  image,
  title,
  description,
  href,
}: {
  image: string;
  title: ReactNode;
  description: ReactNode;
  href: string;
}) {
  return (
    <Container>
      <SlideRight className={cx("size-full", "bg-[white]", "grid")}>
        <div
          className={cx("size-full", "bg-cover", "bg-center")}
          style={{ backgroundImage: `url(${image})` }}
        />
      </SlideRight>

      <SlideLeft className={cx("size-full", "bg-[white]", "grid")}>
        <Detail>
          <div className={cx("text-[70px]", "font-black", "leading-none")}>{title}</div>

          <div className={cx("text-[20px]")}>{description}</div>

          <LinkButton className={cx("w-[150px]")} href={href}>
            OPEN
          </LinkButton>
        </Detail>
      </SlideLeft>
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  return (
    <Resizable
      className={cx(
        "w-full",
        "h-[calc(100vh-100px)]",

        "bg-[white]",
        "overflow-clip",

        size.width > size.height ? ["grid", "grid-cols-2"] : ["grid", "grid-rows-2"],
      )}
      onResize={({ width, height }) => setSize({ width, height })}
    >
      {children}
    </Resizable>
  );
}

function Detail({ children }: { children: ReactNode }) {
  const childrenArray = Array.isArray(children) ? children : [children];

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

function SlideRight({ className, children }: { className?: string; children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Intersectable
      className={className}
      onIntersect={(ratio) => {
        if (ratio > 0.2) setIsVisible(true);
      }}
    >
      <div
        className={cx(
          "relative",
          !isVisible ? ["right-[200px]", "opacity-0"] : ["right-0", "opacity-100"],
          "transition-all",
          "duration-[500ms]",
        )}
      >
        {children}
      </div>
    </Intersectable>
  );
}

function SlideLeft({ className, children }: { className?: string; children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Intersectable
      className={className}
      onIntersect={(ratio) => {
        if (ratio > 0.2) setIsVisible(true);
      }}
    >
      <div
        className={cx(
          "relative",
          !isVisible ? ["left-[200px]", "opacity-0"] : ["left-0", "opacity-100"],
          "transition-all",
          "duration-[500ms]",
        )}
      >
        {children}
      </div>
    </Intersectable>
  );
}
