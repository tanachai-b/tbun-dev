import { RefObject, useEffect, useState } from "react";

export function useNavigation() {
  type Page = "apps" | "about" | "resume";

  const [page, setPage] = useState<Page>("apps");
  const [isPageVisible, setIsPageVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsPageVisible(true), 0);
  }, []);

  function navigateTo(toPage: Page, ref?: RefObject<HTMLDivElement>) {
    setIsPageVisible(false);
    setTimeout(
      () => {
        setPage(toPage);
        setTimeout(() => {
          setIsPageVisible(true);
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

  return { page, isPageVisible, navigateTo };
}
