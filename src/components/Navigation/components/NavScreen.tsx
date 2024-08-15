import cx from "classnames";
import { ReactNode } from "react";
import { Icon } from "src/common-components";
import { NavBarItem } from "./NavBarItem";

export function NavScreen({
  isVisible,
  children,
  onClose,
}: {
  isVisible: boolean;
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <Container isVisible={isVisible}>
      <Header>
        <NavBarItem theme={"dark"} onClick={onClose}>
          <div className={cx("grid", "text-[25px]")}>
            <Icon icon="close" />
          </div>
        </NavBarItem>
      </Header>

      <div className={cx("flex-auto", "flex", "flex-col", "pt-[20px]")}>
        {children}

        <div className={cx("h-[20px]")} />

        <div className={cx("flex-auto")} onClick={onClose} />
      </div>
    </Container>
  );
}

function Container({ isVisible, children }: { isVisible: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        "fixed",
        "inset-0",
        "z-[1]",

        "bg-[#000000e0]",
        "backdrop-blur-[10px]",

        !isVisible ? ["h-0", "invisible"] : "h-full",
        "transition-all",
        "duration-[500ms]",

        "flex",
        "flex-col",

        "overflow-clip",
      )}
    >
      {children}
    </div>
  );
}

function Header({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex-none",

        "h-[50px]",
        "px-[15px]",

        "flex",
        "flex-row",
        "justify-end",
      )}
    >
      {children}
    </div>
  );
}
