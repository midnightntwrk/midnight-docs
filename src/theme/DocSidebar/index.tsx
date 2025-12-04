import React from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import EnvSelector from '@site/src/components/EnvSelector';

export default function DocSidebarWrapper(props) {
  if (!props.sidebar) return null;

  return (
    <>
      <EnvSelector />
      <OriginalDocSidebar {...props} />
    </>
  );
}
