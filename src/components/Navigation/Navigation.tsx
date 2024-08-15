import cx from "classnames";
import { useState } from "react";
import { NavBar, NavBarItem, NavScreen, NavScreenItem, ResponsiveNav } from "./components";

export function Navigation({
  onClickLogo,
  onClickStickyNotes,
  onClickColorSwatches,
  onClickAbout,
}: {
  onClickLogo: () => void;
  onClickStickyNotes: () => void;
  onClickColorSwatches: () => void;
  onClickAbout: () => void;
}) {
  const [isShowNavScreen, setIsShowNavScreen] = useState(false);

  return (
    <>
      <NavBar>
        <NavBarItem onClick={onClickLogo}>
          <div className={cx("font-black", "text-[30px]")}>TBUN</div>
        </NavBarItem>

        <ResponsiveNav
          onClickOverflowMenu={() => setIsShowNavScreen(true)}
          onOverflowChange={(isOverflow) => !isOverflow && setIsShowNavScreen(false)}
        >
          <NavBarItem onClick={onClickStickyNotes}>Sticky Notes</NavBarItem>

          <NavBarItem onClick={onClickColorSwatches}>Color Swatches</NavBarItem>

          <div className={cx("flex-auto")} />

          <NavBarItem onClick={onClickAbout}>About</NavBarItem>
        </ResponsiveNav>
      </NavBar>

      <NavScreen isVisible={isShowNavScreen} onClose={() => setIsShowNavScreen(false)}>
        <NavScreenItem
          onClick={() => {
            onClickLogo();
            setIsShowNavScreen(false);
          }}
        >
          <div className={cx("text-[30px]", "font-black")}>TBUN</div>
        </NavScreenItem>

        <NavScreenItem
          onClick={() => {
            onClickStickyNotes();
            setIsShowNavScreen(false);
          }}
        >
          Sticky Notes
        </NavScreenItem>

        <NavScreenItem
          onClick={() => {
            onClickColorSwatches();
            setIsShowNavScreen(false);
          }}
        >
          Color Swatches
        </NavScreenItem>

        <div className={cx("h-[20px]")} />

        <NavScreenItem
          onClick={() => {
            onClickAbout();
            setIsShowNavScreen(false);
          }}
        >
          About
        </NavScreenItem>
      </NavScreen>
    </>
  );
}
