import cx from "classnames";
import { ReactNode, RefObject, useRef } from "react";
import { SlideIn } from "src/common-components";

export function TimelineEntry({
  endYear,
  startYear,
  color,
  company,
  role,
  duration,
  skills,
  continueToNext = false,
}: {
  endYear: number;
  startYear: number;
  color: string;
  company: string;
  role: string;
  duration: string;
  skills: string[];
  continueToNext?: boolean;
}) {
  const ref = useRef(null);

  return (
    <SlideIn customRef={ref}>
      <div className={cx("flex", "flex-row", "gap-[10px]")}>
        <Years
          firstYearRef={ref}
          endYear={endYear}
          startYear={startYear}
          continueToNext={continueToNext}
        />

        <Line color={color} continueToNext={continueToNext} />

        <Texts>
          <div style={{ color }}>{company}</div>

          <div>
            <span className={cx("font-black")}>{role}</span>
            {" "}
            <span className={cx("text-[#00000080]", "whitespace-nowrap")}>{duration}</span>
          </div>

          <Skills skills={skills} />
        </Texts>
      </div>
    </SlideIn>
  );
}

function Years({
  firstYearRef,
  endYear,
  startYear,
  continueToNext = false,
}: {
  firstYearRef: RefObject<HTMLDivElement>;
  endYear: number;
  startYear: number;
  continueToNext?: boolean;
}) {
  const rowCount = endYear - startYear + 1;

  return (
    <div
      className={cx(
        "flex-none",

        "w-[4ch]",

        "grid",
        "grid-flow-row",
        "auto-rows-[minmax(70px,_1fr)]",

        "text-center",
        "text-[#00000080]",

        !continueToNext ? "mb-[10px]" : "",
      )}
    >
      {Array.from(Array(rowCount)).map((_, index) => (
        <div
          ref={index === 0 ? firstYearRef : undefined}
          key={index}
          className={cx("break-inside-avoid")}
        >
          {endYear - index}
        </div>
      ))}
    </div>
  );
}

function Line({ color, continueToNext = false }: { color: string; continueToNext?: boolean }) {
  return (
    <div
      className={cx(
        "flex-none",

        "w-[2px]",

        !continueToNext ? "mb-[10px]" : "",
      )}
      style={{ backgroundColor: color }}
    />
  );
}

function Texts({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex-auto",

        "flex",
        "flex-col",

        "mb-[10px]",

        "h-fit",
        "break-inside-avoid",
      )}
    >
      {children}
    </div>
  );
}

function Skills({ skills }: { skills: string[] }) {
  return (
    <div
      className={cx(
        "flex",
        "flex-row",
        "flex-wrap",

        "pt-[2px]",
        "gap-x-[7px]",

        "text-[11px]",
        "text-[#000000a0]",
      )}
    >
      {skills.map((skill, index) => (
        <div key={index}>{skill}</div>
      ))}
    </div>
  );
}
