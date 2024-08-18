import cx from "classnames";

export function TimelineEntry({
  color,
  endYear,
  startYear,
  role,
  company,
  duration,
  skills,
}: {
  color: string;
  endYear: number;
  startYear: number;
  role: string;
  company: string;
  duration: string;
  skills: string[];
}) {
  return (
    <div className={cx("flex", "flex-row")}>
      <div className={cx("flex-none", "flex", "flex-col")}>
        {Array.from(Array(endYear - startYear + 1)).map((_, index) => (
          <div
            className={cx(
              "h-[100px]",
              "w-[4ch]",
              "box-content",

              "text-center",

              "break-inside-avoid",
            )}
            style={{ color }}
          >
            {endYear - index}
          </div>
        ))}
      </div>

      <div
        className={cx(
          "flex-none",

          "w-[30px]",

          "grid",
          "place-items-center",

          "pb-[20px]",
        )}
      >
        <div
          className={cx(
            "w-[5px]",
            "h-full",

            "rounded-full",
          )}
          style={{ backgroundColor: color }}
        />
      </div>

      <div
        className={cx(
          "flex-auto",

          "h-[100px]",

          "flex",
          "flex-col",

          "break-inside-avoid",
        )}
      >
        <div style={{ color }}>{company}</div>

        <div>
          <span className={cx("font-black")}>{role}</span>
          <span className={cx("ml-[10px]", "text-[#00000080]", "whitespace-nowrap")}>
            {duration}
          </span>
        </div>

        <div
          className={cx(
            "flex",
            "flex-row",
            "flex-wrap",

            "mt-[5px]",
            "gap-x-[7px]",
            "gap-y-[5px]",

            "text-[11px]",
            "text-[#00000080]",
            "font-bold",
            "leading-none",
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
