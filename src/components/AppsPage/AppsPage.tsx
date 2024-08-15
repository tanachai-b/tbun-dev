import cx from "classnames";
import { RefObject } from "react";
import { color_swatches, sticky_notes } from "src/assets";
import { AppSection, HomeSection } from "./components";

export function AppsPage({
  stickyNotesRef,
  colorSwatchesRef,
}: {
  stickyNotesRef: RefObject<HTMLDivElement>;
  colorSwatchesRef: RefObject<HTMLDivElement>;
}) {
  return (
    <>
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
    </>
  );
}
