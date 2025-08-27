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
    version: '0.2.2',
    status: 'LATEST',
    date: '9 April 2025',
    summary: 'Summary of Release 0.2.2',
    details: [
      "Bug fixes and performance improvements."
    ],
    artifacts: [
      { name: 'Zip Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/examples/midnight-examples-0.2.2.zip' },
    ],
    link: '/relnotes/dapp-examples/dapp-examples-0-2-2',
  },
  {
    id: 2,
    version: '0.2.0',
    status: 'LATEST',
    date: '18 February 2025',
    summary: 'Summary of Release 0.2.0',
    details: [
      "Bug fixes and performance improvements."
    ],
    artifacts: [
      { name: 'Zip Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/examples/midnight-examples-0.2.0.zip' },
    ],
    link: '/relnotes/dapp-examples/dapp-examples-0-2-0',
  },
  {
    id: 3,
    version: '0.1.17',
    compactcVersion: '0.1.17',
    status: 'DEPRECATED',
    date: '15 January 2025',
    summary: 'Summary of Release 0.1.17',
    details: [
      "Bug fixes and performance improvements."
    ],
    artifacts: [
      { name: 'Zip Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/examples/midnight-examples-0.1.17.zip' },
        ],
    link: '/relnotes/dapp-examples/dapp-examples-0-1-17',
  },
  {
    id: 4,
    version: '0.1.16',
    compactcVersion: '0.1.16',
    status: 'DEPRECATED',
    date: '25 November 2024',
    summary: 'Summary of Release 0.1.16',
    details: [
      "Bug fixes and performance improvements."
    ],
    artifacts: [
      { name: 'Zip Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/examples/midnight-examples-0.1.16.zip' },
        ],
    link: '/relnotes/dapp-examples/dapp-examples-0-1-16',
  },
  {
    id: 5,
    version: '0.1.15',
    compactcVersion: '0.1.15',
    status: 'DEPRECATED',
    date: '16 October 2024',
    summary: 'Summary of Release 0.1.15',
    details: [
      "Bug fixes and performance improvements."
    ],
    artifacts: [
      { name: 'Zip Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/examples/midnight-examples-0.1.15.zip' },
        ],
    link: '/relnotes/dapp-examples/dapp-examples-0-1-15',
  },
  {
    id: 6,
    version: '0.1.14',
    compactcVersion: '0.1.14',
    status: 'DEPRECATED',
    date: '2 October 2024',
    summary: 'Summary of Release 0.1.14',
    details: [
      "Bug fixes and performance improvements."
    ],
    artifacts: [
      { name: 'Zip Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/examples/midnight-examples-0.1.14.zip' },
        ],
    link: '/relnotes/dapp-examples/dapp-examples-0-1-14',
  },
  {
    id: 7,
    version: '0.1.13',
    compactcVersion: '0.1.13',
    status: 'DEPRECATED',
    date: '12 July 2024',
    summary: 'Summary of Release 0.1.13',
    details: [
      "Bug fixes and performance improvements."
    ],
    artifacts: [
      { name: 'Zip Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/examples/midnight-examples-0.1.13.zip' },
        ],
    link: '/relnotes/dapp-examples/dapp-examples-0-1-13',
  },
  {
    id: 8,
    version: '0.1.12',
    compactcVersion: '0.1.12',
    status: 'DEPRECATED',
    date: '6 June 2024',
    summary: 'Summary of Release 0.1.12',
    details: [
      "Bug fixes and performance improvements."
    ],
    artifacts: [
      { name: 'Zip Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/examples/midnight-examples-0.1.12.zip' },
        ],
    link: '/relnotes/dapp-examples/dapp-examples-0-1-12',
  },
  {
    id: 9,
    version: '0.1.11',
    compactcVersion: '0.1.11',
    status: 'DEPRECATED',
    date: '17 February 2024',
    summary: 'Summary of Release 0.1.11',
    details: [
      "Bug fixes and performance improvements."
    ],
    artifacts: [
      { name: 'Zip Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/examples/midnight-examples-0.1.11.zip' },
        ],
    link: '/relnotes/dapp-examples/dapp-examples-0-1-11',
  },
];

// Sort versions from latest to oldest
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
