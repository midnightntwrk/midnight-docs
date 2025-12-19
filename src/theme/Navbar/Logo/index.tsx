import React from "react";
import Link from "@docusaurus/Link";
import Logo from "@theme/Logo";

export default function NavbarLogo() {
  return (
    <div
      className="navbar__logo-wrapper"
      style={{ display: "flex", alignItems: "center" }}
    >
      {/* Logo */}
      <Logo
        className="navbar__brand"
        imageClassName="navbar__logo"
        titleClassName="navbar__title text--truncate"
      />
    </div>
  );
}
