// Coverage matrix data: the written tutorials, mapped to the Compact / Midnight
// features each one teaches.
//
// Scope: every column is a written tutorial under docs/tutorials/, and every
// feature row is something at least one tutorial covers. Cells are sourced from
// the tutorial pages themselves and deep-link to the section where the feature
// is covered: level "x" means the tutorial teaches or demonstrates the feature
// (code plus explanation), "?" means it appears only briefly or incidentally.
//
// To keep this current:
//  - Add or rename a column in `columns` (id must be unique, lowercase-dashed)
//    and point `href` at its docs page.
//  - Under each feature in `features`, add `"<column-id>": x("/route#anchor")`
//    for a feature the tutorial teaches in depth, or `q("/route#anchor")` for a
//    brief touch. The href must point at the page section covering the feature;
//    the site build validates the anchors.
//  - `section` groups rows into collapsible table sections and dropdown groups.
//
// `group` buckets a column as a full "DApps" tutorial or a contract-focused
// "Contracts" tutorial.

const x = (href) => ({ level: "x", href });
const q = (href) => ({ level: "?", href });

// Tutorial page routes
const BB_SC = "/tutorials/bboard/smart-contract";
const BB_CLI = "/tutorials/bboard/bboard-cli";
const BB_API = "/tutorials/bboard/bboard-api-implementation";
const BB_IMPL = "/tutorials/bboard/bboard-cli-implementation";
const PP_SC = "/tutorials/private-party/smart-contract";
const BS_SC = "/tutorials/bship/smart-contract";
const BS_TEST = "/tutorials/bship/test-suite";
const LB_OV = "/tutorials/leaderboard/overview";
const LB_SC = "/tutorials/leaderboard/smart-contract";
const LB_API = "/tutorials/leaderboard/api-layer";
const LB_UI = "/tutorials/leaderboard/browser-dapp";
const ZK_SC = "/tutorials/zk-loan/smart-contract";
const ZK_API = "/tutorials/zk-loan/attestation-api";
const ZK_CLI = "/tutorials/zk-loan/cli";

export const columns = [
  {
    id: "bboard",
    name: "Bulletin board",
    group: "DApps",
    href: "/tutorials/bboard"
  },
  {
    id: "private-party",
    name: "Private party",
    group: "Contracts",
    href: "/tutorials/private-party"
  },
  {
    id: "bship",
    name: "Battleship",
    group: "Contracts",
    href: "/tutorials/bship"
  },
  {
    id: "leaderboard",
    name: "Leaderboard",
    group: "DApps",
    href: "/tutorials/leaderboard"
  },
  {
    id: "zk-loan",
    name: "ZK Loan",
    group: "DApps",
    href: "/tutorials/zk-loan"
  }
];

const LANG = "Compact language";
const CIRCUITS = "Circuits";
const PRIVACY = "Privacy patterns";
const TOKENS = "Tokens";
const WITNESS = "Witness patterns";
const CONNECTOR = "DApp Connector";
const MJS = "MidnightJS";
const WALLET = "Wallet SDK";
const DEVNET = "Local devnet and testing";
const ADVANCED = "Advanced cryptography and services";

