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
    version: '2.1.0',
    status: 'LATEST',
    date: '1 October 2025',
    summary: 'Summary of Release 2.1.0',
    details: [

      'Block time support added',
      'Compact compiler upgraded to `v0.26.0`',
      'Apollo Client `v3.13.9`',
      'Major dependency updates for security and stability',
      'Compact-runtime upgraded to 0.9.0',
      'GitHub Actions hardened with updated permissions',
      'Security patches applied across dependencies',
      'ESLint configuration optimisations',
      'Enhanced E2E testing framework with comprehensive docs',
    ],
    artifacts: [
      { name: 'NPM Package', url: 'https://www.npmjs.com/search?q=midnight-ntwrk' },
    ],
    link: '/relnotes/midnight-js/midnight-js-2-1-0',
  },
  {
    id: 2,
    version: '2.0.2',
    status: 'DEPRECATED',
    date: '11 June 2025',
    summary: 'Summary of Release 2.0.2',
    details: [
      'Add captcha header for faucet request',
      'Ensure segment number defaults to `0`',
    ],
    artifacts: [
      { name: 'NPM Package', url: 'https://www.npmjs.com/search?q=midnight-ntwrk' },
    ],
    link: '/relnotes/midnight-js/midnight-js-2-0-2',
  },
  {
    id: 3,
    version: '2.0.1',
    status: 'DEPRECATED',
    date: '30 May 2025',
    summary: 'Summary of Release 2.0.1',
    details: [
      'Consider `EncPublicKey` as Bech32m formatted strings',
      'Update zSwap-utils `createUnprovenOutput` to use segment 0',
    ],
    artifacts: [
      { name: 'NPM Package', url: 'https://www.npmjs.com/search?q=midnight-ntwrk' },
    ],
    link: '/relnotes/midnight-js/midnight-js-2-0-1',
  },
  {
    id: 4,
    version: '2.0.0',
    status: 'DEPRECATED',
    date: '12 May 2025',
    summary: 'Summary of Release 2.0.0',
    details: [
      'Update typedoc.json',
      'Fix the broken compact package',
      'Fix the docs workflow',
      'Fix API docs',
      'Fix the docs workflow (again)',
      'Update dependency cross-fetch to v4.1.0',
      'Update dependency node to v22.14.0',
      'Pin dependencies',
      'Update dependency graphql to v16.10.0',
      'Update devDependencies (non-major)',
      'Update dependency @rollup/plugin-node-resolve to v16',
      'Update dependency @apollo/client to v3.13.6',
      'Update dependency graphql-ws to v6',
      'Update dependency express to v5',
      'API documentation update',
      'Update dependency node to v22.15.0',
      'Add BLS support',
      'Rename `contract` to `contractAction` in GraphQL schema',
      'Release 2.0.0-rc.1',
      'Update yarn to v4.9.1',
      'Bump @apollo/client to v3.13.8 and force import of only CJS modules',
      'Release 2.0.0-rc.2',
      'Add single test for Node.js compatibility',
      'Prepare release 2.0.0',
    ],
    artifacts: [
      { name: 'NPM Package', url: 'https://www.npmjs.com/search?q=midnight-ntwrk' },
    ],
    link: '/relnotes/midnight-js/midnight-js-2-0-0',
  },
  {
    id: 5,
    version: '1.0.0',
    status: 'DEPRECATED',
    date: '2 April 2025',
    summary: 'Summary of Release 1.0.0',
    details: [
      "Introduces proper semantic versioning.",
      "Bech32m is now default and works with older wallets.",
      "Test framework is now public.",
      "Custom logging strategies are now supported.",
      "Works with the latest Node.js LTS.",
      "Dependencies updated to fix vulnerabilities."
    ],
    artifacts: [
      { name: 'NPM Package', url: 'https://www.npmjs.com/search?q=midnight-ntwrk' },
    ],
    link: '/relnotes/midnight-js/midnight-js-1-0-0',
  },
  {
    id: 6,
    version: '0.2.5',
    status: 'DEPRECATED',
    date: '3 February 2025',
    summary: 'Summary of Release 0.2.5',
    details: [
      "Updated `@midnight-ntwrk/compact-runtime/@midnight-ntwrk/onchain-runtime` from `^0.2.2` to `^0.2.4` in `resolutions`.",
      "Updated `@midnight-ntwrk/zswap` from `^3.0.2` to `^3.0.6` in `resolutions`.",
      "Updated `@midnight-ntwrk/dapp-connector-api` from `^1.2.2` to `^1.2.3` in `dependencies`.",
      "Updated `@midnight-ntwrk/ledger` from `^3.0.2` to `^3.0.6` in `dependencies`.",
      "Updated `@midnight-ntwrk/wallet` from `^3.7.3` to `^3.7.5` in `dependencies`."
    ],
    artifacts: [
      { name: 'NPM Package', url: 'https://www.npmjs.com/search?q=midnight-ntwrk' },
    ],
    link: '/relnotes/midnight-js/midnight-js-0-2-5',
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