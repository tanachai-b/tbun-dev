import cx from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";
import { SlideIn } from "src/common-components";

export function TimelineEntry({
  endYear,
  startYear,
  color,
  company,
  role,
  duration,
  skills,
  description,
  continueToNext,
  isExpanded,
  onClick,
}: {
  endYear: number;
  startYear: number;
  color: string;
  company: ReactNode;
  role: ReactNode;
  duration: ReactNode;
  skills: ReactNode[];
  description: ReactNode;
  continueToNext: boolean;
  isExpanded: boolean;
  onClick: () => void;
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <SlideIn>
      <div className={cx("flex", "flex-row", "gap-[10px]")}>
        <Years endYear={endYear} startYear={startYear} continueToNext={continueToNext} />

        <div
          className={cx(
            "flex-auto",

            "flex",
            "flex-row",
            "gap-[10px]",

            "cursor-pointer",
          )}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={onClick}
        >
          <Line color={color} continueToNext={continueToNext} isExpanded={isHover || isExpanded} />

          <Texts>
            <div style={{ color }}>{company}</div>

            <div>
              <span className={cx("font-black")}>{role}</span>
              {" "}
              <span className={cx("text-[#00000080]", "whitespace-nowrap")}>{duration}</span>
            </div>

            <Skills skills={skills} />

            <Description isExpanded={isExpanded}>{description}</Description>
          </Texts>
        </div>
      </div>
    </SlideIn>
  );
}

function Years({
  endYear,
  startYear,
  continueToNext = false,
}: {
  endYear: number;
  startYear: number;
  continueToNext: boolean;
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
        <div key={index}>{endYear - index}</div>
      ))}
    </div>
  );
}

function Line({
  color,
  continueToNext = false,
  isExpanded,
}: {
  color: string;
  continueToNext?: boolean;
  isExpanded: boolean;
}) {
  return (
    <div
      className={cx(
        "flex-none",

        "w-[10px]",
        !continueToNext ? "mb-[10px]" : "",

        "grid",
      )}
    >
      <div
        className={cx(isExpanded ? "w-[10px]" : "w-[2px]", "transition-all")}
        style={{ backgroundColor: color }}
      />
    </div>
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
      )}
    >
      {children}
    </div>
  );
}

function Skills({ skills }: { skills: ReactNode[] }) {
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

function Description({ isExpanded, children }: { isExpanded: boolean; children?: ReactNode }) {
  const baseRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [baseHeight, setBaseHeight] = useState(0);
  useEffect(() => setBaseHeight(baseRef.current?.clientHeight ?? 0), [baseRef]);

  return (
    <div
      className={cx(
        "flex-auto",

        isExpanded ? "opacity-100" : "opacity-0",
        "transition-all",
        "duration-[500ms]",

        "overflow-clip",

        "grid",
        "relative",
      )}
      style={{ height: isExpanded ? textRef.current?.clientHeight : baseHeight }}
    >
      <div ref={baseRef} className={cx("absolute", "size-full")} />

      <div
        ref={textRef}
        className={cx(
          "py-[10px]",

          "text-[12px]",
          "text-[#000000c0]",

          "flex",
          "flex-col",
          "gap-[15px]",

          "[&_ul]:flex",
          "[&_ul]:flex-col",
          "[&_ul]:gap-[5px]",

          "[&_ul]:list-['-__']",
          "[&_ul]:list-outside",
          "[&_ul]:pl-[2ch]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
