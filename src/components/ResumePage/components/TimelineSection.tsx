import cx from "classnames";
import { ReactNode, useState } from "react";
import { Header, SlideIn } from "src/common-components";
import { careerEntries, credentialEntries, educationEntries } from "./timeline-entries";
import { TimelineEntry } from "./TimelineEntry";

export function TimelineSection() {
  const [expandedKey, setExpandedKey] = useState<string>();

  return (
    <Container>
      <SlideIn>
        <Header>CAREER</Header>
      </SlideIn>

      <div className={cx("flex", "flex-col")}>
        {careerEntries.map((v, i, a) => {
          const key = `career-${i}`;
          return (
            <TimelineEntry
              key={key}
              endYear={v.endYear}
              startYear={v.startYear}
              color={v.color}
              company={v.company}
              role={v.role}
              duration={v.duration}
              skills={v.skills}
              description={v.description}
              continueToNext={i + 1 < a.length && v.company === a[i + 1].company}
              isExpanded={key === expandedKey}
              onClick={() => setExpandedKey(key !== expandedKey ? key : undefined)}
            />
          );
        })}
      </div>

      <SlideIn>
        <Header>EDUCATION</Header>
      </SlideIn>

      <div className={cx("flex", "flex-col")}>
        {educationEntries.map((v, i, a) => {
          const key = `education-${i}`;
          return (
            <TimelineEntry
              key={key}
              endYear={v.endYear}
              startYear={v.startYear}
              color={v.color}
              company={v.company}
              role={v.role}
              duration={v.duration}
              skills={v.skills}
              description={v.description}
              continueToNext={i + 1 < a.length && v.company === a[i + 1].company}
              isExpanded={key === expandedKey}
              onClick={() => setExpandedKey(key !== expandedKey ? key : undefined)}
            />
          );
        })}
      </div>

      <SlideIn>
        <Header>CREDENTIALS</Header>
      </SlideIn>

      <div className={cx("flex", "flex-col")}>
        {credentialEntries.map((v, i, a) => {
          const key = `credential-${i}`;
          return (
            <TimelineEntry
              key={key}
              endYear={v.endYear}
              startYear={v.startYear}
              color={v.color}
              company={v.company}
              role={v.role}
              duration={v.duration}
              skills={v.skills}
              description={v.description}
              continueToNext={i + 1 < a.length && v.company === a[i + 1].company}
              isExpanded={key === expandedKey}
              onClick={() => setExpandedKey(key !== expandedKey ? key : undefined)}
            />
          );
        })}
      </div>
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
