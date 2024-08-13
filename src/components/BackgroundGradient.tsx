import cx from "classnames";

export function BackgroundGradient() {
  return (
    <div
      className={cx(
        "sticky",
        "top-0",

        "h-0",
        "z-[-100]",
      )}
    >
      <div
        className={cx(
          "h-[100vh]",

          "bg-gradient-to-br",
          "from-[#ffe000]",
          "to-[#ffa000]",
        )}
      />
    </div>
  );
}
