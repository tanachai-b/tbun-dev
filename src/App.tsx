import cx from "classnames";
import { RefObject, useRef, useState } from "react";
import { AboutPage, AppsPage, BackgroundGradient, Copyright, Navigation } from "./components";

export default function App() {
  type Page = "apps" | "about";

  const [page, setPage] = useState<Page>("apps");
  const [visiblePage, setVisiblePage] = useState<Page | undefined>("apps");

  const stickyNotesRef = useRef<HTMLDivElement>(null);
  const colorSwatchesRef = useRef<HTMLDivElement>(null);

  function navTo(toPage: Page, ref?: RefObject<HTMLDivElement>) {
    setVisiblePage(undefined);
    setTimeout(
      () => {
        setPage(toPage);
        setTimeout(() => {
          setVisiblePage(toPage);
          if (ref != null) {
            ref.current?.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 0);
      },
      toPage === page ? 0 : 500,
    );
  }

  return (
    <div className={cx("min-h-full", "flex", "flex-col")}>
      <BackgroundGradient />

      <Navigation
        onClickLogo={() => navTo("apps")}
        onClickStickyNotes={() => navTo("apps", stickyNotesRef)}
        onClickColorSwatches={() => navTo("apps", colorSwatchesRef)}
        onClickAbout={() => navTo("about")}
      />

      {page === "apps" && (
        <AppsPage
          isVisible={visiblePage === "apps"}
          stickyNotesRef={stickyNotesRef}
          colorSwatchesRef={colorSwatchesRef}
        />
      )}

      {page === "about" && <AboutPage isVisible={visiblePage === "about"} />}

      <Copyright />
    </div>
  );
}
