import cx from "classnames";
import { useRef } from "react";
import { color_swatches, sticky_notes } from "./assets";
import { AppSection, BackgroundGradient, Copyright, HomeSection, NavBar } from "./components";

export default function App() {
  const stickyNotesRef = useRef<HTMLDivElement>(null);
  const colorSwatchesRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cx("flex", "flex-col")}>
      <BackgroundGradient />

      <NavBar stickyNotesRef={stickyNotesRef} colorSwatchesRef={colorSwatchesRef} />

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
            <p>All colors, equal distances.</p>
            <p>Sorted by hue, chroma, and lightness.</p>
          </>
        }
        href="http://color-swatches.tbun.dev"
      />

      <Copyright />
    </div>
  );
}
