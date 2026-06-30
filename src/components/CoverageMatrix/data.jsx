// Coverage matrix data: the documented Midnight example dApps and contracts,
// mapped to the Compact / Midnight features each one demonstrates.
//
// Scope: every column is an example that has a published docs page, and every
// feature row is something at least one of those examples actually shows. Cells
// are sourced from the example pages themselves, so each link is real and each
// mark is backed by code on the linked page.
//
// To keep this current:
//  - Add or rename a column in `columns` (id must be unique, lowercase-dashed)
//    and point `href` at its docs page.
//  - Under each feature in `features`, add `"<column-id>": "x"` for a feature
//    the example fully demonstrates, or `"?"` for partial / in-progress.
//
// `group` buckets a column as a full "DApps" or a standalone "Contracts" example.

export const columns = [
  {
    id: "calculator",
    name: "Calculator",
    group: "Contracts",
    href: "/examples/contracts/calculator"
  },
  {
    id: "token-transfers",
    name: "Token transfers",
    group: "Contracts",
    href: "/examples/contracts/token-transfers"
  },
  {
    id: "private-guest-list",
    name: "Private guest list",
    group: "Contracts",
    href: "/examples/contracts/private-guest-list"
  },
  {
    id: "election",
    name: "Election",
    group: "Contracts",
    href: "/examples/contracts/election"
  },
  {
    id: "private-reserve-auction",
    name: "Private reserve auction",
    group: "Contracts",
    href: "/examples/contracts/private-reserve-auction"
  },
  {
    id: "battleship",
    name: "Battleship",
    group: "Contracts",
    href: "/examples/contracts/battleship-simple"
  },
  {
    id: "bboard",
    name: "Bulletin board",
    group: "DApps",
    href: "/examples/dapps/bboard"
  },
  {
    id: "zkloan",
    name: "ZK Loan",
    group: "DApps",
    href: "/examples/dapps/zkloan"
  }
];

export const features = [
  {
    name: "Witness functions (private inputs)",
    coverage: {
      calculator: "x",
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "Private state",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "Public ledger state",
    coverage: {
      calculator: "x",
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "Privacy boundary (disclose)",
    coverage: {
      calculator: "x",
      "token-transfers": "x",
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "On-chain verification of off-chain compute",
    coverage: {
      calculator: "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      zkloan: "x"
    }
  },
  {
    name: "Access control to circuits",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "Ledger Counter",
    coverage: {
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x"
    }
  },
  {
    name: "Ledger Set",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      battleship: "x"
    }
  },
  {
    name: "Ledger Map",
    coverage: {
      election: "x",
      "private-reserve-auction": "x"
    }
  },
  {
    name: "Ledger List",
    coverage: {
      battleship: "x"
    }
  },
  {
    name: "Sealed ledger fields",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x"
    }
  },
  {
    name: "Standard library Maybe",
    coverage: {
      bboard: "x"
    }
  },
  {
    name: "Opaque string on the ledger",
    coverage: {
      election: "x",
      bboard: "x"
    }
  },
  {
    name: "DApp-specific public keys (untrackable identity)",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      zkloan: "x"
    }
  },
  {
    name: "Commitments and persistent hashing",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x"
    }
  },
  {
    name: "ZK proof of identity without revealing it",
    coverage: {
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "In-circuit signature verification",
    coverage: {
      zkloan: "x"
    }
  },
  {
    name: "Native token (NIGHT) operations",
    coverage: {
      "token-transfers": "x",
      "private-guest-list": "x"
    }
  },
  {
    name: "Shielded token operations",
    coverage: {
      "token-transfers": "x"
    }
  },
  {
    name: "Intermediate witnesses",
    coverage: {
      battleship: "x"
    }
  },
  {
    name: "Explicit state machine (enums)",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "Multi-step approval or turn flow",
    coverage: {
      battleship: "x",
      zkloan: "x"
    }
  },
  {
    name: "CLI tooling",
    coverage: {
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "Web UI",
    coverage: {
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "Wallet and proof server integration",
    coverage: {
      bboard: "x",
      zkloan: "x"
    }
  }
];

export default { columns, features };

// Dev-only integrity check: warn about coverage keys that do not match a known
// column id, or duplicate column ids. Stripped from production builds.
if (process.env.NODE_ENV !== "production") {
  const ids = new Set();
  columns.forEach((c) => {
    if (ids.has(c.id)) {
      console.warn(`[CoverageMatrix] duplicate column id: "${c.id}"`);
    }
    ids.add(c.id);
  });
  features.forEach((f) => {
    Object.keys(f.coverage).forEach((key) => {
      if (!ids.has(key)) {
        console.warn(
          `[CoverageMatrix] feature "${f.name}" references unknown column id "${key}"`
        );
      }
    });
  });
}
