import React from 'react';
import Original from '@theme-original/DocCardList';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';

export default function DocCardListSafe(props: any) {
  const sidebar = useDocsSidebar();
  if (!sidebar) return null; // not inside docs provider → don't render (prevents error)
  return <Original {...props} />;
}
