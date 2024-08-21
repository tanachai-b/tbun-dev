import cx from "classnames";
import { ReactNode } from "react";
import { Header, SlideIn } from "src/common-components";
import { careerEntries, educationEntries } from "./TimelineEntries";

export function TimelineSection() {
  return (
    <Container>
      <SlideIn>
        <Header>CAREER</Header>
      </SlideIn>

      <div className={cx("flex", "flex-col")}>{careerEntries}</div>

      <SlideIn>
        <Header>EDUCATION</Header>
      </SlideIn>

      {educationEntries}
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div className={cx("flex", "flex-row", "justify-center")}>
      <div
        className={cx(
          "min-w-[350px]",
          "max-w-[600px]",

          "flex",
          "flex-col",

          "p-[30px]",
          "gap-[30px]",

          "text-[15px]",
          "font-medium",
        )}
      >
        {children}
      </div>
    </div>
  );
}
