/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  academySidebar: [
    {
      type: "category",
      label: "Midnight academy",
      link: { type: "doc", id: "index" }, // resolves to academy/index.mdx
      items: [
        "module-1",
        "module-2",
        "module-3",
        "module-4",
        "module-5",
        "module-6",
        "module-7",
      ],
    },
  ],
};

module.exports = sidebars;
