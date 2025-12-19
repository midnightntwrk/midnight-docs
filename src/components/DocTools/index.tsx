'use client';
import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { ViewOptions } from '@site/src/components/LLMTools';

export default function DocTools() {
  try {
    const doc = useDoc?.();
    const editUrl = doc?.metadata?.editUrl;
    return (
      <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
        <ViewOptions githubUrl={editUrl} />
      </div>
    );
  } catch {
    return null;
  }
}
