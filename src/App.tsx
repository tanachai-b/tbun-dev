import cx from "classnames";
import { ReactNode } from "react";
import { color_swatches, sticky_notes } from "./assets";
import { AppSection, BackgroundGradient, Copyright, HomeSection } from "./components";

export default function App() {
  return (
    <Container>
      <BackgroundGradient />

      <HomeSection />

      <div className={cx("h-[50px]", "bg-[#202020]")} />

      <AppSection
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
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "w-full",

        "flex",
        "flex-col",
      )}
    >
      {children}
    </div>
  );
}
