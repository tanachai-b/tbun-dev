import cx from "classnames";
import { ReactNode, RefObject, useRef, useState } from "react";
import { Icon, Resizable } from "src/common-components";
import { NavBarItem } from "./NavBarItem";

export function ResponsiveNav({
  children,
  onClickOverflowMenu,
  onOverflowChange,
}: {
  children: ReactNode;
  onClickOverflowMenu: () => void;
  onOverflowChange: (isOverflow: boolean) => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOverflow, setIsOverflow] = useState(false);

  return (
    <Container
      onResize={({ width }) => {
        const isOverflow = (menuRef.current?.clientWidth ?? 0) > width;
        setIsOverflow(isOverflow);
        onOverflowChange(isOverflow);
      }}
    >
      <FullNav menuRef={menuRef} isVisible={!isOverflow}>
        {children}
      </FullNav>

      <OverflowNav isVisible={isOverflow}>
        <NavBarItem onClick={onClickOverflowMenu}>
          <div className={cx("grid", "text-[25px]")}>
            <Icon icon="menu" />
          </div>
        </NavBarItem>
      </OverflowNav>
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
        "flex-auto",
        "overflow-hidden",

        "grid",
        "relative",
      )}
      onResize={onResize}
    >
      {children}
    </Resizable>
  );
}

function FullNav({
  menuRef,
  isVisible,
  children,
}: {
  menuRef: RefObject<HTMLDivElement>;
  isVisible: boolean;
  children: ReactNode;
}) {
  return (
    <div
      ref={menuRef}
      className={cx(
        "flex",
        "flex-row",

        !isVisible ? ["opacity-0", "invisible"] : "",
        "transition-all",
      )}
    >
      {children}
    </div>
  );
}

function OverflowNav({ isVisible, children }: { isVisible: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        "absolute",
        "size-full",

        "grid",
        "justify-end",

        !isVisible ? ["opacity-0", "invisible"] : "",
        "transition-all",
      )}
    >
      {children}
    </div>
  );
}
