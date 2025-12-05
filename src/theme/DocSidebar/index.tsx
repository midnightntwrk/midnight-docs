import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';

export default function DocSidebarWrapper(props: any) {
  if (!props.sidebar) return null;

  return (
    <div className={props.className}>
      <div style={{ paddingTop: '4rem' }}>
       
      </div>
      <DocSidebar {...props} />
    </div>
  );
}
