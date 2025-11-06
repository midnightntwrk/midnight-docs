import React from 'react';
// Use the internal hook (correct path for v3)
import {useDocRootMetadata} from '@docusaurus/theme-common/internal';
// Keep the default layout behavior
import DocRootLayout from '@theme/DocRoot/Layout';

// Works with multiple docs plugin instances: main, compact, academy
export default function DocRoot(props: React.ComponentProps<typeof DocRootLayout>) {
  // Call the hook for each known plugin id in a stable order.
  // Hooks are always called the same number of times, so this is safe.
  const metaMain = useDocRootMetadata({pluginId: 'main'});
  const metaCompact = useDocRootMetadata({pluginId: 'compact'});
  const metaAcademy = useDocRootMetadata({pluginId: 'academy'});

  const metadata = metaMain ?? metaCompact ?? metaAcademy;

  // If we’re not on a docs route (e.g., homepage/blog), no metadata will exist.
  // Don’t destructure; just render the layout.
  // If you need route-specific logic, guard with `if (metadata) { ... }`.
  return <DocRootLayout {...props} />;
}

