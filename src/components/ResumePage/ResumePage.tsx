import cx from "classnames";
import { ReactNode } from "react";
import { Copyright } from "src/common-components";
import { HeaderSection } from "../AboutPage/components";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";

export function ResumePage({ isVisible }: { isVisible: boolean }) {
  return (
    <Container isVisible={isVisible}>
      <HeaderSection />

      <div className={cx("flex-auto", "flex", "flex-row")}>
        <LeftPanel />

        <RightPanel />
      </div>

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
