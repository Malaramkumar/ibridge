import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change or same-page navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.key]); // `key` changes even on same pathname clicks

  return null;
}

export default ScrollToTop;
