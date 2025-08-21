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
      {/* Docs Home Link */}
      <Link
        to="/"
        className="navbar__item navbar__link"
        style={{
          fontWeight: "bold",
          fontSize: "1rem",
          textDecoration: "none",
          color: "inherit"
        }}
      >
        Docs Home
      </Link>
    </div>
  );
}
