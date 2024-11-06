import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 0);
    return () => clearTimeout(timeout);
  }, [pathname, search]);
  return null;
};

export default ScrollTop;
