import { RefObject, useEffect, useState } from "react";

const pages = ["apps", "about", "resume"] as const;
type Page = (typeof pages)[number];

export function useNavigation() {
  const initialPage = getPageFromPath();

  const [page, setPage] = useState<Page>(initialPage);
  const [isPageVisible, setIsPageVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsPageVisible(true), 0);
  }, []);

  window.addEventListener("popstate", () => setPage(getPageFromPath()));

  function navigateTo(toPage: Page, ref?: RefObject<HTMLDivElement>) {
    updatePath(toPage === "apps" ? "" : toPage);

    if (toPage === page) {
      if (ref != null) {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      setIsPageVisible(false);

      setTimeout(() => {
        setPage(toPage);

        setTimeout(() => {
          if (ref != null) {
            ref.current?.scrollIntoView();
          } else {
            window.scrollTo({ top: 0 });
          }

          setIsPageVisible(true);
        }, 0);
      }, 500);
    }
  }

  return { page, isPageVisible, navigateTo };
}

function getPageFromPath() {
  const baseUrl = import.meta.env.BASE_URL;
  const fullPath = location.pathname;

  const path = fullPath.substring(baseUrl.length);
  const page = isPage(path) ? path : "apps";

  return page;
}

function isPage(path: string): path is Page {
  return pages.includes(path as Page);
}

function updatePath(path: string) {
  const baseUrl = import.meta.env.BASE_URL;
  history.pushState({}, "", `${baseUrl}${path}`);
}
