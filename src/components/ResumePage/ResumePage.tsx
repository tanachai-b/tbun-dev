import cx from "classnames";
import { ReactNode, useState } from "react";
import { Copyright, Resizable } from "src/common-components";
import { HeaderSection } from "../AboutPage/components";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";

export function ResumePage({ isVisible }: { isVisible: boolean }) {
  return (
    <Container isVisible={isVisible}>
      <HeaderSection />

      <Responsive>
        <LeftPanel />

        <RightPanel />
      </Responsive>

      <Copyright />
    </Container>
  );
}

function Container({ isVisible, children }: { isVisible: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex-auto",

        !isVisible ? "opacity-0" : "",
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

export function Responsive({ children }: { children: ReactNode }) {
  const [isNarrow, setIsNarrow] = useState(false);

  return (
    <Resizable
      className={cx(
        "flex-auto",

        "bg-[#ffffff]",

        "flex",
        !isNarrow ? ["flex-row", "justify-center"] : ["flex-col"],
      )}
      onResize={({ width }) => setIsNarrow(width < 700)}
    >
      {children}
    </Resizable>
  );
}
