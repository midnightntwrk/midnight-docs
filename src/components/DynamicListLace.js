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
    version: '3.0.0',
    status: 'LATEST',
    date: '12 May 2025',
    summary: 'Summary of Release 3.0.0',
    details: [
      "BLS support."
    ],
    artifacts: [
      { name: 'Zip Archive', url: ' https://github.com/midnight-ntwrk/releases/blob/gh-pages/artifacts/wallet/midnight-lace-3.0.0/midnight-lace-3.0.0.zip' },
    ],
    link: '/relnotes/lace/lace-3-0-0',
  },
  {
    id: 2,
    version: '2.0.0',
    status: 'DEPRECATED',
    date: '2 April 2025',
    summary: 'Summary of Release 2.0.0',
    details: [
      "Bech32m address format change."
    ],
    artifacts: [
      { name: 'Zip Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-2.0.0/midnight-lace-2.0.0.zip' },
    ],
    link: '/relnotes/lace/lace-2-0-0',
  },
  {
    id: 3,
    version: '1.2.5',
    status: 'DEPRECATED',
    date: '9 December 2024',
    summary: 'Summary of Release 1.2.5',
    details: [
      "Updated to latest version of DApp Connector API - `v1.2.3`.",
      "Updated to latest version of wallet - `v3.7.5`."
    ],
    artifacts: [
      { name: 'ZIP Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-1.2.5/midnight-lace-1.2.5.zip' },
    ],
    link: '/relnotes/lace/lace-1-2-5',
  },
  {
    id: 4,
    version: '1.2.4',
    status: 'DEPRECATED',
    date: '4 December 2024',
    summary: 'Summary of Release 1.2.4',
    details: [
      "Added sharding for tests.",
      "Used sharding in nightly tests.",
      "Fixed DApp connector type usage.",
      "Upgrade Instructions:",
      "Ensure compatibility with the new test sharding, especially for nightly tests.",
      "Verify the updated DApp connector type usage.",
      "Bumped version to `1.2.3` and then `1.2.4` for release.",
      "Released Midnight following task `PM-12715`.",
      "Bumped Docker images.",
      "Updated wallet to version `3.7.3`.",
      "Updated `halo2-qa` to `qanet`."
    ],
    artifacts: [
      { name: 'ZIP Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-1.2.4/midnight-lace-1.2.4.zip' },
    ],
    link: '/relnotes/lace/lace-1-2-4',
  },
  {
    id: 5,
    version: '1.2.3',
    status: 'DEPRECATED',
    date: '13 November 2024',
    summary: 'Summary of Release 1.2.3',
    details: [
      "Bumped version to `1.2.2`.",
      "Fixed end-to-end tests and updated Docker images.",
      "Increased timeouts and fixed skip condition in tests.",
      "Ensure compatibility with the updated version `1.2.2`.",
      "Review and apply updated timeouts and conditions for the tests.",
      "Updated wallet to version `3.7.2`."
    ],
    artifacts: [
      { name: 'ZIP Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-1.2.3/midnight-lace-1.2.3.zip' },
    ],
    link: '/relnotes/lace/lace-1-2-3',
  },
  {
    id: 6,
    version: '1.2.2',
    status: 'DEPRECATED',
    date: '1 July 2024',
    summary: 'Summary of Release 1.2.2',
    details: [
      "Dynamically loaded network ID in DApp connector codec.",
      "Ensure the network ID is dynamically loaded in the DApp connector codec.",
      "Updated tests for undeployed `3.0.0`."
    ],
    artifacts: [
      { name: 'ZIP Archive', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-1.2.2/midnight-lace-1.2.2.zip' },
    ],
    link: '/relnotes/lace/lace-1-2-2',
  },
  {
    id: 7,
    version: '1.1.5',
    status: 'DEPRECATED',
    date: '1 July 2024',
    summary: 'Summary of Release 1.1.5',
    details: [
      "Added URL pointing to staging in Cardano.",
      "Updated URLs to staging in preprod environment.",
      "Fixed testing issue in popup mode.",
      "Increased test timeout due to long sync times on Devnet.",
      "Fixed staking package broken on and off.",
      "Fixed overlay behavior with native tokens always appearing first.",
      "Fixed input to only send decimals for `tDust`.",
      "Ensure the updated `indexer` URL for `ariadne-qa` is used.",
      "Verify improvements in native token tests are reflected in your test suite.",
      "Ensure compatibility with the updated URLs pointing to staging and preprod environments.",
      "Verify that native token overlays are functioning correctly.",
      "Ensure the correct handling of decimals for `tDust` in input fields.",
      "Released version with updated `send results` action.",
      "Updated `allure` server to production (`prd`).",
      "Updated `upload/download artifact` version."
    ],
    artifacts: [
      { name: 'ZIP Archive (Devnet)', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-1.1.5/midnight-lace-1.1.5-devnet.zip' },
      { name: 'ZIP Archive (Undeployed)', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-1.1.5/midnight-lace-1.1.5-undeployed.zip' },
    ],
    link: '/relnotes/lace/lace-1-1-5',
  },
  {
    id: 8,
    version: '1.1.4',
    status: 'DEPRECATED',
    date: '8 May 2024',
    summary: 'Summary of Release 1.1.4',
    details: [
      "Ensure compatibility with the updated `cardano-sdk` packages.",
      "Verify integration with Allure server for test results.",
      "Update Docker Compose and Playwright configurations as necessary.",
      "Ensure proper integration with the updated `ariadne-qa` URLs.",
      "Updated `cardano-sdk` packages.",
      "Sent test results to Allure server.",
      "Updated Docker Compose and Playwright configurations.",
      "Improved native token tests.",
      "Ensure the updated `indexer` URL for `ariadne-qa` is used.",
      "Verify improvements in native token tests are reflected in your test suite."
    ],
    artifacts: [
      { name: 'ZIP Archive (Devnet)', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-1.1.4/midnight-lace-1.1.4-devnet.zip' },
      { name: 'ZIP Archive (Undeployed)', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-1.1.4/midnight-lace-1.1.4-undeployed.zip' },
    ],
    link: '/relnotes/lace/lace-1-1-4',
  },
  {
    id: 9,
    version: '1.1.3',
    status: 'DEPRECATED',
    date: '8 May 2024',
    summary: 'Summary of Release 1.1.3',
    details: [
      "Ensure compatibility with the updated `cardano-sdk` packages.",
      "Verify integration with Allure server for test results.",
      "Update Docker Compose and Playwright configurations as necessary.",
      "Ensure proper integration with the updated `ariadne-qa` URLs.",
      "Updated `cardano-sdk` packages.",
      "Sent test results to Allure server.",
      "Updated Docker Compose and Playwright configurations."
    ],
    artifacts: [
      { name: 'ZIP Archive (Devnet)', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-1.1.3/midnight-lace-1.1.3-devnet.zip' },
      { name: 'ZIP Archive (Undeployed)', url: 'https://raw.githubusercontent.com/midnight-ntwrk/releases/gh-pages/artifacts/wallet/midnight-lace-1.1.3/midnight-lace-1.1.3-undeployed.zip' },
    ],
    link: '/relnotes/lace/lace-1-1-3',
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
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 'bold' }}>
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