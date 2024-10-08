import cx from "classnames";
import { ReactNode, RefObject } from "react";
import { color_swatches, sticky_notes } from "src/assets";
import { Copyright } from "src/common-components";
import { AppSection, HomeSection } from "./components";

export function AppsPage({
  isVisible,
  stickyNotesRef,
  colorSwatchesRef,
}: {
  isVisible: boolean;
  stickyNotesRef: RefObject<HTMLDivElement>;
  colorSwatchesRef: RefObject<HTMLDivElement>;
}) {
  return (
    <Container isVisible={isVisible}>
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
    </Container>
  );
}

function Container({ isVisible, children }: { isVisible: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex-auto",

        !isVisible ? "opacity-0" : "",
        "transition-all",
        "duration-[500ms]",

        "flex",
        "flex-col",
      )}
    >
      {children}
    </div>
  );
}
