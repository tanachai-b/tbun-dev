import cx from "classnames";
import { ReactNode, useState } from "react";
import { Copyright, Resizable } from "src/common-components";
import { HeaderSection } from "../AboutPage/components";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";

export function ResumePage({ isVisible }: { isVisible: boolean }) {
  const [isNarrow, setIsNarrow] = useState(false);

  return (
    <Container isVisible={isVisible}>
      <HeaderSection />

      <Resizable
        className={cx(
          "flex-auto",

          "flex",
          !isNarrow
            ? ["grid", "grid-flow-col", "auto-cols-[400px_auto]"]
            : ["grid", "grid-flow-row"],
        )}
        onResize={({ width }) => setIsNarrow(width < 800)}
      >
        <LeftPanel />

        <RightPanel />
      </Resizable>

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
