import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useColorMode} from '@docusaurus/theme-common';

const VERSION_PREFIX = '(?:(?:next|\\d+\\.\\d+\\.\\d+)\\/)?';
const COMPACT_ROUTE_PATTERNS: RegExp[] = [
  // /compact, /compact/... and versioned equivalents.
  new RegExp(`^\\/${VERSION_PREFIX}compact(?:\\/|$)`),

  // Compact Runtime API reference
  new RegExp(`^\\/${VERSION_PREFIX}api-reference\\/compact-runtime(?:\\/|$)`),

  // Guides that should use the Compact logo.
  new RegExp(`^\\/${VERSION_PREFIX}guides\\/compact-javascript-runtime(?:\\/|$)`),
  new RegExp(`^\\/${VERSION_PREFIX}guides\\/use-compact-javascript-implementation(?:\\/|$)`),
  // Compact category pages at root and versioned paths.
  new RegExp(
    `^\\/${VERSION_PREFIX}category\\/(?:reference|compilation-and-tooling|data-types|standard-library)(?:\\/|$)`
  ),
];

function isCompactRoute(pathname: string, baseUrl: string): boolean {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const withoutBase = pathname.startsWith(normalizedBase)
    ? pathname.slice(normalizedBase.length - 1)
    : pathname;
  return COMPACT_ROUTE_PATTERNS.some((pattern) => pattern.test(withoutBase));
}

export default function NavbarLogo(): React.JSX.Element {
  const {pathname} = useLocation();
  const {colorMode} = useColorMode();
  const homeHref = useBaseUrl('/');
  const isCompact = isCompactRoute(pathname, homeHref);

  const lightLogo = useBaseUrl(
    isCompact ? '/img/midnight-compact-logo-light.svg' : '/img/midnight-header-logo-light.svg'
  );
  const darkLogo = useBaseUrl(
    isCompact ? '/img/midnight-compact-logo-dark.svg' : '/img/midnight-header-logo-dark.svg'
  );

  return (
    <div className="navbar__logo-wrapper" style={{display: 'flex', alignItems: 'center'}}>
      <Link className="navbar__brand" to={homeHref}>
        <img
          className="navbar__logo"
          src={colorMode === 'dark' ? darkLogo : lightLogo}
          alt={isCompact ? 'Midnight Compact Logo' : 'Midnight Logo'}
        />
      </Link>
    </div>
  );
}
