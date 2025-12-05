import React from 'react';
import Original from '@theme-original/DocCardList';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';

export default function DocCardListSafe(props: any) {
  const sidebar = useDocsSidebar();
  if (!sidebar) return null; // not inside docs provider → don't render (prevents error)
  return <Original {...props} />;
}
