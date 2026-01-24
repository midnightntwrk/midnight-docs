import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import EnvSelector from '@site/src/components/EnvSelector';

export default function DocSidebarWrapper(props: any) {
  if (!props.sidebar) return null;

  return (
    <div className={props.className}>
      <div style={{ paddingTop: '3.5rem' }}>
        {/* <EnvSelector /> */}
      </div>
      <DocSidebar {...props} />
    </div>
  );
}
