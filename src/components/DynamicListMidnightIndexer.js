// This file is part of midnight-docs.
// Copyright (C) 2025 Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const releases = [
  {
    id: 1,
    version: '2.1.4',
    status: 'LATEST',
    date: '30 June 2025',
    summary: 'Summary of Release 2.1.4',
    details: [
      'Return highest relevant index more reliably.',
      'Handle standalone mode indexing.',
      'Ensure all relevant transactions are saved during sync.',
    ],
    artifacts: [
      { name: 'Docker images', url: 'https://hub.docker.com/r/midnightntwrk' },
    ],
    link: '/relnotes/midnight-indexer/midnight-indexer-2-1-3',
  },
  {
    id: 2,
    version: '2.1.3',
    status: 'LATEST',
    date: '11 June 2025',
    summary: 'Summary of Release 2.1.3',
    details: [
      'Extend PostgreSQL pool configuration.',
      'Minimize storage access.',
    ],
    artifacts: [
      { name: 'Docker images', url: 'https://hub.docker.com/r/midnightntwrk' },
    ],
    link: '/relnotes/midnight-indexer/midnight-indexer-2-1-3',
  },
  {
    id: 3,
    version: '2.1.2',
    status: 'DEPRECATED',
    date: '27 May 2025',
    summary: 'Summary of Release 2.1.2',
    details: [
      'Make viewing update stream infinite.',
    ],
    artifacts: [
      { name: 'Docker images', url: 'https://hub.docker.com/r/midnightntwrk' },
    ],
    link: '/relnotes/midnight-indexer/midnight-indexer-2-1-2',
  },
  {
    id: 4,
    version: '2.1.1',
    status: 'DEPRECATED',
    date: '19 May 2025',
    summary: 'Summary of Release 2.1.1',
    details: [
      'Queries return correct transactions and contract actions.','Easier, more idiomatic way to apply transactions.',
    ],
    artifacts: [
      { name: 'Docker images', url: 'https://hub.docker.com/r/midnightntwrk' },
    ],
    link: '/relnotes/midnight-indexer/midnight-indexer-2-1-1',
  },
  {
    id: 5,
    version: '2.1.0',
    status: 'DEPRECATED',
    date: '9 May 2025',
    summary: 'Summary of Release 2.1.0',
    details: [
      'Added permissive CORS middleware.',
    ],
    artifacts: [
      { name: 'Chain Indexer (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Wallet Indexer (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Indexer API (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Composite Indexer (coming soon)', url: 'https://docs.midnight.network/' },
    ],
    link: '/relnotes/midnight-indexer/midnight-indexer-2-1-0',
  },
  {
    id: 6,
    version: '2.0.0',
    status: 'DEPRECATED',
    date: '9 May 2025',
    summary: 'Summary of Release 2.0.0',
    details: [
      'Redesign wallet subscription `ProgressUpdates` (indexer-api)',
      'Add tracing to API (indexer-api)',
      'Add counters for all GraphQL operations (indexer-api)',
      'Clean naming and inputs (indexer-api)',
      'Only support bech32m encoded keys/addresses',
      'Rename contract query and subscription `contract_action` (indexer-api)',
      'Add missing logging for wallet subscription (indexer-api)',
      'Skip collapsed update for failed transactions (indexer-api)',
      'Add transaction to `ContractCallOrDeploy` (indexer-api)',
      'Add `deploy` to `ContractCall` (indexer-api)',
      'Silence harmless database error in `active_wallets` (wallet-indexer)',
      'Use `log`, `logforth` and `fastrace` for telemetry',
      'Replace bytes attribute with byte newtypes',
      'Pass `SessionId` (Copy) by value',
      'Move `main/run` into `main.rs`',
      'Pass block and tx hashes (arrays) by value (indexer-api)',
      'Lazy resolving of transactions and contract actions (indexer-api)',
      'Apply consistent error handling (indexer-api)',
      'More debug logging (indexer-api)',
    ],
    artifacts: [
      { name: 'Chain Indexer (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Wallet Indexer (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Indexer API (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Composite Indexer (coming soon)', url: 'https://docs.midnight.network/' },
    ],
    link: '/relnotes/midnight-indexer/midnight-indexer-2-0-0',
  },  
  {
    id: 7,
    version: '1.0.1',
    status: 'DEPRECATED',
    date: '2 April 2025',
    summary: 'Summary of Release 1.0.1',
    details: ['Enhanced wallet session management by explicitly marking active wallets to prevent disconnections.', 'Ensured `ProgressUpdates` resume from the correct index instead of defaulting to zero.'],
    artifacts: [
      { name: 'Chain Indexer (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Wallet Indexer (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Indexer API (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Composite Indexer (coming soon)', url: 'https://docs.midnight.network/' },
    ],
    link: '/relnotes/midnight-indexer/midnight-indexer-1-0-1',
  },
  {
    id: 8,
    version: '1.0.0',
    status: 'DEPRECATED',
    date: '24 March 2025',
    summary: 'Summary of Release 1.0.0',
    details: ['Rust-based implementation of Midnight Indexer.', 'GraphQL interface with query, mutation, and subscription support.', 'Event-driven real-time subscription system.', 'Wallet-aware transaction indexing.', 'SQLite support for local dev/test.', 'PostgreSQL support for production/cloud deployments.'],
    artifacts: [
      { name: 'Chain Indexer (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Wallet Indexer (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Indexer API (coming soon)', url: 'https://docs.midnight.network/' },
      { name: 'Composite Indexer (coming soon)', url: 'https://docs.midnight.network/' },
    ],
    link: '/relnotes/midnight-indexer/midnight-indexer-1-0-0',
  },
];

