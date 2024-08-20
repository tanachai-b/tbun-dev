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

        "grid",
        !isNarrow ? ["grid-flow-col", "auto-cols-[400px_auto]"] : ["grid-flow-row"],
      )}
      onResize={({ width }) => setIsNarrow(width < 800)}
    >
      {children}
    </Resizable>
  );
}
