// sidebars.js
module.exports = {
  sidebar: [
    // GET STARTED
    {
      type: "category",
      label: "Get started",
      items: [
        {
          type: "doc",
          id: "getting-started/installation",
          label: "Get started"
        },
        {
          type: "doc",
          id: "getting-started/create-mn-app",
          label: "Create an MN app"
        },
        {
          type: "doc",
          id: "getting-started/deploy-mn-app",
          label: "Deploy an MN app"
        },
        {
          type: "doc",
          id: "getting-started/interact-with-mn-app",
          label: "Interact with an MN app"
        }
      ]
    },

    // BUILD
    {
      type: "category",
      label: "Build",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Setup and prerequisites",
          link: { type: "doc", id: "develop/tutorial/using/index" },
          items: [
            "develop/tutorial/using/welcome",
            "develop/tutorial/using/chrome-ext",
            "develop/tutorial/using/faucet",
            "develop/tutorial/using/proof-server"
          ]
        },
        {
          type: "category",
          label: "Tutorials",
          items: [
            {
              type: "category",
              label: "Build using an example",
              link: { type: "doc", id: "develop/tutorial/building/index" },
              items: [
                "develop/tutorial/building/examples-repo",
                "develop/tutorial/building/counter-build",
                "develop/tutorial/building/counter-run",
                "develop/tutorial/building/contract-details",
                "develop/tutorial/building/dapp-details"
              ]
            },
            {
              type: "category",
              label: "Build from scratch",
              link: { type: "doc", id: "develop/tutorial/creating/index" },
              items: [
                "develop/tutorial/creating/scenario",
                "develop/tutorial/creating/bboard-contract",
                "develop/tutorial/creating/bboard-dapp",
                "develop/tutorial/creating/local-testing",
                "develop/tutorial/creating/updatability"
              ]
            }
          ]
        }
      ]
    },

    // HOW-TO GUIDES
    {
      type: "category",
      label: "How to",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "develop/guides/wallet-dev-guide",
          label: "Implement wallet functionality"
        },
        {
          type: "doc",
          id: "develop/how-to/handle-private-state-sessions",
          label: "Handle private state sessions"
        },
        {
          type: "doc",
          id: "develop/how-to/verify-private-data",
          label: "Verify private data"
        },
        {
          type: "doc",
          id: "develop/how-to/write-nft-contract",
          label: "Write NFT contracts"
        },
        {
          type: "category",
          label: "Query the blockchain",
          items: ["develop/nodes-and-dapps/nodes-endpoints"]
        },
      ]
    },

    // LEARNING RESOURCES
    {
      type: "category",
      label: "Learning resources",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Midnight academy",
          link: { type: "doc", id: "academy/index" },
          items: [
            "academy/module-1",
            "academy/module-2",
            "academy/module-3",
            "academy/module-4",
            "academy/module-5",
            "academy/module-6",
            "academy/module-7"
          ]
        },
        {
          type: "category",
          label: "Introduction to Midnight",
          items: [
            {
              type: "category",
              label: "Features",
              items: [
                "learn/introduction/features/security",
                "learn/introduction/features/enhanced-developer-experience"
              ]
            },
            {
              type: "category",
              label: "Use cases",
              link: { type: "doc", id: "learn/introduction/use-cases/index" },
              items: [
                "learn/introduction/use-cases/identity-verification",
                "learn/introduction/use-cases/digital-assets",
                "learn/introduction/use-cases/ai-llm",
                "learn/introduction/use-cases/decentralized-credit-scoring",
                "learn/introduction/use-cases/decentralized-voting"
              ]
            },
            {
              type: "category",
              label: "Midnight's native token",
              items: ["learn/introduction/native-token/about-dust"]
            },
            "learn/introduction/wallets/index"
          ]
        },
        {
          type: "category",
          label: "Understanding Midnight's technology",
          link: {
            type: "doc",
            id: "learn/understanding-midnights-technology/index"
          },
          items: [
            "learn/understanding-midnights-technology/web3",
            "learn/understanding-midnights-technology/zero-knowledge-proofs",
            "learn/understanding-midnights-technology/kachina",
            "learn/understanding-midnights-technology/zswap",
            {
              type: "category",
              label: "Account vs UTXO models",
              link: {
                type: "doc",
                id: "learn/understanding-midnights-technology/ledgers"
              },
              items: [
                "learn/understanding-midnights-technology/account",
                "learn/understanding-midnights-technology/utxo",
                "learn/understanding-midnights-technology/midnight-combined-model"
              ]
            }
          ]
        },
        "learn/resources"
      ]
    },

    // VALIDATE - All existing content
    {
      type: "category",
      label: "Validate",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Become a Midnight block producer",
          link: { type: "doc", id: "validate/run-a-validator/index" },
          items: [
            "validate/run-a-validator/step-1",
            "validate/run-a-validator/step-2",
            "validate/run-a-validator/step-3",
            "validate/run-a-validator/step-4"
          ]
        },
        {
          type: "category",
          label: "Validator tutorials",
          link: { type: "doc", id: "validate/tutorials/index" },
          items: ["validate/tutorials/index"]
        }
      ]
    },

    // COMPACT LANGUAGE - All existing content
    {
      type: "category",
      label: "Compact language",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Language reference",
          link: { type: "doc", id: "develop/reference/compact/index" },
          items: [
            "develop/reference/compact/writing",
            "develop/reference/compact/lang-ref",
            "develop/reference/compact/compact-grammar",
            "develop/reference/compact/ledger-adt",
            "develop/reference/compact/opaque_data",
            "develop/reference/compact/explicit_disclosure",
            {
              type: "category",
              label: "Compact standard library",
              link: {
                type: "doc",
                id: "develop/reference/compact/compact-std-library/README"
              },
              items: ["develop/reference/compact/compact-std-library/exports"]
            }
          ]
        },
        {
          type: "category",
          label: "Tools",
          link: { type: "doc", id: "develop/reference/tools/index" },
          items: [
            "develop/reference/tools/compiler-usage",
            {
              type: "category",
              label: "VS Code plugin",
              link: {
                type: "doc",
                id: "develop/reference/tools/vsc-plugin/index"
              },
              items: []
            }
          ]
        }
      ]
    },

    // REFERENCE - All existing content
    {
      type: "category",
      label: "Reference",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "develop/index",
          label: "Development overview"
        },
        {
          type: "category",
          label: "How Midnight works",
          link: { type: "doc", id: "develop/how-midnight-works/index" },
          items: [
            "develop/how-midnight-works/smart-contracts",
            "develop/how-midnight-works/advantages",
            "develop/how-midnight-works/keeping-data-private",
            "develop/how-midnight-works/building-blocks",
            "develop/how-midnight-works/zswap",
            "develop/how-midnight-works/impact",
            "develop/how-midnight-works/semantics"
          ]
        },
        {
          type: "category",
          label: "Nodes and DApps",
          items: [
            {
              type: "category",
              label: "Node overview",
              link: { type: "doc", id: "develop/nodes-and-dapps/node-intro" },
              items: [
                "develop/nodes-and-dapps/p2p-networking",
                "develop/nodes-and-dapps/rpc-networking",
                "develop/nodes-and-dapps/cryptography",
                "develop/nodes-and-dapps/storage",
                "develop/nodes-and-dapps/transactions",
                "develop/nodes-and-dapps/onchain-logic",
                "develop/nodes-and-dapps/consensus"
              ]
            },
            {
              type: "category",
              label: "Node operations",
              items: [
                "develop/nodes-and-dapps/cardano-db-sync",
                "develop/nodes-and-dapps/full-node",
                "develop/nodes-and-dapps/boot-node",
                "develop/nodes-and-dapps/rpc-node"
              ]
            }
          ]
        }
      ]
    },

    // API DOCUMENTATION - All existing content
    {
      type: "category",
      label: "API documentation",
      collapsed: true,
      link: { type: "doc", id: "develop/reference/midnight-api/index" },
      items: [
        {
          type: "category",
          label: "Compact runtime API",
          link: {
            type: "doc",
            id: "develop/reference/midnight-api/compact-runtime/README"
          },
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                "develop/reference/midnight-api/compact-runtime/classes/CompactError",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeBoolean",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeBytes",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeCurvePoint",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeEnum",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeField",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeMerkleTreeDigest",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeMerkleTreePath",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeMerkleTreePathEntry",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeOpaqueString",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeOpaqueUint8Array",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeUnsignedInteger",
                "develop/reference/midnight-api/compact-runtime/classes/CompactTypeVector",
                "develop/reference/midnight-api/compact-runtime/classes/ContractMaintenanceAuthority",
                "develop/reference/midnight-api/compact-runtime/classes/ContractOperation",
                "develop/reference/midnight-api/compact-runtime/classes/ContractState",
                "develop/reference/midnight-api/compact-runtime/classes/CostModel",
                "develop/reference/midnight-api/compact-runtime/classes/QueryContext",
                "develop/reference/midnight-api/compact-runtime/classes/QueryResults",
                "develop/reference/midnight-api/compact-runtime/classes/StateBoundedMerkleTree",
                "develop/reference/midnight-api/compact-runtime/classes/StateMap",
                "develop/reference/midnight-api/compact-runtime/classes/StateValue",
                "develop/reference/midnight-api/compact-runtime/classes/VmResults",
                "develop/reference/midnight-api/compact-runtime/classes/VmStack"
              ]
            },
            {
              type: "category",
              label: "Enumerations",
              items: [
                "develop/reference/midnight-api/compact-runtime/enumerations/NetworkId"
              ]
            },
            {
              type: "category",
              label: "Functions",
              items: [
                "develop/reference/midnight-api/compact-runtime/functions/alignedConcat",
                "develop/reference/midnight-api/compact-runtime/functions/assert",
                "develop/reference/midnight-api/compact-runtime/functions/bigIntToValue",
                "develop/reference/midnight-api/compact-runtime/functions/checkProofData",
                "develop/reference/midnight-api/compact-runtime/functions/coinCommitment",
                "develop/reference/midnight-api/compact-runtime/functions/constructorContext",
                "develop/reference/midnight-api/compact-runtime/functions/contractDependencies",
                "develop/reference/midnight-api/compact-runtime/functions/convert_Uint8Array_to_bigint",
                "develop/reference/midnight-api/compact-runtime/functions/convert_bigint_to_Uint8Array",
                "develop/reference/midnight-api/compact-runtime/functions/createZswapInput",
                "develop/reference/midnight-api/compact-runtime/functions/createZswapOutput",
                "develop/reference/midnight-api/compact-runtime/functions/decodeCoinInfo",
                "develop/reference/midnight-api/compact-runtime/functions/decodeCoinPublicKey",
                "develop/reference/midnight-api/compact-runtime/functions/decodeContractAddress",
                "develop/reference/midnight-api/compact-runtime/functions/decodeQualifiedCoinInfo",
                "develop/reference/midnight-api/compact-runtime/functions/decodeRecipient",
                "develop/reference/midnight-api/compact-runtime/functions/decodeTokenType",
                "develop/reference/midnight-api/compact-runtime/functions/decodeZswapLocalState",
                "develop/reference/midnight-api/compact-runtime/functions/degradeToTransient",
                "develop/reference/midnight-api/compact-runtime/functions/dummyContractAddress",
                "develop/reference/midnight-api/compact-runtime/functions/ecAdd",
                "develop/reference/midnight-api/compact-runtime/functions/ecMul",
                "develop/reference/midnight-api/compact-runtime/functions/ecMulGenerator",
                "develop/reference/midnight-api/compact-runtime/functions/emptyZswapLocalState",
                "develop/reference/midnight-api/compact-runtime/functions/encodeCoinInfo",
                "develop/reference/midnight-api/compact-runtime/functions/encodeCoinPublicKey",
                "develop/reference/midnight-api/compact-runtime/functions/encodeContractAddress",
                "develop/reference/midnight-api/compact-runtime/functions/encodeQualifiedCoinInfo",
                "develop/reference/midnight-api/compact-runtime/functions/encodeRecipient",
                "develop/reference/midnight-api/compact-runtime/functions/encodeTokenType",
                "develop/reference/midnight-api/compact-runtime/functions/encodeZswapLocalState",
                "develop/reference/midnight-api/compact-runtime/functions/hashToCurve",
                "develop/reference/midnight-api/compact-runtime/functions/leafHash",
                "develop/reference/midnight-api/compact-runtime/functions/maxAlignedSize",
                "develop/reference/midnight-api/compact-runtime/functions/ownPublicKey",
                "develop/reference/midnight-api/compact-runtime/functions/persistentCommit",
                "develop/reference/midnight-api/compact-runtime/functions/persistentHash",
                "develop/reference/midnight-api/compact-runtime/functions/runProgram",
                "develop/reference/midnight-api/compact-runtime/functions/sampleContractAddress",
                "develop/reference/midnight-api/compact-runtime/functions/sampleSigningKey",
                "develop/reference/midnight-api/compact-runtime/functions/sampleTokenType",
                "develop/reference/midnight-api/compact-runtime/functions/signData",
                "develop/reference/midnight-api/compact-runtime/functions/signatureVerifyingKey",
                "develop/reference/midnight-api/compact-runtime/functions/tokenType",
                "develop/reference/midnight-api/compact-runtime/functions/transientCommit",
                "develop/reference/midnight-api/compact-runtime/functions/transientHash",
                "develop/reference/midnight-api/compact-runtime/functions/type_error",
                "develop/reference/midnight-api/compact-runtime/functions/upgradeFromTransient",
                "develop/reference/midnight-api/compact-runtime/functions/valueToBigInt",
                "develop/reference/midnight-api/compact-runtime/functions/verifySignature",
                "develop/reference/midnight-api/compact-runtime/functions/witnessContext"
              ]
            },
            {
              type: "category",
              label: "Globals",
              items: ["develop/reference/midnight-api/compact-runtime/globals"]
            },
            {
              type: "category",
              label: "Interfaces",
              items: [
                "develop/reference/midnight-api/compact-runtime/interfaces/CircuitContext",
                "develop/reference/midnight-api/compact-runtime/interfaces/CircuitResults",
                "develop/reference/midnight-api/compact-runtime/interfaces/CompactType",
                "develop/reference/midnight-api/compact-runtime/interfaces/ConstructorContext",
                "develop/reference/midnight-api/compact-runtime/interfaces/ConstructorResult",
                "develop/reference/midnight-api/compact-runtime/interfaces/CurvePoint",
                "develop/reference/midnight-api/compact-runtime/interfaces/EncodedCoinInfo",
                "develop/reference/midnight-api/compact-runtime/interfaces/EncodedCoinPublicKey",
                "develop/reference/midnight-api/compact-runtime/interfaces/EncodedContractAddress",
                "develop/reference/midnight-api/compact-runtime/interfaces/EncodedQualifiedCoinInfo",
                "develop/reference/midnight-api/compact-runtime/interfaces/EncodedRecipient",
                "develop/reference/midnight-api/compact-runtime/interfaces/EncodedZswapLocalState",
                "develop/reference/midnight-api/compact-runtime/interfaces/MerkleTreeDigest",
                "develop/reference/midnight-api/compact-runtime/interfaces/MerkleTreePath",
                "develop/reference/midnight-api/compact-runtime/interfaces/MerkleTreePathEntry",
                "develop/reference/midnight-api/compact-runtime/interfaces/ProofData",
                "develop/reference/midnight-api/compact-runtime/interfaces/Recipient",
                "develop/reference/midnight-api/compact-runtime/interfaces/WitnessContext",
                "develop/reference/midnight-api/compact-runtime/interfaces/ZswapLocalState"
              ]
            },
            {
              type: "category",
              label: "Type aliases",
              items: [
                "develop/reference/midnight-api/compact-runtime/type-aliases/AlignedValue",
                "develop/reference/midnight-api/compact-runtime/type-aliases/Alignment",
                "develop/reference/midnight-api/compact-runtime/type-aliases/AlignmentAtom",
                "develop/reference/midnight-api/compact-runtime/type-aliases/AlignmentSegment",
                "develop/reference/midnight-api/compact-runtime/type-aliases/BlockContext",
                "develop/reference/midnight-api/compact-runtime/type-aliases/CoinCommitment",
                "develop/reference/midnight-api/compact-runtime/type-aliases/CoinInfo",
                "develop/reference/midnight-api/compact-runtime/type-aliases/CoinPublicKey",
                "develop/reference/midnight-api/compact-runtime/type-aliases/ContractAddress",
                "develop/reference/midnight-api/compact-runtime/type-aliases/ContractReferenceLocations",
                "develop/reference/midnight-api/compact-runtime/type-aliases/DomainSeperator",
                "develop/reference/midnight-api/compact-runtime/type-aliases/Effects",
                "develop/reference/midnight-api/compact-runtime/type-aliases/Fr",
                "develop/reference/midnight-api/compact-runtime/type-aliases/GatherResult",
                "develop/reference/midnight-api/compact-runtime/type-aliases/Key",
                "develop/reference/midnight-api/compact-runtime/type-aliases/Nonce",
                "develop/reference/midnight-api/compact-runtime/type-aliases/Nullifier",
                "develop/reference/midnight-api/compact-runtime/type-aliases/Op",
                "develop/reference/midnight-api/compact-runtime/type-aliases/QualifiedCoinInfo",
                "develop/reference/midnight-api/compact-runtime/type-aliases/Signature",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SignatureVerifyingKey",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SigningKey",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactADT",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactArrayLikeADT",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactCellADT",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactContractAddress",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactListADT",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactMapADT",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactSetADT",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactStruct",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactType",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactValue",
                "develop/reference/midnight-api/compact-runtime/type-aliases/SparseCompactVector",
                "develop/reference/midnight-api/compact-runtime/type-aliases/TokenType",
                "develop/reference/midnight-api/compact-runtime/type-aliases/Transcript",
                "develop/reference/midnight-api/compact-runtime/type-aliases/Value"
              ]
            },
            {
              type: "category",
              label: "Variables",
              items: [
                "develop/reference/midnight-api/compact-runtime/variables/DUMMY_ADDRESS",
                "develop/reference/midnight-api/compact-runtime/variables/MAX_FIELD",
                "develop/reference/midnight-api/compact-runtime/variables/versionString"
              ]
            }
          ]
        },
        {
          type: "category",
          label: "DApp connector API",
          link: {
            type: "doc",
            id: "develop/reference/midnight-api/dapp-connector/README"
          },
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                "develop/reference/midnight-api/dapp-connector/classes/APIError"
              ]
            },
            {
              type: "category",
              label: "Globals",
              items: ["develop/reference/midnight-api/dapp-connector/globals"]
            },
            {
              type: "category",
              label: "Interfaces",
              items: [
                "develop/reference/midnight-api/dapp-connector/interfaces/DAppConnectorAPI",
                "develop/reference/midnight-api/dapp-connector/interfaces/DAppConnectorWalletAPI",
                "develop/reference/midnight-api/dapp-connector/interfaces/DAppConnectorWalletState",
                "develop/reference/midnight-api/dapp-connector/interfaces/ServiceUriConfig"
              ]
            },
            {
              type: "category",
              label: "Type aliases",
              items: [
                "develop/reference/midnight-api/dapp-connector/type-aliases/ErrorCode"
              ]
            },
            {
              type: "category",
              label: "Variables",
              items: [
                "develop/reference/midnight-api/dapp-connector/variables/ErrorCodes"
              ]
            }
          ]
        },
        {
          type: "category",
          label: "Ledger API",
          link: {
            type: "doc",
            id: "develop/reference/midnight-api/ledger/README"
          },
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                "develop/reference/midnight-api/ledger/classes/AuthorizedMint",
                "develop/reference/midnight-api/ledger/classes/ContractCall",
                "develop/reference/midnight-api/ledger/classes/ContractCallPrototype",
                "develop/reference/midnight-api/ledger/classes/ContractCallsPrototype",
                "develop/reference/midnight-api/ledger/classes/ContractDeploy",
                "develop/reference/midnight-api/ledger/classes/ContractMaintenanceAuthority",
                "develop/reference/midnight-api/ledger/classes/ContractOperation",
                "develop/reference/midnight-api/ledger/classes/ContractOperationVersion",
                "develop/reference/midnight-api/ledger/classes/ContractOperationVersionedVerifierKey",
                "develop/reference/midnight-api/ledger/classes/ContractState",
                "develop/reference/midnight-api/ledger/classes/CostModel",
                "develop/reference/midnight-api/ledger/classes/EncryptionSecretKey",
                "develop/reference/midnight-api/ledger/classes/Input",
                "develop/reference/midnight-api/ledger/classes/LedgerParameters",
                "develop/reference/midnight-api/ledger/classes/LedgerState",
                "develop/reference/midnight-api/ledger/classes/LocalState",
                "develop/reference/midnight-api/ledger/classes/MaintenanceUpdate",
                "develop/reference/midnight-api/ledger/classes/MerkleTreeCollapsedUpdate",
                "develop/reference/midnight-api/ledger/classes/Offer",
                "develop/reference/midnight-api/ledger/classes/Output",
                "develop/reference/midnight-api/ledger/classes/PreTranscript",
                "develop/reference/midnight-api/ledger/classes/ProofErasedAuthorizedMint",
                "develop/reference/midnight-api/ledger/classes/ProofErasedInput",
                "develop/reference/midnight-api/ledger/classes/ProofErasedOffer",
                "develop/reference/midnight-api/ledger/classes/ProofErasedOutput",
                "develop/reference/midnight-api/ledger/classes/ProofErasedTransaction",
                "develop/reference/midnight-api/ledger/classes/ProofErasedTransient",
                "develop/reference/midnight-api/ledger/classes/QueryContext",
                "develop/reference/midnight-api/ledger/classes/QueryResults",
                "develop/reference/midnight-api/ledger/classes/ReplaceAuthority",
                "develop/reference/midnight-api/ledger/classes/StateBoundedMerkleTree",
                "develop/reference/midnight-api/ledger/classes/StateMap",
                "develop/reference/midnight-api/ledger/classes/StateValue",
                "develop/reference/midnight-api/ledger/classes/SystemTransaction",
                "develop/reference/midnight-api/ledger/classes/Transaction",
                "develop/reference/midnight-api/ledger/classes/TransactionContext",
                "develop/reference/midnight-api/ledger/classes/TransactionCostModel",
                "develop/reference/midnight-api/ledger/classes/TransactionResult",
                "develop/reference/midnight-api/ledger/classes/Transient",
                "develop/reference/midnight-api/ledger/classes/UnprovenAuthorizedMint",
                "develop/reference/midnight-api/ledger/classes/UnprovenInput",
                "develop/reference/midnight-api/ledger/classes/UnprovenOffer",
                "develop/reference/midnight-api/ledger/classes/UnprovenOutput",
                "develop/reference/midnight-api/ledger/classes/UnprovenTransaction",
                "develop/reference/midnight-api/ledger/classes/UnprovenTransient",
                "develop/reference/midnight-api/ledger/classes/VerifierKeyInsert",
                "develop/reference/midnight-api/ledger/classes/VerifierKeyRemove",
                "develop/reference/midnight-api/ledger/classes/VmResults",
                "develop/reference/midnight-api/ledger/classes/VmStack",
                "develop/reference/midnight-api/ledger/classes/WellFormedStrictness",
                "develop/reference/midnight-api/ledger/classes/ZswapChainState"
              ]
            },
            {
              type: "category",
              label: "Enumerations",
              items: [
                "develop/reference/midnight-api/ledger/enumerations/NetworkId"
              ]
            },
            {
              type: "category",
              label: "Functions",
              items: [
                "develop/reference/midnight-api/ledger/functions/bigIntModFr",
                "develop/reference/midnight-api/ledger/functions/bigIntToValue",
                "develop/reference/midnight-api/ledger/functions/checkProofData",
                "develop/reference/midnight-api/ledger/functions/coinCommitment",
                "develop/reference/midnight-api/ledger/functions/communicationCommitment",
                "develop/reference/midnight-api/ledger/functions/communicationCommitmentRandomness",
                "develop/reference/midnight-api/ledger/functions/createCoinInfo",
                "develop/reference/midnight-api/ledger/functions/decodeCoinInfo",
                "develop/reference/midnight-api/ledger/functions/decodeCoinPublicKey",
                "develop/reference/midnight-api/ledger/functions/decodeContractAddress",
                "develop/reference/midnight-api/ledger/functions/decodeQualifiedCoinInfo",
                "develop/reference/midnight-api/ledger/functions/decodeTokenType",
                "develop/reference/midnight-api/ledger/functions/degradeToTransient",
                "develop/reference/midnight-api/ledger/functions/dummyContractAddress",
                "develop/reference/midnight-api/ledger/functions/ecAdd",
                "develop/reference/midnight-api/ledger/functions/ecMul",
                "develop/reference/midnight-api/ledger/functions/ecMulGenerator",
                "develop/reference/midnight-api/ledger/functions/encodeCoinInfo",
                "develop/reference/midnight-api/ledger/functions/encodeCoinPublicKey",
                "develop/reference/midnight-api/ledger/functions/encodeContractAddress",
                "develop/reference/midnight-api/ledger/functions/encodeQualifiedCoinInfo",
                "develop/reference/midnight-api/ledger/functions/encodeTokenType",
                "develop/reference/midnight-api/ledger/functions/hashToCurve",
                "develop/reference/midnight-api/ledger/functions/leafHash",
                "develop/reference/midnight-api/ledger/functions/maxAlignedSize",
                "develop/reference/midnight-api/ledger/functions/maxField",
                "develop/reference/midnight-api/ledger/functions/nativeToken",
                "develop/reference/midnight-api/ledger/functions/partitionTranscripts",
                "develop/reference/midnight-api/ledger/functions/persistentCommit",
                "develop/reference/midnight-api/ledger/functions/persistentHash",
                "develop/reference/midnight-api/ledger/functions/runProgram",
                "develop/reference/midnight-api/ledger/functions/sampleCoinPublicKey",
                "develop/reference/midnight-api/ledger/functions/sampleContractAddress",
                "develop/reference/midnight-api/ledger/functions/sampleSigningKey",
                "develop/reference/midnight-api/ledger/functions/sampleTokenType",
                "develop/reference/midnight-api/ledger/functions/signData",
                "develop/reference/midnight-api/ledger/functions/signatureVerifyingKey",
                "develop/reference/midnight-api/ledger/functions/tokenType",
                "develop/reference/midnight-api/ledger/functions/transientCommit",
                "develop/reference/midnight-api/ledger/functions/transientHash",
                "develop/reference/midnight-api/ledger/functions/upgradeFromTransient",
                "develop/reference/midnight-api/ledger/functions/valueToBigInt",
                "develop/reference/midnight-api/ledger/functions/verifySignature"
              ]
            },
            {
              type: "doc",
              id: "develop/reference/midnight-api/ledger/globals",
              label: "Globals"
            },
            {
              type: "category",
              label: "Type aliases",
              items: [
                "develop/reference/midnight-api/ledger/type-aliases/AlignedValue",
                "develop/reference/midnight-api/ledger/type-aliases/Alignment",
                "develop/reference/midnight-api/ledger/type-aliases/AlignmentAtom",
                "develop/reference/midnight-api/ledger/type-aliases/AlignmentSegment",
                "develop/reference/midnight-api/ledger/type-aliases/BlockContext",
                "develop/reference/midnight-api/ledger/type-aliases/CoinCommitment",
                "develop/reference/midnight-api/ledger/type-aliases/CoinInfo",
                "develop/reference/midnight-api/ledger/type-aliases/CoinPublicKey",
                "develop/reference/midnight-api/ledger/type-aliases/CommunicationCommitment",
                "develop/reference/midnight-api/ledger/type-aliases/CommunicationCommitmentRand",
                "develop/reference/midnight-api/ledger/type-aliases/ContractAction",
                "develop/reference/midnight-api/ledger/type-aliases/ContractAddress",
                "develop/reference/midnight-api/ledger/type-aliases/DomainSeperator",
                "develop/reference/midnight-api/ledger/type-aliases/Effects",
                "develop/reference/midnight-api/ledger/type-aliases/EncPublicKey",
                "develop/reference/midnight-api/ledger/type-aliases/EncodedStateValue",
                "develop/reference/midnight-api/ledger/type-aliases/Fr",
                "develop/reference/midnight-api/ledger/type-aliases/GatherResult",
                "develop/reference/midnight-api/ledger/type-aliases/Key",
                "develop/reference/midnight-api/ledger/type-aliases/Nonce",
                "develop/reference/midnight-api/ledger/type-aliases/Nullifier",
                "develop/reference/midnight-api/ledger/type-aliases/Op",
                "develop/reference/midnight-api/ledger/type-aliases/QualifiedCoinInfo",
                "develop/reference/midnight-api/ledger/type-aliases/Signature",
                "develop/reference/midnight-api/ledger/type-aliases/SignatureVerifyingKey",
                "develop/reference/midnight-api/ledger/type-aliases/SigningKey",
                "develop/reference/midnight-api/ledger/type-aliases/SingleUpdate",
                "develop/reference/midnight-api/ledger/type-aliases/TokenType",
                "develop/reference/midnight-api/ledger/type-aliases/TransactionHash",
                "develop/reference/midnight-api/ledger/type-aliases/TransactionId",
                "develop/reference/midnight-api/ledger/type-aliases/Transcript",
                "develop/reference/midnight-api/ledger/type-aliases/Value"
              ]
            }
          ]
        },
        {
          type: "category",
          label: "Midnight.js API",
          link: {
            type: "doc",
            id: "develop/reference/midnight-api/midnight-js/README"
          },
          items: [
            {
              type: "category",
              label: "@midnight-ntwrk",
              items: [
                {
                  type: "category",
                  label: "midnight-js-contracts",
                  link: {
                    type: "doc",
                    id: "develop/reference/midnight-api/midnight-js/@midnight-ntwrk/midnight-js-contracts/README"
                  },
                  items: [
                    {
                      type: "autogenerated",
                      dirName:
                        "develop/reference/midnight-api/midnight-js/@midnight-ntwrk/midnight-js-contracts"
                    }
                  ]
                },
                {
                  type: "category",
                  label: "midnight-js-utils",
                  link: {
                    type: "doc",
                    id: "develop/reference/midnight-api/midnight-js/@midnight-ntwrk/midnight-js-utils/README"
                  },
                  items: [
                    {
                      type: "autogenerated",
                      dirName:
                        "develop/reference/midnight-api/midnight-js/@midnight-ntwrk/midnight-js-utils"
                    }
                  ]
                },
                {
                  type: "category",
                  label: "midnight-js-types",
                  link: {
                    type: "doc",
                    id: "develop/reference/midnight-api/midnight-js/@midnight-ntwrk/midnight-js-types/README"
                  },
                  items: [
                    {
                      type: "autogenerated",
                      dirName:
                        "develop/reference/midnight-api/midnight-js/@midnight-ntwrk/midnight-js-types"
                    }
                  ]
                },
                {
                  type: "category",
                  label: "midnight-js-fetch-zk-config-provider",
                  link: {
                    type: "doc",
                    id: "develop/reference/midnight-api/midnight-js/@midnight-ntwrk/midnight-js-fetch-zk-config-provider/README"
                  },
                  items: [
                    {
                      type: "autogenerated",
                      dirName:
                        "develop/reference/midnight-api/midnight-js/@midnight-ntwrk/midnight-js-fetch-zk-config-provider"
                    }
                  ]
                },
                {
                  type: "doc",
                  id: "develop/reference/midnight-api/midnight-js/packages",
                  label: "Packages"
                }
              ]
            }
          ]
        },
        {
          type: "category",
          label: "On-chain runtime API",
          link: {
            type: "doc",
            id: "develop/reference/midnight-api/onchain-runtime/README"
          },
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                "develop/reference/midnight-api/onchain-runtime/classes/ContractMaintenanceAuthority",
                "develop/reference/midnight-api/onchain-runtime/classes/ContractOperation",
                "develop/reference/midnight-api/onchain-runtime/classes/ContractState",
                "develop/reference/midnight-api/onchain-runtime/classes/CostModel",
                "develop/reference/midnight-api/onchain-runtime/classes/QueryContext",
                "develop/reference/midnight-api/onchain-runtime/classes/QueryResults",
                "develop/reference/midnight-api/onchain-runtime/classes/StateBoundedMerkleTree",
                "develop/reference/midnight-api/onchain-runtime/classes/StateMap",
                "develop/reference/midnight-api/onchain-runtime/classes/StateValue",
                "develop/reference/midnight-api/onchain-runtime/classes/VmResults",
                "develop/reference/midnight-api/onchain-runtime/classes/VmStack"
              ]
            },
            {
              type: "category",
              label: "Enumerations",
              items: [
                "develop/reference/midnight-api/onchain-runtime/enumerations/NetworkId"
              ]
            },
            {
              type: "category",
              label: "Functions",
              items: [
                "develop/reference/midnight-api/onchain-runtime/functions/bigIntModFr",
                "develop/reference/midnight-api/onchain-runtime/functions/bigIntToValue",
                "develop/reference/midnight-api/onchain-runtime/functions/checkProofData",
                "develop/reference/midnight-api/onchain-runtime/functions/coinCommitment",
                "develop/reference/midnight-api/onchain-runtime/functions/decodeCoinInfo",
                "develop/reference/midnight-api/onchain-runtime/functions/decodeCoinPublicKey",
                "develop/reference/midnight-api/onchain-runtime/functions/decodeContractAddress",
                "develop/reference/midnight-api/onchain-runtime/functions/decodeQualifiedCoinInfo",
                "develop/reference/midnight-api/onchain-runtime/functions/decodeTokenType",
                "develop/reference/midnight-api/onchain-runtime/functions/degradeToTransient",
                "develop/reference/midnight-api/onchain-runtime/functions/dummyContractAddress",
                "develop/reference/midnight-api/onchain-runtime/functions/ecAdd",
                "develop/reference/midnight-api/onchain-runtime/functions/ecMul",
                "develop/reference/midnight-api/onchain-runtime/functions/ecMulGenerator",
                "develop/reference/midnight-api/onchain-runtime/functions/encodeCoinInfo",
                "develop/reference/midnight-api/onchain-runtime/functions/encodeCoinPublicKey",
                "develop/reference/midnight-api/onchain-runtime/functions/encodeContractAddress",
                "develop/reference/midnight-api/onchain-runtime/functions/encodeQualifiedCoinInfo",
                "develop/reference/midnight-api/onchain-runtime/functions/encodeTokenType",
                "develop/reference/midnight-api/onchain-runtime/functions/hashToCurve",
                "develop/reference/midnight-api/onchain-runtime/functions/leafHash",
                "develop/reference/midnight-api/onchain-runtime/functions/maxAlignedSize",
                "develop/reference/midnight-api/onchain-runtime/functions/maxField",
                "develop/reference/midnight-api/onchain-runtime/functions/persistentCommit",
                "develop/reference/midnight-api/onchain-runtime/functions/persistentHash",
                "develop/reference/midnight-api/onchain-runtime/functions/runProgram",
                "develop/reference/midnight-api/onchain-runtime/functions/sampleContractAddress",
                "develop/reference/midnight-api/onchain-runtime/functions/sampleSigningKey",
                "develop/reference/midnight-api/onchain-runtime/functions/sampleTokenType",
                "develop/reference/midnight-api/onchain-runtime/functions/signData",
                "develop/reference/midnight-api/onchain-runtime/functions/signatureVerifyingKey",
                "develop/reference/midnight-api/onchain-runtime/functions/tokenType",
                "develop/reference/midnight-api/onchain-runtime/functions/transientCommit",
                "develop/reference/midnight-api/onchain-runtime/functions/transientHash",
                "develop/reference/midnight-api/onchain-runtime/functions/upgradeFromTransient",
                "develop/reference/midnight-api/onchain-runtime/functions/valueToBigInt",
                "develop/reference/midnight-api/onchain-runtime/functions/verifySignature"
              ]
            },
            {
              type: "doc",
              id: "develop/reference/midnight-api/onchain-runtime/globals",
              label: "Globals"
            },
            {
              type: "category",
              label: "Type aliases",
              items: [
                "develop/reference/midnight-api/onchain-runtime/type-aliases/AlignedValue",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/Alignment",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/AlignmentAtom",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/AlignmentSegment",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/BlockContext",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/CoinCommitment",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/CoinInfo",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/CoinPublicKey",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/ContractAddress",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/DomainSeperator",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/Effects",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/EncodedStateValue",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/Fr",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/GatherResult",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/Key",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/Nonce",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/Nullifier",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/Op",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/QualifiedCoinInfo",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/Signature",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/SignatureVerifyingKey",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/SigningKey",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/TokenType",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/Transcript",
                "develop/reference/midnight-api/onchain-runtime/type-aliases/Value"
              ]
            }
          ]
        },
        {
          type: "category",
          label: "Midnight indexer API",
          link: {
            type: "doc",
            id: "develop/reference/midnight-api/midnight-indexer/README"
          },
          items: []
        },
        {
          type: "category",
          label: "Wallet API",
          link: {
            type: "doc",
            id: "develop/reference/midnight-api/wallet-api/README"
          },
          items: [
            {
              type: "doc",
              id: "develop/reference/midnight-api/wallet-api/globals",
              label: "Globals"
            },
            {
              type: "category",
              label: "Interfaces",
              items: [
                "develop/reference/midnight-api/wallet-api/interfaces/Wallet"
              ]
            },
            {
              type: "category",
              label: "Type aliases",
              items: [
                "develop/reference/midnight-api/wallet-api/type-aliases/Address",
                "develop/reference/midnight-api/wallet-api/type-aliases/ApplyStage",
                "develop/reference/midnight-api/wallet-api/type-aliases/BalanceTransactionToProve",
                "develop/reference/midnight-api/wallet-api/type-aliases/CoinPublicKey",
                "develop/reference/midnight-api/wallet-api/type-aliases/NothingToProve",
                "develop/reference/midnight-api/wallet-api/type-aliases/ProvingRecipe",
                "develop/reference/midnight-api/wallet-api/type-aliases/SyncProgress",
                "develop/reference/midnight-api/wallet-api/type-aliases/TokenTransfer",
                "develop/reference/midnight-api/wallet-api/type-aliases/TokenType",
                "develop/reference/midnight-api/wallet-api/type-aliases/TransactionHash",
                "develop/reference/midnight-api/wallet-api/type-aliases/TransactionHistoryEntry",
                "develop/reference/midnight-api/wallet-api/type-aliases/TransactionIdentifier",
                "develop/reference/midnight-api/wallet-api/type-aliases/TransactionToProve",
                "develop/reference/midnight-api/wallet-api/type-aliases/WalletState"
              ]
            },
            {
              type: "category",
              label: "Variables",
              items: [
                "develop/reference/midnight-api/wallet-api/variables/BALANCE_TRANSACTION_TO_PROVE",
                "develop/reference/midnight-api/wallet-api/variables/NOTHING_TO_PROVE",
                "develop/reference/midnight-api/wallet-api/variables/TRANSACTION_TO_PROVE"
              ]
            }
          ]
        },
        {
          type: "category",
          label: "ZSwap API",
          link: {
            type: "doc",
            id: "develop/reference/midnight-api/zswap/README"
          },
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                "develop/reference/midnight-api/zswap/classes/AuthorizedMint",
                "develop/reference/midnight-api/zswap/classes/EncryptionSecretKey",
                "develop/reference/midnight-api/zswap/classes/Input",
                "develop/reference/midnight-api/zswap/classes/LedgerParameters",
                "develop/reference/midnight-api/zswap/classes/LocalState",
                "develop/reference/midnight-api/zswap/classes/MerkleTreeCollapsedUpdate",
                "develop/reference/midnight-api/zswap/classes/Offer",
                "develop/reference/midnight-api/zswap/classes/Output",
                "develop/reference/midnight-api/zswap/classes/ProofErasedAuthorizedMint",
                "develop/reference/midnight-api/zswap/classes/ProofErasedInput",
                "develop/reference/midnight-api/zswap/classes/ProofErasedOffer",
                "develop/reference/midnight-api/zswap/classes/ProofErasedOutput",
                "develop/reference/midnight-api/zswap/classes/ProofErasedTransaction",
                "develop/reference/midnight-api/zswap/classes/ProofErasedTransient",
                "develop/reference/midnight-api/zswap/classes/SystemTransaction",
                "develop/reference/midnight-api/zswap/classes/Transaction",
                "develop/reference/midnight-api/zswap/classes/TransactionCostModel",
                "develop/reference/midnight-api/zswap/classes/Transient",
                "develop/reference/midnight-api/zswap/classes/UnprovenAuthorizedMint",
                "develop/reference/midnight-api/zswap/classes/UnprovenInput",
                "develop/reference/midnight-api/zswap/classes/UnprovenOffer",
                "develop/reference/midnight-api/zswap/classes/UnprovenOutput",
                "develop/reference/midnight-api/zswap/classes/UnprovenTransaction",
                "develop/reference/midnight-api/zswap/classes/UnprovenTransient",
                "develop/reference/midnight-api/zswap/classes/ZswapChainState"
              ]
            },
            {
              type: "category",
              label: "Enumerations",
              items: [
                "develop/reference/midnight-api/zswap/enumerations/NetworkId"
              ]
            },
            {
              type: "category",
              label: "Functions",
              items: [
                "develop/reference/midnight-api/zswap/functions/createCoinInfo",
                "develop/reference/midnight-api/zswap/functions/nativeToken",
                "develop/reference/midnight-api/zswap/functions/sampleCoinPublicKey",
                "develop/reference/midnight-api/zswap/functions/sampleContractAddress",
                "develop/reference/midnight-api/zswap/functions/sampleTokenType"
              ]
            },
            {
              type: "doc",
              id: "develop/reference/midnight-api/zswap/globals",
              label: "Globals"
            },
            {
              type: "category",
              label: "Type aliases",
              items: [
                "develop/reference/midnight-api/zswap/type-aliases/CoinCommitment",
                "develop/reference/midnight-api/zswap/type-aliases/CoinInfo",
                "develop/reference/midnight-api/zswap/type-aliases/CoinPublicKey",
                "develop/reference/midnight-api/zswap/type-aliases/ContractAddress",
                "develop/reference/midnight-api/zswap/type-aliases/EncPublicKey",
                "develop/reference/midnight-api/zswap/type-aliases/Nonce",
                "develop/reference/midnight-api/zswap/type-aliases/Nullifier",
                "develop/reference/midnight-api/zswap/type-aliases/QualifiedCoinInfo",
                "develop/reference/midnight-api/zswap/type-aliases/TokenType",
                "develop/reference/midnight-api/zswap/type-aliases/TransactionHash",
                "develop/reference/midnight-api/zswap/type-aliases/TransactionId"
              ]
            }
          ]
        }
      ]
    },

    // TROUBLESHOOTING
    {
      type: "category",
      label: "Troubleshooting",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "develop/faq",
          label: "Frequently asked questions"
        },
        {
          type: "doc",
          id: "develop/getting-help",
          label: "Getting help"
        }
      ]
    },

    // CONTRIBUTE
    {
      type: "category",
      label: "Contribute",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "contribute/style-guide",
          label: "Style guide"
        },
        {
          type: "doc",
          id: "contribute/formatting-guide",
          label: "Formatting guide"
        }
      ]
    },

    // RELEASE NOTES
    {
      type: "category",
      label: "Release notes",
      collapsed: true,
      link: {
        type: "doc",
        id: "relnotes/overview"
      },
      items: [
        {
          type: "doc",
          id: "relnotes/ledger",
          label: "Ledger"
        },
        {
          type: "doc",
          id: "relnotes/proof-server",
          label: "Proof server"
        },
        {
          type: "doc",
          id: "relnotes/onchain-runtime",
          label: "Onchain runtime"
        },
        {
          type: "doc",
          id: "relnotes/node",
          label: "Node"
        },
        {
          type: "doc",
          id: "relnotes/midnight-indexer",
          label: "Midnight indexer"
        },
        {
          type: "doc",
          id: "relnotes/lace",
          label: "Midnight Lace wallet"
        },
        {
          type: "doc",
          id: "relnotes/wallet",
          label: "Wallet SDK"
        },
        {
          type: "doc",
          id: "relnotes/midnight-wallet-api",
          label: "Wallet API"
        },
        {
          type: "doc",
          id: "relnotes/dapp-connector-api",
          label: "DApp connector API"
        },
        {
          type: "doc",
          id: "relnotes/faucet",
          label: "Faucet"
        },
        {
          type: "doc",
          id: "relnotes/compact",
          label: "Compact compiler"
        },
        {
          type: "doc",
          id: "relnotes/compact-tools",
          label: "Compact developer tools"
        },
        {
          type: "doc",
          id: "relnotes/midnight-js",
          label: "Midnight.js"
        },
        {
          type: "doc",
          id: "relnotes/vs-code-extension",
          label: "VS Code extension"
        },
        {
          type: "doc",
          id: "relnotes/support-matrix",
          label: "Compatibility matrix"
        }
      ]
    },

    // GLOSSARY
    {
      type: "doc",
      id: "learn/glossary",
      label: "Glossary"
    },

    // DEV DIARIES LINK
    {
      type: "link",
      label: "Dev diaries",
      href: "/blog"
    }
  ]
};
