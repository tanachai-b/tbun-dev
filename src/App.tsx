import cx from "classnames";
import { useRef } from "react";
import { color_swatches, sticky_notes } from "./assets";
import { NavBar, NavBarItem, NavScreenItem, ResponsiveNav } from "./common-components";
import { AppSection, BackgroundGradient, Copyright, HomeSection } from "./components";

export default function App() {
  const stickyNotesRef = useRef<HTMLDivElement>(null);
  const colorSwatchesRef = useRef<HTMLDivElement>(null);

  function onClickLogo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function onClickStickyNotes() {
    stickyNotesRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function onClickColorSwatches() {
    colorSwatchesRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={cx("flex", "flex-col")}>
      <BackgroundGradient />

      <NavBar>
        <NavBarItem onClick={onClickLogo}>
          <div className={cx("font-black", "text-[30px]")}>TBUN</div>
        </NavBarItem>

        <ResponsiveNav
          navItems={
            <>
              <NavBarItem onClick={onClickStickyNotes}>Sticky Notes</NavBarItem>

              <NavBarItem onClick={onClickColorSwatches}>Color Swatches</NavBarItem>

              <div className={cx("flex-auto")} />

              {/* <NavBarItem onClick={() => {}}>About</NavBarItem> */}
            </>
          }
          navScreenItems={(closeMenu) => (
            <>
              <NavScreenItem
                onClick={() => {
                  onClickLogo();
                  closeMenu();
                }}
              >
                <div className={cx("text-[30px]", "font-black")}>TBUN</div>
              </NavScreenItem>

              <NavScreenItem
                onClick={() => {
                  onClickStickyNotes();
                  closeMenu();
                }}
              >
                Sticky Notes
              </NavScreenItem>

              <NavScreenItem
                onClick={() => {
                  onClickColorSwatches();
                  closeMenu();
                }}
              >
                Color Swatches
              </NavScreenItem>

              <div className={cx("h-[20px]")} />

              {/* <NavScreenItem onClick={() => {}}>About</NavScreenItem> */}
            </>
          )}
        />
      </NavBar>

      <HomeSection />

      <div className={cx("h-[50px]", "bg-[#202020]")} />

      <AppSection
        divRef={stickyNotesRef}
        image={sticky_notes}
        title="Sticky Notes"
        description={
          <>
            <p>Realistic sticky notes.</p>
            <p>No more small texts, scrolling, and resizable papers!</p>
          </>
        }
        href="http://sticky-notes.tbun.dev"
      />

      <div className={cx("h-[50px]", "bg-[#202020]")} />

      <AppSection
        divRef={colorSwatchesRef}
        image={color_swatches}
        title="Color Swatches"
        description={
          <>
            <p>Generate equal distance color swatches.</p>
            <p>Sorted by hue, chroma, and lightness.</p>
          </>
        }
        href="http://color-swatches.tbun.dev"
      />

      <Copyright />
    </div>
  );
}
