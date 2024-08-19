import cx from "classnames";

export function TimelineEntry({
  color,
  endYear,
  startYear,
  role,
  company,
  duration,
  skills,
  continueToNext = false,
}: {
  color: string;
  endYear: number;
  startYear: number;
  role: string;
  company: string;
  duration: string;
  skills: string[];
  continueToNext?: boolean;
}) {
  const rowCount = endYear - startYear + 1;

  return (
    <div
      className={cx(
        "flex",
        "flex-row",
        "gap-[10px]",

        !continueToNext ? "pb-[10px]" : "",
      )}
    >
      <div
        className={cx(
          "flex-none",

          "w-[4ch]",

          "grid",
          "grid-flow-row",
          "auto-rows-[minmax(80px,_1fr)]",
        )}
      >
        {Array.from(Array(rowCount)).map((_, index) => (
          <div
            className={cx(
              "text-center",
              "text-[#00000080]",

              "break-inside-avoid",
            )}
          >
            {endYear - index}
          </div>
        ))}
      </div>

      <div
        className={cx(
          "flex-none",

          "w-[2px]",
        )}
        style={{ backgroundColor: color }}
      />

      <div
        className={cx(
          "flex-auto",

          "h-fit",

          "flex",
          "flex-col",

          continueToNext ? "pb-[10px]" : "",

          "break-inside-avoid",
        )}
      >
        <div style={{ color }}>{company}</div>

        <div>
          <span className={cx("font-black")}>{role}</span>
          {" "}
          <span className={cx("text-[#00000080]", "whitespace-nowrap")}>{duration}</span>
        </div>

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
          {skills.map((skill) => (
            <div>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
