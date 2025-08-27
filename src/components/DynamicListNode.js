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
    version: '0.12.1',
    status: 'LATEST',
    date: '11 June 2025',
    summary: 'Summary of Release 0.12.1',
    details: [
      'Fix mock Ariadne for testnet-02 network.',
      'Use files for node secrets (backwards compatible).',
      'Rename chain spec files.',
      'Fix midnight-docs to refer to tree command.',
      'Remove unused `ss58` field in authority keys config.',
    ],
    
    artifacts: [
      { name: 'Midnight node', url: 'https://hub.docker.com/r/midnightnetwork/midnight-node' }
    ],
    link: '/relnotes/node/node-0-12-1',
  },
  {
    id: 2,
    version: '0.12.0',
    status: 'DEPRECATED',
    date: '12 May 2025',
    summary: 'Summary of Release 0.12.0',
    details: [
      'Add missing index removed by DB Sync.',
      'Add more debugging tools as standard to images.',
      'Tx Generator replaced by `mn-node-toolkit`.',
      'Added new Node Ledger Prometheus Metrics.',
      'Add support for external proof servers in the transaction generator.',
      'Adds `addresses.json` and chain specification for `testnet-02` deployment.',
      'Adds native token management pallet and main chain follower.',
      'Adds support for testnet networks to the tx generator.',
      'Adds a new `midnight_zswapStateRoot` RPC method.',
      'Chain-specs are now generated declaratively (DRY-er and less error-prone).',
      'Improve CLI errors for subcommands.',
      'Add genesis values for cNIGHT related pallets.',
      'Fixed enum clash in runtime model Events.',
      'Fix crash on startup if `BASE_PATH` directory does not exist.',
      'Replace calls to Partner-Chains from-env with our own config.',
      'Updates Partnerchains dependencies to 1.4.0.',
      'Improve send mechanism of transaction generator.',
      'Switch to new storage model.',
      'Updates Partnerchains dependencies to 1.3.1.',
      'Remove old ledger versions (no backwards compatibility).',
      'Fix partnerchains-dev image to work in detached mode with no TTY.',
      'Switch node base image from debian unstable to debian bookworm.',
      'Transaction validation and processing fix.',
      'Ship debug info with builds.',
      'Removed unused `CFG_PRESET=testnet-preview`.',
      'Manually dispatch CI.',
      'Split token management crates.',
      'Switch field/curves from Pluto-Eris to BLS12-381.',
    ],
    
    artifacts: [
      { name: 'Midnight node', url: 'https://hub.docker.com/r/midnightnetwork/midnight-node' }
    ],
    link: '/relnotes/node/node-0-12',
  },
  {
    id: 3,
    version: '0.8.0',
    status: 'DEPRECATED',
    date: '24 January 2025',
    summary: 'Summary of Release 0.8.0',
    details: [
      'Added prometheus metrics for core ledger.',
      'Block computation accuracy - added basic runtime benchmarks for core Midnight pallet.',
      'Improved governance keys management.',
      'Added a new release notes generator.',
      'Added release configuration artifacts in preparation for testnet-02.',
      'Upgraded from ledger 3.0.2 to ledger 3.0.5, then 3.0.6.',
      'Bug fixes to transaction generator.',
      'Updated key derivation mechanism in upcoming networks.',
      'Updated Rust compiler to `1.83`.',
      'Added default for storage caching configuration.',
      'Updated defaults for storage shutdown.',
      'Transaction generator refactors for usability.',
    ],
    artifacts: [
      { name: 'Docker Hub Image', url: 'https://hub.docker.com/layers/midnightnetwork/midnight-node/0.8.0/images/sha256-378ff022759b1e76656617607892258759d088cd621468512c05159a22431186' },
    ],
    link: '/relnotes/node/node-0-8-0',
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
