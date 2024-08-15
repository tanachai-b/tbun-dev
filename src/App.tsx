import cx from "classnames";
import { useRef, useState } from "react";
import { AboutPage, AppsPage, BackgroundGradient, Copyright, Navigation } from "./components";

export default function App() {
  const [page, setPage] = useState<"apps" | "about">("apps");

  const stickyNotesRef = useRef<HTMLDivElement>(null);
  const colorSwatchesRef = useRef<HTMLDivElement>(null);

  function onClickLogo() {
    setPage("apps");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  }

  function onClickStickyNotes() {
    setPage("apps");
    setTimeout(() => stickyNotesRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
  }

  function onClickColorSwatches() {
    setPage("apps");
    setTimeout(() => colorSwatchesRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
  }

  function onClickAbout() {
    setPage("about");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  }

  return (
    <div className={cx("min-h-full", "flex", "flex-col")}>
      <BackgroundGradient />

      <Navigation
        onClickLogo={onClickLogo}
        onClickStickyNotes={onClickStickyNotes}
        onClickColorSwatches={onClickColorSwatches}
        onClickAbout={onClickAbout}
      />

      {page === "apps" && (
        <AppsPage stickyNotesRef={stickyNotesRef} colorSwatchesRef={colorSwatchesRef} />
      )}

      {page === "about" && <AboutPage />}

      <Copyright />
    </div>
  );
}
