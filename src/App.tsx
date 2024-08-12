import cx from "classnames";

export default function App() {
  return (
    <div className={cx("size-full", "flex", "flex-col")}>
      <div
        className={cx(
          "size-full",

          "grid",
          "grid-flow-col",
          "place-content-center",
          "items-center",

          "bg-[#ffe000]",
        )}
      >
        <div className={cx("font-black", "text-[200px]")}>TBUN</div>

        <div className={cx("font-normal", "text-[100px]")}>.dev</div>
      </div>
    </div>
  );
}
