/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  compactSidebar: [
    {
      type: "category",
      label: "Compact language",
      collapsed: false,
      link: { type: "doc", id: "index" },
      items: [
        "writing",               // docs/develop/reference/compact/writing.md(x)
        {
          type: "category",
          label: "Compact reference",
          link: { type: "doc", id: "lang-ref/index" },
          items: [
            {
              type: "category",
              label: "Compact Types",
              link: { type: "doc", id: "lang-ref/types" },
              items: [
                "lang-ref/types/primitive-types",
                {
                  type: "category",
                  label: "User-defined types",
                  link: { type: "doc", id: "lang-ref/types/user-defined-types" },
                  items: [
                    "lang-ref/types/user-defined-types/structure-types",
                    "lang-ref/types/user-defined-types/enumeration-types",
                    "lang-ref/types/user-defined-types/contract-types",
                  ],
                },
                "lang-ref/types/generic-parameter-references",
                "lang-ref/types/subtyping-and-least-upper-bounds",
                "lang-ref/types/default-values",
                "lang-ref/types/representations-in-typescript",
              ],
            },
            "lang-ref/include-files",
            "lang-ref/modules-exports-and-imports",
            "lang-ref/top-level-exports",
            {
              type: "category",
              label: "Circuits",
              link: { type: "doc", id: "lang-ref/circuits" },
              items: [
                "lang-ref/circuits/pure-and-impure-circuits",
                {
                  type: "category",
                  label: "Statements",
                  link: { type: "doc", id: "lang-ref/circuits/statements" },
                  items: [
                    "lang-ref/circuits/statements/for-loop",
                    "lang-ref/circuits/statements/if-statement",
                    "lang-ref/circuits/statements/return-statement",
                    "lang-ref/circuits/statements/assert-statement",
                    "lang-ref/circuits/statements/const-binding-statement",
                  ],
                },
                {
                  type: "category",
                  label: "Expressions",
                  link: { type: "doc", id: "lang-ref/circuits/expressions" },
                  items: [
                    "lang-ref/circuits/expressions/literals",
                    "lang-ref/circuits/expressions/variable-references",
                    "lang-ref/circuits/expressions/default-values-of-a-type",
                    "lang-ref/circuits/expressions/circuit-and-witness-calls",
                    "lang-ref/circuits/expressions/structure-creation",
                    "lang-ref/circuits/expressions/tuple-creation",
                    "lang-ref/circuits/expressions/parenthesized-expressions",
                    "lang-ref/circuits/expressions/sequence-expressions",
                    "lang-ref/circuits/expressions/ledger-expressions",
                    "lang-ref/circuits/expressions/element-and-member-access-expressions",
                    "lang-ref/circuits/expressions/boolean-negation-expressions",
                    "lang-ref/circuits/expressions/binary-arithmetic-expressions",
                    "lang-ref/circuits/expressions/type-cast-expressions",
                    "lang-ref/circuits/expressions/relational-comparison-expressions",
                    "lang-ref/circuits/expressions/short-circuit-logical-expressions",
                    "lang-ref/circuits/expressions/conditional-expressions",
                    "lang-ref/circuits/expressions/map-and-fold-expressions",
                    "lang-ref/circuits/expressions/ledger-assignment-expressions",
                  ],
                },
              ],
            },
            "lang-ref/declaring-witnesses-for-private-state",
            {
              type: "category",
              label: "Declaring and maintaining public state",
              link: { type: "doc", id: "lang-ref/declaring-and-maintaining-public-state" },
              items: [
                "lang-ref/declaring-and-maintaining-public-state/ledger-state-types",
                "lang-ref/declaring-and-maintaining-public-state/nested-state-types-in-the-map-type",
                "lang-ref/declaring-and-maintaining-public-state/sealed-and-unsealed-ledger-fields",
              ],
            },
            {
              type: "category",
              label: "Contract constructor",
              link: { type: "doc", id: "lang-ref/contract-constructor" },
              items: [
                "lang-ref/contract-constructor/runtime-representations-and-type-bounds-checks",
              ],
            },
            {
              type: "category",
              label: "TypeScript target",
              link: { type: "doc", id: "lang-ref/typescript-target" },
              items: [
                "lang-ref/typescript-target/structure-of-the-exported-typescript",
              ],
            },
          ],
        },
        "compact-grammar",       // docs/develop/reference/compact/compact-grammar.md(x)
        "ledger-adt",            // docs/develop/reference/compact/ledger-adt.md(x)
        "opaque_data",           // docs/develop/reference/compact/opaque_data.md(x)
        "explicit_disclosure",   // docs/develop/reference/compact/explicit_disclosure.md(x)
        {
          type: "category",
          label: "Compact standard library",
          link: {
            type: "doc",
            id: "compact-std-library/README",
          },
          items: [
            "compact-std-library/exports",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Tools",
      link: { type: "doc", id: "reference/tools/index" }, // docs/develop/reference/tools/index.md(x)
      items: [
        "reference/tools/compiler-usage", // docs/develop/reference/tools/compiler-usage.md(x)
        {
          type: "category",
          label: "VS Code plugin",
          link: { type: "doc", id: "reference/tools/vsc-plugin/index" }, // .../vsc-plugin/index.md(x)
          items: [],
        },
      ],
    },
  ],
};

module.exports = sidebars;
