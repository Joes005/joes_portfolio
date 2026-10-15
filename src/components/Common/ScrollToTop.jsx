import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there is a hash like #services or #contact, give DOM a tick then scroll
      const elem = document.querySelector(hash);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // Otherwise scroll to the top smoothly
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
