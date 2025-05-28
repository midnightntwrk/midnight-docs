import React from "react";
import { HtmlClassNameProvider } from "@docusaurus/theme-common";
import { DocProvider } from "@docusaurus/theme-common/internal";
import DocItemMetadata from "@theme/DocItem/Metadata";
import DocItemLayout from "@theme/DocItem/Layout";

import type { Props } from "@theme/DocItem";

export default function DocItem({ content }: Props) {
  const docHtmlClassName = `docs-doc-id-${content.metadata.unversionedId}`;
  const MDXComponent = content;
  return (
    <DocProvider content={content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
