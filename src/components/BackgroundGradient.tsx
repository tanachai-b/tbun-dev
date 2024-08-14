import cx from "classnames";

export function BackgroundGradient() {
  return (
    <div
      className={cx(
        "fixed",
        "inset-0",
        "z-[-1]",

        "bg-gradient-to-br",
        "from-[#ffe000]",
        "to-[#ffa000]",
      )}
    />
  );
}
