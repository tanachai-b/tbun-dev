import cx from "classnames";
import { ReactNode, useState } from "react";
import { Copyright, Resizable } from "src/common-components";
import { HeaderSection } from "../AboutPage/components";
import { DetailSection, TimelineSection } from "./components";

export function ResumePage({ isVisible }: { isVisible: boolean }) {
  return (
    <Container isVisible={isVisible}>
      <HeaderSection />

      <ResponsiveBody>
        <DetailSection />

        <TimelineSection />
      </ResponsiveBody>

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

function ResponsiveBody({ children }: { children: ReactNode }) {
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
