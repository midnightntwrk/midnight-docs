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
    version: '4.0.0',
    status: 'LATEST',
    date: '12 May 2025',
    summary: 'Summary of Release 4.0.0',
    details: [
      'Integrated with the new storage model, making required objects `Storable` to allow storing MPT leafs as `Sp`s.',
      'Added segment IDs to Zswap constructors. These should be set to `1` for fallible offers, and `0` for guaranteed offers.',
      'Renamed `ZswapLocalStateNoKeys` to `ZswapLocalState`, removing the existing (with keys) state.',
      'Switch from Pluto-Eris to BLS12-381.',
      'Switched to using data providers instead of direct prover keys and parameters.',
      'Add a data provider to fetch key material for Midnight. The source of this may be overridden with the `MIDNIGHT_PARAM_SOURCE` environment variable.',
    ],    
    artifacts: [
      { name: 'Ledger', url: 'https://www.npmjs.com/package/@midnight-ntwrk/ledger' },
      { name: 'Zswap', url: 'https://www.npmjs.com/package/@midnight-ntwrk/ledger?activeTab=versions' },
      { name: 'Onchain Runtime', url: 'https://www.npmjs.com/package/@midnight-ntwrk/onchain-runtime?activeTab=versions' },
    ],
    link: '/relnotes/ledger/ledger-4-0-0',
  },
  {
    id: 2,
    version: '3.0.6',
    status: 'DEPRECATED',
    date: '22 January 2025',
    summary: 'Summary of Release 3.0.6',
    details: [
      "Introduced `coinCommitment` and `coinNullifier` functions.",
      "Introduced API separating keys from Zswap local state to Zswap packages.",
      "Catch breaking change in `midnight-storage-0.3`, where the serialization shape of `Map` changed. This required minor version bumps on all types with nested `Map` structures.",
      "Some data structures are no longer directly constructable due to added private fields: `Transaction` is no longer a public structured enum. Its components have been extracted into `StandardTransaction` and `ClaimMintTransaction`, which are now private.",
      "`ContractCall`, `ContractDeploy`, and `MaintenanceUpdate` are now private.",
      "Use the `transaction-construction` feature and its methods to construct transactions.",
      "Changes in `midnight-storage-0.3` affected serialization, requiring updates for types with nested `Map` structures.",
      "Fixed a security bug in Schnorr proofs using incorrect information in in-memory environments.",
      "Removed various instances of triggerable panics in the ledger.",
      "Removed vulnerability in balance checking (breaking change for a minority of transactions).",
      "Fixed Schnorr proofs not surviving serialization.",
      "Fixed a security-related issue with Schnorr proofs in in-memory environments.",
      "Fixed transaction re-serialization issues.",
      "Fixed WASM `checkProofData` endpoint.",
      "Fixed WASM API `fees` endpoint.",
      "Fixed maintenance update Schnorr proofs not persisting after serialization.",
      "Fixed debug logging removal from the proof server."
    ],
    artifacts: [
      { name: 'Ledger', url: 'https://www.npmjs.com/package/@midnight-ntwrk/ledger' },
      { name: 'Zswap', url: 'https://www.npmjs.com/package/@midnight-ntwrk/ledger?activeTab=versions' },
      { name: 'Onchain Runtime', url: 'https://www.npmjs.com/package/@midnight-ntwrk/onchain-runtime?activeTab=versions' },
    ],
    link: '/relnotes/ledger/ledger-3-0-6',
  }
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