export const features = [
  // ---------- Compact language ----------
  {
    name: "Field",
    section: LANG,
    coverage: {
      bboard: q(`${BB_SC}#create-the-post-circuit`),
      "zk-loan": x(`${ZK_SC}#write-the-schnorr-signature-module`)
    }
  },
  {
    name: "Uint",
    section: LANG,
    coverage: {
      "private-party": q(`${PP_SC}#setup`),
      bship: x(`${BS_SC}#setup`),
      leaderboard: q(`${LB_SC}#write-the-contract`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Bytes",
    section: LANG,
    coverage: {
      bboard: x(`${BB_SC}#define-the-ledger-state`),
      "private-party": q(`${PP_SC}#setup`),
      bship: x(`${BS_SC}#setup`),
      leaderboard: q(`${LB_SC}#write-the-contract`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Boolean",
    section: LANG,
    coverage: {
      leaderboard: q(`${LB_SC}#submitscore`),
      "zk-loan": q(`${ZK_SC}#admin-circuits`)
    }
  },
  {
    name: "Opaque types",
    section: LANG,
    coverage: {
      bboard: x(`${BB_SC}#define-the-ledger-state`)
    }
  },
  {
    name: "Tuples and destructuring",
    section: LANG,
    coverage: {
      "zk-loan": x(`${ZK_SC}#core-loan-circuits`)
    }
  },
  {
    name: "Structs",
    section: LANG,
    coverage: {
      "private-party": q(`${PP_SC}#compact-tutorial`),
      leaderboard: x(`${LB_SC}#write-the-contract`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Enums",
    section: LANG,
    coverage: {
      bboard: x(`${BB_SC}#define-the-board-state-enum`),
      "private-party": x(`${PP_SC}#setup`),
      bship: x(`${BS_SC}#state-machines`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Vector",
    section: LANG,
    coverage: {
      bboard: q(`${BB_SC}#create-the-publickey-helper-circuit`),
      "private-party": q(`${PP_SC}#access-control`),
      bship: q(`${BS_SC}#hashing-circuits`),
      leaderboard: q(`${LB_SC}#ownercommitment`),
      "zk-loan": x(`${ZK_SC}#write-the-schnorr-signature-module`)
    }
  },
  {
    name: "Maybe / Either",
    section: LANG,
    coverage: {
      bboard: x(`${BB_SC}#define-the-ledger-state`),
      "private-party": q(`${PP_SC}#compact-tutorial`),
      bship: q(`${BS_SC}#shoot-circuits`)
    }
  },
  {
    name: "if / else",
    section: LANG,
    coverage: {
      "private-party": x(`${PP_SC}#compact-tutorial`),
      bship: x(`${BS_SC}#check-boards-locally`),
      leaderboard: x(`${LB_SC}#submitscore`),
      "zk-loan": x(`${ZK_SC}#core-loan-circuits`)
    }
  },
  {
    name: "Type casting",
    section: LANG,
    coverage: {
      bboard: x(`${BB_SC}#create-the-post-circuit`),
      "private-party": q(`${PP_SC}#compact-tutorial`),
      bship: q(`${BS_SC}#shoot-circuits`),
      leaderboard: q(`${LB_SC}#submitscore`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Importing modules (import, include)",
    section: LANG,
    coverage: {
      bboard: q(`${BB_SC}#import-the-standard-library`),
      "private-party": q(`${PP_SC}#setup`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Declaring modules (module {})",
    section: LANG,
    coverage: {
      "zk-loan": x(`${ZK_SC}#write-the-schnorr-signature-module`)
    }
  },
  {
    name: "Nominal type aliases (new type)",
    section: LANG,
    coverage: {
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Bounded compile-time for loops",
    section: LANG,
    coverage: {
      "zk-loan": x(`${ZK_SC}#pin-migration-and-schnorr-re-export`)
    }
  },
  {
    name: "default<T> initialization",
    section: LANG,
    coverage: {
      bboard: q(`${BB_SC}#create-the-constructor`),
      "zk-loan": q(`${ZK_SC}#core-loan-circuits`)
    }
  },
  {
    name: "Ternary / branchless selection",
    section: LANG,
    coverage: {
      bship: q(`${BS_SC}#check-boards-locally`),
      "zk-loan": x(`${ZK_SC}#core-loan-circuits`)
    }
  },
  {
    name: "Ledger Counter",
    section: LANG,
    coverage: {
      bboard: x(`${BB_SC}#define-the-ledger-state`),
      bship: x(`${BS_SC}#setup`),
      leaderboard: x(`${LB_SC}#write-the-contract`)
    }
  },
  {
    name: "Ledger Cell",
    section: LANG,
    coverage: {
      bboard: q(`${BB_SC}#define-the-ledger-state`),
      "private-party": q(`${PP_SC}#setup`),
      bship: q(`${BS_SC}#setup`),
      "zk-loan": q(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Ledger Map",
    section: LANG,
    coverage: {
      leaderboard: x(`${LB_SC}#write-the-contract`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Ledger Set",
    section: LANG,
    coverage: {
      "private-party": x(`${PP_SC}#setup`),
      bship: x(`${BS_SC}#setup`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Ledger List",
    section: LANG,
    coverage: {
      bship: x(`${BS_SC}#shoot-circuits`)
    }
  },
  {
    name: "Nested ADTs",
    section: LANG,
    coverage: {
      bboard: q(`${BB_SC}#define-the-ledger-state`),
      leaderboard: q(`${LB_SC}#write-the-contract`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Sealed ledger fields",
    section: LANG,
    coverage: {
      "private-party": x(`${PP_SC}#setup`)
    }
  },
  {
    name: "export modifier",
    section: LANG,
    coverage: {
      bboard: x(`${BB_SC}#define-the-board-state-enum`),
      "private-party": q(`${PP_SC}#data-private-by-default`),
      bship: q(`${BS_SC}#compact-tutorial`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Constructor",
    section: LANG,
    coverage: {
      bboard: x(`${BB_SC}#create-the-constructor`),
      "private-party": x(`${PP_SC}#constructor`),
      bship: x(`${BS_SC}#constructor`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },

  // ---------- Circuits ----------
  {
    name: "Public (exported) circuits",
    section: CIRCUITS,
    coverage: {
      bboard: x(`${BB_SC}#create-the-post-circuit`),
      "private-party": x(`${PP_SC}#access-control`),
      bship: x(`${BS_SC}#shoot-circuits`),
      leaderboard: x(`${LB_SC}#write-the-contract`),
      "zk-loan": x(`${ZK_SC}#core-loan-circuits`)
    }
  },
  {
    name: "Pure circuits",
    section: CIRCUITS,
    coverage: {
      bboard: x(`${BB_SC}#circuit-types`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Witnesses",
    section: CIRCUITS,
    coverage: {
      bboard: x(`${BB_SC}#declare-the-witness-function`),
      "private-party": q(`${PP_SC}#witnesses`),
      bship: x(`${BS_SC}#witnesses`),
      leaderboard: x(`${LB_API}#witness-provider`),
      "zk-loan": x(`${ZK_SC}#create-the-witness-function-private-data-provider`)
    }
  },
  {
    name: "disclose()",
    section: CIRCUITS,
    coverage: {
      bboard: x(`${BB_SC}#create-the-post-circuit`),
      "private-party": x(`${PP_SC}#data-private-by-default`),
      bship: x(`${BS_SC}#shoot-circuits`),
      leaderboard: x(`${LB_SC}#submitscore`),
      "zk-loan": x(`${ZK_SC}#core-loan-circuits`)
    }
  },

  // ---------- Privacy patterns ----------
  {
    name: "persistentCommit",
    section: PRIVACY,
    coverage: {
      "private-party": x(`${PP_SC}#compact-tutorial`),
      bship: q(`${BS_SC}#hashing-circuits`)
    }
  },
  {
    name: "persistentHash",
    section: PRIVACY,
    coverage: {
      bboard: x(`${BB_SC}#create-the-publickey-helper-circuit`),
      "private-party": x(`${PP_SC}#access-control`),
      bship: x(`${BS_SC}#hashing-circuits`),
      leaderboard: x(`${LB_SC}#ownercommitment`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "transientHash",
    section: PRIVACY,
    coverage: {
      "zk-loan": x(`${ZK_SC}#write-the-schnorr-signature-module`)
    }
  },
  {
    name: "Commit-reveal",
    section: PRIVACY,
    coverage: {
      "private-party": x(`${PP_SC}#operational-steps`),
      bship: x(`${BS_SC}#cheating-assertions`)
    }
  },
  {
    name: "Unlinkable actions (rotating keys)",
    section: PRIVACY,
    coverage: {
      bboard: q(`${BB_SC}#create-the-post-circuit`),
      "zk-loan": x(`${ZK_SC}#pin-migration-and-schnorr-re-export`)
    }
  },
  {
    name: "Selective disclosure",
    section: PRIVACY,
    coverage: {
      bship: x(`${BS_SC}#data-public-vs-private`),
      leaderboard: x(`${LB_SC}#submitscore`),
      "zk-loan": x(`${ZK_SC}#what-you-built-in-part-1`)
    }
  },
  {
    name: "Domain separation",
    section: PRIVACY,
    coverage: {
      bboard: x(`${BB_SC}#create-the-publickey-helper-circuit`),
      "private-party": x(`${PP_SC}#access-control`),
      bship: x(`${BS_SC}#hashing-circuits`),
      leaderboard: x(`${LB_SC}#ownercommitment`),
      "zk-loan": x(`${ZK_SC}#the-header-types-ledger-state-and-constructor`)
    }
  },
  {
    name: "Secret/preimage-based authorization",
    section: PRIVACY,
    coverage: {
      bboard: x(`${BB_SC}#create-the-takedown-circuit`),
      "private-party": x(`${PP_SC}#access-control`),
      bship: x(`${BS_SC}#hashing-circuits`),
      leaderboard: x(`${LB_SC}#verifyownership`),
      "zk-loan": x(`${ZK_SC}#admin-circuits`)
    }
  },
  {
    name: "Witness-derived caller identity (not ownPublicKey())",
    section: PRIVACY,
    coverage: {
      bboard: x(`${BB_SC}#create-the-publickey-helper-circuit`),
      "private-party": q(`${PP_SC}#witnesses`),
      bship: x(`${BS_SC}#hashing-circuits`),
      leaderboard: x(`${LB_SC}#ownercommitment`),
      "zk-loan": x(`${ZK_SC}#create-the-witness-function-private-data-provider`)
    }
  },

  // ---------- Tokens ----------
  {
    name: "Shielded tokens",
    section: TOKENS,
    coverage: {
      bboard: q(`${BB_IMPL}#implement-wallet-utilities`),
      "private-party": q(`${PP_SC}#conclusion`),
      "zk-loan": q(`${ZK_CLI}#wallet-initialization`)
    }
  },
  {
    name: "Unshielded tokens",
    section: TOKENS,
    coverage: {
      bboard: x(`${BB_IMPL}#wait-for-unshielded-funds`),
      "private-party": x(`${PP_SC}#data-private-by-default`),
      "zk-loan": q(`${ZK_CLI}#1-fund-the-wallet`)
    }
  },
  {
    name: "Native token (NIGHT)",
    section: TOKENS,
    coverage: {
      bboard: x(`${BB_IMPL}#wait-for-unshielded-funds`),
      "private-party": x(`${PP_SC}#compact-tutorial`),
      leaderboard: q(`${LB_OV}#wallet-setup`),
      "zk-loan": x(`${ZK_CLI}#1-fund-the-wallet`)
    }
  },
  {
    name: "Token colors",
    section: TOKENS,
    coverage: {
      bboard: q(`${BB_IMPL}#implement-wallet-utilities`),
      "private-party": q(`${PP_SC}#compact-tutorial`)
    }
  },
  {
    name: "sendUnshielded",
    section: TOKENS,
    coverage: {
      "private-party": x(`${PP_SC}#compact-tutorial`)
    }
  },

  // ---------- Witness patterns ----------
  {
    name: "Witness setters",
    section: WITNESS,
    coverage: {
      bboard: q(`${BB_SC}#create-the-witnesses-file`),
      bship: x(`${BS_SC}#witnesses`)
    }
  },
  {
    name: "Witness getters",
    section: WITNESS,
    coverage: {
      bboard: x(`${BB_SC}#create-the-witnesses-file`),
      bship: x(`${BS_SC}#witnesses`),
      leaderboard: x(`${LB_API}#witness-provider`),
      "zk-loan": x(`${ZK_SC}#create-the-witness-function-private-data-provider`)
    }
  },
  {
    name: "Intermediate witnesses (modifiers)",
    section: WITNESS,
    coverage: {
      bship: x(`${BS_SC}#check-boards-locally`)
    }
  },

  // ---------- DApp Connector ----------
  {
    name: "Connect wallet",
    section: CONNECTOR,
    coverage: {
      leaderboard: x(`${LB_UI}#wallet-bridge`)
    }
  },
  {
    name: "Authorization",
    section: CONNECTOR,
    coverage: {
      leaderboard: x(`${LB_UI}#wallet-bridge`)
    }
  },
  {
    name: "Network ID handling",
    section: CONNECTOR,
    coverage: {
      leaderboard: x(`${LB_UI}#wallet-bridge`)
    }
  },
  {
    name: "Reading wallet state",
    section: CONNECTOR,
    coverage: {
      leaderboard: x(`${LB_UI}#wallet-bridge`)
    }
  },
  {
    name: "Submitting transactions",
    section: CONNECTOR,
    coverage: {
      leaderboard: x(`${LB_UI}#wallet-bridge`)
    }
  },
  {
    name: "Error handling",
    section: CONNECTOR,
    coverage: {
      leaderboard: x(`${LB_UI}#application-component`)
    }
  },
  {
    name: "Transaction serialization and wallet handoff",
    section: CONNECTOR,
    coverage: {
      leaderboard: x(`${LB_UI}#wallet-bridge`)
    }
  },

  // ---------- MidnightJS ----------
  {
    name: "Providers",
    section: MJS,
    coverage: {
      bboard: x(`${BB_IMPL}#implement-wallet-provider`),
      "private-party": q(`${PP_SC}#testing`),
      bship: x(`${BS_TEST}#midnight-setup`),
      leaderboard: x(`${LB_UI}#wallet-bridge`),
      "zk-loan": x(`${ZK_CLI}#provider-configuration-and-utilities`)
    }
  },
  {
    name: "deployContract",
    section: MJS,
    coverage: {
      bboard: x(`${BB_API}#implement-the-deploy-method`),
      "private-party": q(`${PP_SC}#testing`),
      bship: x(`${BS_TEST}#deploying-the-contract`),
      leaderboard: x(`${LB_API}#leaderboardapi-class`),
      "zk-loan": x(`${ZK_CLI}#compiled-smart-contract-and-deployjoin`)
    }
  },
  {
    name: "findDeployedContract",
    section: MJS,
    coverage: {
      bboard: x(`${BB_API}#implement-the-join-method`),
      leaderboard: x(`${LB_API}#leaderboardapi-class`),
      "zk-loan": x(`${ZK_CLI}#compiled-smart-contract-and-deployjoin`)
    }
  },
  {
    name: "Calling circuits from TypeScript",
    section: MJS,
    coverage: {
      bboard: x(`${BB_API}#implement-the-post-method`),
      "private-party": q(`${PP_SC}#testing`),
      bship: x(`${BS_TEST}#bob-accepts-the-game`),
      leaderboard: x(`${LB_API}#leaderboardapi-class`),
      "zk-loan": x(`${ZK_CLI}#circuit-call-wrappers-and-state-display`)
    }
  },
  {
    name: "Observing contract state",
    section: MJS,
    coverage: {
      bboard: x(`${BB_API}#implement-the-constructor-and-state-observable`),
      bship: x(`${BS_TEST}#ledger-queries`),
      leaderboard: x(`${LB_UI}#read-on-chain-state`),
      "zk-loan": x(`${ZK_CLI}#wallet-context-and-ledger-state`)
    }
  },
  {
    name: "Private state storage",
    section: MJS,
    coverage: {
      bboard: x(`${BB_API}#implement-private-state-helper`),
      "private-party": q(`${PP_SC}#witnesses`),
      bship: x(`${BS_TEST}#midnight-setup`),
      leaderboard: x(`${LB_UI}#in-memory-private-state-provider`),
      "zk-loan": x(`${ZK_CLI}#provider-configuration-and-utilities`)
    }
  },
  {
    name: "Private state modification",
    section: MJS,
    coverage: {
      bship: x(`${BS_TEST}#further-cheating-attempts`),
      "zk-loan": x(`${ZK_CLI}#attestation-and-loan-request-logic`)
    }
  },
  {
    name: "Malicious private state",
    section: MJS,
    coverage: {
      bship: x(`${BS_TEST}#further-cheating-attempts`),
      "zk-loan": q(`${ZK_SC}#create-the-witness-function-private-data-provider`)
    }
  },
  {
    name: "Transaction lifecycle",
    section: MJS,
    coverage: {
      bboard: x(`${BB_IMPL}#implement-transaction-methods`),
      "private-party": q(`${PP_SC}#testing`),
      bship: q(`${BS_TEST}#wallet-preparation`),
      leaderboard: x(`${LB_UI}#wallet-bridge`),
      "zk-loan": x(`${ZK_CLI}#wallet-and-provider-infrastructure`)
    }
  },
  {
    name: "Error types",
    section: MJS,
    coverage: {
      bboard: q(`${BB_IMPL}#implement-transaction-methods`)
    }
  },

  // ---------- Wallet SDK ----------
  {
    name: "Wallet generation",
    section: WALLET,
    coverage: {
      bboard: x(`${BB_IMPL}#wallet-setup-menu`),
      bship: x(`${BS_TEST}#wallet-preparation`),
      "zk-loan": x(`${ZK_CLI}#wallet-initialization`)
    }
  },
  {
    name: "Address encoding and decoding",
    section: WALLET,
    coverage: {
      bboard: q(`${BB_IMPL}#implement-key-provider-methods`),
      "zk-loan": q(`${ZK_CLI}#wallet-initialization`)
    }
  },
  {
    name: "Balance queries",
    section: WALLET,
    coverage: {
      bboard: x(`${BB_IMPL}#get-initial-wallet-state`),
      "private-party": q(`${PP_SC}#testing`),
      "zk-loan": x(`${ZK_CLI}#wallet-context-and-ledger-state`)
    }
  },
  {
    name: "DUST registration",
    section: WALLET,
    coverage: {
      bboard: x(`${BB_IMPL}#implement-dust-generation`),
      leaderboard: q(`${LB_OV}#wallet-setup`),
      "zk-loan": x(`${ZK_CLI}#wallet-and-provider-infrastructure`)
    }
  },
  {
    name: "Sync state and wallet readiness",
    section: WALLET,
    coverage: {
      bboard: x(`${BB_IMPL}#sync-wallet`),
      "private-party": q(`${PP_SC}#testing`),
      bship: x(`${BS_TEST}#wallet-preparation`),
      "zk-loan": x(`${ZK_CLI}#wallet-and-provider-infrastructure`)
    }
  },
  {
    name: "Wallet to DApp signing flow",
    section: WALLET,
    coverage: {
      bboard: x(`${BB_IMPL}#implement-wallet-provider`),
      bship: q(`${BS_TEST}#wallet-preparation`),
      leaderboard: x(`${LB_UI}#wallet-bridge`),
      "zk-loan": q(`${ZK_CLI}#wallet-and-provider-infrastructure`)
    }
  },
  {
    name: "Recipe API",
    section: WALLET,
    coverage: {
      bboard: x(`${BB_IMPL}#implement-transaction-methods`),
      bship: q(`${BS_TEST}#wallet-preparation`),
      "zk-loan": q(`${ZK_CLI}#wallet-and-provider-infrastructure`)
    }
  },
  {
    name: "NIGHT to DUST generation lifecycle",
    section: WALLET,
    coverage: {
      bboard: x(`${BB_IMPL}#implement-dust-generation`),
      bship: q(`${BS_TEST}#packagejson`),
      leaderboard: q(`${LB_OV}#wallet-setup`),
      "zk-loan": x(`${ZK_CLI}#1-fund-the-wallet`)
    }
  },
  {
    name: "DUST as a fee resource",
    section: WALLET,
    coverage: {
      bboard: x(`${BB_IMPL}#implement-dust-generation`),
      bship: q(`${BS_TEST}#wallet-preparation`),
      leaderboard: q(`${LB_OV}#wallet-setup`),
      "zk-loan": x(`${ZK_CLI}#1-fund-the-wallet`)
    }
  },

  // ---------- Local devnet and testing ----------
  {
    name: "Devnet up and down",
    section: DEVNET,
    coverage: {
      bboard: x(`${BB_IMPL}#run-function`),
      "private-party": x(`${PP_SC}#testing`),
      bship: x(`${BS_TEST}#composeyml`),
      "zk-loan": x(`${ZK_CLI}#start-midnight-local-dev`)
    }
  },
  {
    name: "Proof server",
    section: DEVNET,
    coverage: {
      bboard: x(`${BB_IMPL}#configure-the-proof-server`),
      "private-party": q(`${PP_SC}#testing`),
      bship: q(`${BS_TEST}#composeyml`),
      leaderboard: x(`${LB_OV}#prerequisites`),
      "zk-loan": x(`${ZK_API}#set-up-docker-for-the-proof-server`)
    }
  },
  {
    name: "Test wallets (Alice, Bob, Charlie)",
    section: DEVNET,
    coverage: {
      bboard: q(`${BB_IMPL}#run-function`),
      "private-party": q(`${PP_SC}#testing`),
      bship: x(`${BS_TEST}#wallet-preparation`)
    }
  },
  {
    name: "Funding test accounts",
    section: DEVNET,
    coverage: {
      bboard: x(`${BB_IMPL}#wait-for-unshielded-funds`),
      bship: q(`${BS_TEST}#wallet-preparation`),
      "zk-loan": x(`${ZK_CLI}#1-fund-the-wallet`)
    }
  },
  {
    name: "Indexer subscriptions",
    section: DEVNET,
    coverage: {
      bboard: x(`${BB_API}#implement-the-constructor-and-state-observable`),
      leaderboard: x(`${LB_UI}#read-on-chain-state`),
      "zk-loan": q(`${ZK_CLI}#imports-and-global-setup`)
    }
  },
  {
    name: "Vitest test suite",
    section: DEVNET,
    coverage: {
      "private-party": q(`${PP_SC}#testing`),
      bship: x(`${BS_TEST}#vitestconfigts`)
    }
  },
  {
    name: "Negative-path and adversarial tests",
    section: DEVNET,
    coverage: {
      "private-party": q(`${PP_SC}#testing`),
      bship: x(`${BS_TEST}#further-cheating-attempts`),
      "zk-loan": q(`${ZK_CLI}#mock-user-profiles`)
    }
  },
  {
    name: "Multi-network targeting",
    section: DEVNET,
    coverage: {
      bboard: q(`${BB_IMPL}#network-configuration`),
      bship: q(`${BS_TEST}#midnight-setup`),
      leaderboard: q(`${LB_UI}#environment-variables`),
      "zk-loan": q(`${ZK_CLI}#configuration`)
    }
  },
  {
    name: "Faucet funding flow",
    section: DEVNET,
    coverage: {
      bboard: q(`${BB_IMPL}#implement-wallet-utilities`),
      leaderboard: x(`${LB_OV}#wallet-setup`)
    }
  },
  {
    name: "Self-contained bundled devnet",
    section: DEVNET,
    coverage: {
      "private-party": x(`${PP_SC}#testing`),
      bship: x(`${BS_TEST}#composeyml`),
      "zk-loan": q(`${ZK_CLI}#start-midnight-local-dev`)
    }
  },

  // ---------- Advanced cryptography and services ----------
  {
    name: "In-circuit Schnorr signature verification (Jubjub)",
    section: ADVANCED,
    coverage: {
      "zk-loan": x(`${ZK_SC}#write-the-schnorr-signature-module`)
    }
  },
  {
    name: "Elliptic curve stdlib operations",
    section: ADVANCED,
    coverage: {
      "zk-loan": x(`${ZK_SC}#write-the-schnorr-signature-module`)
    }
  },
  {
    name: "Witness-assisted range reduction",
    section: ADVANCED,
    coverage: {
      "zk-loan": x(`${ZK_SC}#write-the-schnorr-signature-module`)
    }
  },
  {
    name: "PIN-rotatable identity with batched migration",
    section: ADVANCED,
    coverage: {
      "zk-loan": x(`${ZK_SC}#pin-migration-and-schnorr-re-export`)
    }
  },
  {
    name: "Off-chain attestation signing service",
    section: ADVANCED,
    coverage: {
      "zk-loan": x(`${ZK_API}#build-the-attestation-api`)
    }
  }
];

export default { columns, features };

// Dev-only integrity check: warn about coverage keys that do not match a known
// column id, duplicate column ids, or malformed cells. Stripped from
// production builds.
if (process.env.NODE_ENV !== "production") {
  const ids = new Set();
  columns.forEach((c) => {
    if (ids.has(c.id)) {
      console.warn(`[CoverageMatrix] duplicate column id: "${c.id}"`);
    }
    ids.add(c.id);
  });
  features.forEach((f) => {
    Object.entries(f.coverage).forEach(([key, cell]) => {
      if (!ids.has(key)) {
        console.warn(
          `[CoverageMatrix] feature "${f.name}" references unknown column id "${key}"`
        );
      }
      if (cell.level !== "x" && cell.level !== "?") {
        console.warn(
          `[CoverageMatrix] feature "${f.name}" cell "${key}" has invalid level`
        );
      }
    });
  });
}
