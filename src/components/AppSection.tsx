import cx from "classnames";
import { ReactNode, useState } from "react";
import { LinkButton, Resizable } from "src/common-components";

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
      <div className={cx("bg-cover", "bg-center")} style={{ backgroundImage: `url(${image})` }} />

      <Detail>
        <div className={cx("text-[70px]", "font-black", "leading-none")}>{title}</div>

        <div className={cx("text-[20px]")}>{description}</div>

        <LinkButton className={cx("w-[150px]")} href={href}>
          OPEN
        </LinkButton>
      </Detail>
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
        "bg-[white]",
        "h-full",

        "p-[10px]",

        "flex",
        "flex-col",
        "items-center",
        "justify-center",

        "text-center",
      )}
    >
      <div className={cx("flex-auto", "max-h-[30px]")} />

      {childrenArray.map((v) => (
        <>
          {v}

          <div className={cx("flex-auto", "max-h-[30px]")} />
        </>
      ))}
    </div>
  );
}