// Ensure versions are sorted with the latest at the top
const sortedVersions = releases
  .map(release => release.version)
  .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

const versions = ['All', ...sortedVersions];

// Extract unique statuses and keep "All" at the top
const sortedStatuses = ['All', ...new Set(releases.map(release => release.status))];

// Set latest version as default if releases exist
const latestVersion = sortedVersions.length > 0 ? sortedVersions[0] : 'All';

const DynamicListWithDropdownFilters = () => {
  const [selectedVersion, setSelectedVersion] = useState(latestVersion);
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredReleases = releases.filter(
    (release) =>
      (selectedVersion === 'All' || release.version === selectedVersion) &&
      (selectedStatus === 'All' || release.status === selectedStatus)
  );

  return (
    <div>
      {/* Dropdown Filters */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="version-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Version
          </label>
          <select
            id="version-select"
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            {versions.map((version) => (
              <option key={version} value={version}>
                {version}
              </option>
            ))}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="status-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Status
          </label>
          <select
            id="status-select"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            {sortedStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filtered List */}
      {filteredReleases.map((release) => (
        <div key={release.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
          {/* Header with flex alignment */}
          <h3
            style={{
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontWeight: 'bold',
            }}
          >
            <Link to={release.link} className="hyperlink">
              Release {release.version}
            </Link>
            <span style={{
              display: 'inline-block',
              padding: '0.2rem 0.6rem',
              border: '1px solid currentColor',
              borderRadius: '15px',
              backgroundColor: '#7aa7ff',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginLeft: '1rem',
            }}>
              {release.status}
            </span>
          </h3>

          {/* Release date */}
          <p style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: '1rem' }}>{release.date}</p>

          {/* Artifacts Section */}
          {release.artifacts.length > 0 && (
            <>
              <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Artifacts</h4>
              <ul>
                {release.artifacts.map((artifact, index) => (
                  <li key={index}>
                    <a href={artifact.url} target="_blank" rel="noopener noreferrer">
                      {artifact.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Summary */}
          <h4 style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Summary</h4>
          <ul>
            {release.details.map((detail, index) => {
              const parts = detail.split(/(`[^`]+`)/g);

              return (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  {parts.map((part, i) =>
                    part.startsWith('`') && part.endsWith('`') ? (
                      <code
                        key={i}
                        style={{
                          background: 'var(--ifm-code-background)',
                          color: 'var(--ifm-code-color)',
                          padding: '0.2rem 0.4rem',
                          borderRadius: '4px',
                        }}
                      >
                        {part.slice(1, -1)}
                      </code>
                    ) : (
                      part
                    )
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DynamicListWithDropdownFilters;
