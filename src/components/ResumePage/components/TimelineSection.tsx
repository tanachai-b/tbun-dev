import cx from "classnames";
import { ReactNode, useState } from "react";
import { Header, SlideIn } from "src/common-components";
import {
  careerEntries,
  credentialEntries,
  educationEntries,
  TimelineEntryData,
} from "./timeline-entries";
import { TimelineEntry } from "./TimelineEntry";

export function TimelineSection() {
  const [expandedKey, setExpandedKey] = useState<string>();

  return (
    <Container>
      <SlideIn>
        <Header>CAREER</Header>
      </SlideIn>

      <div className={cx("flex", "flex-col")}>
        {convertToTimelineEntries(careerEntries, "career-", expandedKey, setExpandedKey)}
      </div>

      <SlideIn>
        <Header>EDUCATION</Header>
      </SlideIn>

      <div className={cx("flex", "flex-col")}>
        {convertToTimelineEntries(educationEntries, "education-", expandedKey, setExpandedKey)}
      </div>

      <SlideIn>
        <Header>CREDENTIALS</Header>
      </SlideIn>

      <div className={cx("flex", "flex-col")}>
        {convertToTimelineEntries(credentialEntries, "credential-", expandedKey, setExpandedKey)}
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

function convertToTimelineEntries(
  entries: TimelineEntryData[],
  keyPrefix: string,
  expandedKey: string | undefined,
  setExpandedKey: (expandedKey?: string) => void,
): ReactNode {
  return entries.map((v, i, a) => {
    const key = `${keyPrefix}${i}`;
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
  });
}
