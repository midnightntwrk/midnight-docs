import React, { useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { useLocation } from "@docusaurus/router";

export default function EnforceDarkMode() {
  const { pathname } = useLocation();
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [colorMode]);
  

  return null;
}
