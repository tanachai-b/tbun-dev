import cx from "classnames";

export function Copyright() {
  return (
    <div
      className={cx(
        "h-[200px]",
        "bg-[#202020]",

        "flex",
        "flex-col",
        "items-center",
        "justify-center",

        "text-center",
        "text-[#ffffff40]",
        "text-[12px]",
      )}
    >
      <div className={cx("flex", "flex-row", "items-center")}>
        <div className={cx("font-black", "text-[50px]")}>TBUN</div>

        <div className={cx("text-[30px]", "w-[1.5ch]")}>.dev</div>
      </div>

      <div>Copyright © 2024 Tanachai Bunlutangtum. All rights reserved.</div>
    </div>
  );
}
