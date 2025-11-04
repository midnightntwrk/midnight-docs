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
        "lang-ref",              // docs/develop/reference/compact/lang-ref.md(x)
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
