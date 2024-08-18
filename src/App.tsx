import cx from "classnames";
import { useRef } from "react";
import { AboutPage, AppsPage, BackgroundGradient, Navigation } from "./components";
import { useNavigation } from "./hooks";

export default function App() {
  const stickyNotesRef = useRef<HTMLDivElement>(null);
  const colorSwatchesRef = useRef<HTMLDivElement>(null);

  const { page, isPageVisible, navigateTo } = useNavigation();

  return (
    <div className={cx("min-h-full", "flex", "flex-col")}>
      <BackgroundGradient />

      <Navigation
        onClickLogo={() => navigateTo("apps")}
        onClickStickyNotes={() => navigateTo("apps", stickyNotesRef)}
        onClickColorSwatches={() => navigateTo("apps", colorSwatchesRef)}
        onClickAbout={() => navigateTo("about")}
      />

      {page === "apps" && (
        <AppsPage
          isVisible={isPageVisible}
          stickyNotesRef={stickyNotesRef}
          colorSwatchesRef={colorSwatchesRef}
        />
      )}

      {page === "about" && <AboutPage isVisible={isPageVisible} />}
    </div>
  );
}
