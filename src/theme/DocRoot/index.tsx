// src/theme/DocRoot/index.tsx (or .jsx)
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {DocsSidebarProvider, useDocRootMetadata} from '@docusaurus/theme-common/internal';
import DocRootLayout from '@theme/DocRoot/Layout';
import NotFoundContent from '@theme/NotFound/Content';
import type {Props} from '@theme/DocRoot';

export default function DocRoot(_props: Props) {
  const metadata = useDocRootMetadata();
  if (!metadata) return <NotFoundContent />;

  const {docElement, sidebarName} = metadata;

  return (
    <HtmlClassNameProvider className={ThemeClassNames.wrapper.docsPages}>
      <DocsSidebarProvider name={sidebarName}>     {/* ← no items prop */}
        <DocRootLayout>{docElement}</DocRootLayout>
      </DocsSidebarProvider>
    </HtmlClassNameProvider>
  );
}
