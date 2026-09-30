// This file is part of midnight-docs.
// Copyright (C) Midnight Foundation
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
import { useLocation } from '@docusaurus/router';

// Keep this list in order (newest release at the top).  The position of the
// elements is used to assign a numeric `id`.
const releases = [
  {
  version: '0.34.0',
  compactVersion: '0.26.0',
  status: 'LATEST',
  date: '25 August 2026',
  summary: 'Major release for ledger 9: cross-contract calls, events, Compact value serialization, ZKIR v3; not for the current public networks',
  details: [
    'Builds on 0.33.0: ledger version 9, cross-contract calls, events, serialization of Compact values, ZKIR version 3',
    'Cross-contract callees can perform shielded (Zswap) coin operations',
    'Language version 0.26.0 and Compact runtime 0.19.0',
    'Targets ledger 9, which is not yet deployed on the public networks; use `compact update 0.31` for contracts deployed today',
  ],
  artifacts: [
    { name: 'GitHub release', url: 'https://github.com/midnightntwrk/compact/releases/tag/compactc-v0.34.0' },
  ],
  link: '/relnotes/compact/toolchain-0.34.0',
},
  {
  version: '0.31.1',
  compactVersion: '0.23.0',
  status: 'SUPPORTED',
  date: '25 June 2026',
  summary: 'Patch release fixing code generation for certain casts; language 0.23.0 and runtime 0.16.0 unchanged',
  details: [
    'Fixed code generation for certain unsigned downcasts',
    'Language version 0.23.0 and Compact runtime 0.16.0 unchanged; compiles against the same runtime as 0.31.0',
    'Toolchain version listed in the compatibility matrix for the public networks',
  ],
  artifacts: [
    { name: 'GitHub release', url: 'https://github.com/midnightntwrk/compact/releases/tag/compactc-v0.31.1' },
  ],
  link: '/relnotes/compact/toolchain-0.31.1',
},
  {
  version: '0.31.0',
  compactVersion: '0.23.0',
  status: 'UNSUPPORTED',
  date: '29 April 2026',
  summary: 'Workarounds for erroneous proof failures in untaken branches, generic for-loop bounds, ledger layout in contract-info.json',
  details: [
    'Operations in untaken conditional branches can no longer fail during proof construction (may increase circuit size)',
    '`for` loop iteration bounds can be generic parameters',
    '`contract-info.json` describes the public ledger state',
    'Language reference brought up to date with language version 0.23.0',
  ],
  artifacts: [
    { name: 'GitHub release', url: 'https://github.com/midnightntwrk/compact/releases/tag/compactc-v0.31.0' },
  ],
  link: '/relnotes/compact/toolchain-0.31.0',
},
  {
  version: '0.30.0',
  compactVersion: '0.22.0',
  status: 'UNSUPPORTED',
  date: '17 March 2026',
  summary: 'Targets ledger 8.0; new compiler flags, JubjubPoint rename, module search order',
  details: [
    'Targets Midnight ledger version 8.0',
    'Compiler supports `--ledger-version` and `--runtime-version`; compiler and fixup tool support `--compact-path` and `--trace-search`',
    'Standard library `NativePoint` renamed to `JubjubPoint`',
    '`persistentHash` and `persistentCommit` on JavaScript opaque values are a compiler error',
    'New search order for include files and imported modules',
  ],
  artifacts: [
    { name: 'GitHub release', url: 'https://github.com/midnightntwrk/compact/releases/tag/compactc-v0.30.0' },
  ],
  link: '/relnotes/compact/toolchain-0.30.0',
},
  {
    version: '0.28.0',
    compactVersion: '0.20.0',
    status: 'UNSUPPORTED',
    date: '28 January 2026',
    summary: 'Summary of Release 0.28.0',
    details: [
      'new standard library APIs for unshielded tokens',
      'structural ("transparent") and nominal ("opaque") type aliases',
      'selective module import and renaming',
      'meaning of `Uint` ranges has changed',
      'maximum representable unsigned integer is smaller',
      'compiler-enforced bounds on various sizes',
      '`CurvePoint` is renamed to `NativePoint`',
      'now uses ECMAScript modules (ESM) instead Common JS (CJS) modules',
    ],
    artifacts: [],
    link: '/relnotes/compact/compact-0-20-28-0',
  },
  {
    version: '0.26.0',
    compactVersion: '0.18.0',
    status: 'UNSUPPORTED',
    date: '08 October 2025',
    summary: 'Summary of Release 0.26.0',
    details: [
      'Compact compiler renamed from Compact to Minokawa version 0.26.0 and language version 0.18.0.',
      'Compact compiler moved to LFDT for open source governance.',
      'Compact compiler adds Bytes values that are indexable and iterable like vectors.',
      'Compact compiler supports hexadecimal octal and binary numeric literals and spread in tuples and bytes.'
      
    ],
    artifacts: [
      { name: 'Compiler Linux', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_v0.26.0/compactc_v0.26.0_x86_64-unknown-linux-musl.zip' },
      { name: 'Compiler macOS Intel', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_v0.26.0/compactc_v0.26.0_x86_64-darwin.zip'  },
      { name: 'Compiler macOS ARM', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_v0.26.0/compactc_v0.26.0_aarch64-darwin.zip' }
    ],
    link: '/relnotes/compact/minokawa-0-18-26-0',
  },
  {
    version: '0.25.0',
    compactVersion: '0.17.0',
    status: 'UNSUPPORTED',
    date: '13 August 2025',
    summary: 'Summary of Release 0.25.0',
    details: [
      'Compact now supports casts between `Bytes` and `Vector` types.',
      '`const` declaration statements now allow multiple constants.',
      'The standard library gives access to block time.',
      'The Compact compiler now allows contract filenames to have spaces in them.',
      'The compiler prints a message when proof key generation fails.',
      'The compiler prints a parse error when facing Unicode numeric characters other than 0-9.'

    ],
    artifacts: [
      { name: 'Compiler Linux', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_v0.25.0/compactc_v0.25.0_x86_64-unknown-linux-musl.zip' },
      { name: 'Compiler macOS Intel', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_v0.25.0/compactc_v0.25.0_x86_64-darwin.zip'  },
      { name: 'Compiler macOS ARM', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_v0.25.0/compactc_v0.25.0_aarch64-darwin.zip' }
    ],
    link: '/relnotes/compact/compact-0-17-25-0',
  },
  {
    version: '0.24.0',
    compactVersion: '0.16.0',
    status: 'UNSUPPORTED',
    date: '11 June 2025',
    summary: 'Summary of Release 0.24.0',
    details: [
      'We have changed the spelling of very many of the standard library names.',
      'Exported circuit and constructor arguments are required to be `disclose`d.',
      'Ledger read and removal operations can now require values to be `disclose`d.',
      'Branch condition expressions are sometimes required to be `disclose`d.',
      '`assert` is now a function-like expression operator.',
      'The `=`, `+=`, and `-=` operators are now expressions.',
      'Trailing commas are now allowed at the end of argument lists.',
      'Fix for a failure to mint tokens.',
      'We have stopped changing the spelling of exported ledger fields.',
      'We no longer allow multiple exported circuits whose names differ only in casing.',
      'We have removed the `std.compact` file.'
    ],
    artifacts: [
      { name: 'Compiler Linux', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.24.0/compactc_v0.24.0_x86_64-unknown-linux-musl.zip' },
      { name: 'Compiler macOS Intel', url:  'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.24.0/compactc_v0.24.0_x86_64-apple-darwin.zip'  },
      { name: 'Compiler macOS ARM', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.24.0/compactc_v0.24.0_aarch64-darwin.zip' }
    ],
    link: '/relnotes/compact/compact-0-16-24-0',
  },
  {
    version: '0.23.0',
    compactVersion: '0.15.0',
    status: 'UNSUPPORTED',
    date: '25 April 2025',
    summary: 'Summary of Release 0.23.0',
    details: ['The maximum `Field` value has changed.', 'Trailing commas and semicolons are now allowed in more places.', 'Fix for incorrect `Field` arithmetic overflow and underflow.', 'Fix for a crash due to incorrect common subexpression elimination.', 'Fix for a crash when trying to cast to a ledger ADT type.', 'Fix for crashes involving large integer literals.'],
    artifacts: [
        { name: 'Compiler Linux', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.23.0/compactc_v0.23.0_x86_64-unknown-linux-musl.zip'},
        { name: 'Compiler macOS', url:  'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.23.0/compactc_v0.23.0_aarch64-darwin.zip'  },
    ],
    link: '/relnotes/compact/compact-0-15-23-0',
  },
  {
    version: '0.22.0',
    compactVersion: '0.14.0',
    status: 'UNSUPPORTED',
    date: '12 March 2025',
    summary: 'Summary of Release 0.22.0',
    details: ['Fix for an issue in ZK proofs for `Uint` circuit parameters.', 'Fix for an issue preventing coin insertion into ledger ADTs.', 'Fix for a crash when compiling `insert_index_default` for `MerkleTree`.', 'Fix for a crash when compiling `insert_default` for some `Map`s.', 'Fix for a crash when type checking incorrect programs.', 'Fix for a rare crash when reading the input file.'],
    artifacts: [
        { name: 'Compiler Linux', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.22.0/compactc_v0.22.0_x86_64-unknown-linux-musl.zip'},
        { name: 'Compiler macOS', url:  'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.22.0/compactc_v0.22.0_x86_64-apple-darwin.zip'  },
    ],
    link: '/relnotes/compact/compact-0-14-22-0',
  },
  {
    version: '0.21.0',
    compactVersion: '0.14.0',
    status: 'UNSUPPORTED',
    date: '23 January 2025',
    summary: 'Summary of Release 0.21.0',
    details: ['Witness return values may need to be “disclosed”.', 'Square brackets construct TypeScript-compatible tuples.', 'You can use TypeScript-compatible destructuring.', 'The `Void` type is removed.', 'The syntax of `for` loops is aligned with TypeScript.', 'The `Cell` ledger ADT is now implicit.', 'Ledger ADT names are now part of the standard library.', 'Exported circuits are allowed to have the same name as witnesses.', 'We have improved syntax error messages.'],
    artifacts: [
      { name: 'Compiler Linux', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.21.0/compactc-linux.zip' },
      { name: 'Compiler macOS', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.21.0/compactc-macos.zip' },
    ],
    link: '/relnotes/compact/compact-0-14-0',
  },
  {
    version: '0.20.0',
    compactVersion: '0.13.0',
    status: 'UNSUPPORTED',
    date: '27 November 2024',
    summary: 'Summary of Release 0.20.0',
    details: ['Include search order has changed.', 'Modules can be imported from files.', 'The standard library is now a builtin module.', 'New structure creation syntax.', 'Spread syntax in structure creation.', 'The `new` keyword is removed.', 'Arrow circuit syntax for `map` and `fold`.', 'Anonymous circuit syntax is removed.', 'Sequence (“comma”) expressions allowed outside parentheses.', 'Improvements to error reporting.', 'The order of exported circuits is the same in TypeScript as in Compact.', 'The `install.sh` script is removed.', 'Bug fixes.'],
    artifacts: [
      { name: 'Compiler Linux', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.20.0/compactc-linux.zip' },
      { name: 'Compiler macOS', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.20.0/compactc-macos.zip' },
    ],
    link: '/relnotes/compact/compact-0-13-0',
  },
  {
    version: '0.19.0',
    compactVersion: '0.11.0',
    status: 'UNSUPPORTED',
    date: '18 October 2024',
    summary: 'Summary of Release 0.19.0',
    details: ['Generics now use angle brackets.', 'Size parameters in generics are prefixed with `#`.', '`Unsigned Integer` is changed to `Uint`.', 'Bounded unsigned integers have new syntax.', '`null()` for default values is now `default<>`.', '`map` and `fold expressions have different syntax.'],
    artifacts: [
      { name: 'Compiler Linux', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.19.0/compactc-linux.zip' },
      { name: 'Compiler macOS', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.19.0/compactc-macos.zip' },
    ],
    link: '/relnotes/compact/compact-0-11-0',
  },
  {
    version: '0.18.2',
    compactVersion: '0.10.1',
    status: 'UNSUPPORTED',
    date: '26 September 2024',
    summary: 'Summary of Release 0.18.2',
    artifacts: [
      { name: 'Compiler Linux', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.18.2/compactc-linux.zip' },
      { name: 'Compiler macOS', url: 'https://d3fazakqrumx6p.cloudfront.net/artifacts/compiler/compactc_0.18.2/compactc-macos.zip' },
    ],
    details: ['There is a new public ledger declaration syntax.', 'The `ledger` keyword is no longer used for ledger field access.', 'Ledger kernel operations are available on kernel.', 'Ledger-field update shortcuts are now statements.', '`Unsigned Integer` sizes can now be generic.', 'There is better static typing of subtraction.', 'There is new precedence for the relational operators.', 'Generics can no longer be parameterized over generics.', 'The identifier contract is now a reserved word.', 'The `run-compactc.sh` shell script is renamed to `compactc`.'],
    link: '/relnotes/compact/compact-0-10-1',
  },
];

releases.forEach((release, index) => {
  release.id = index + 1;
});

// Sort versions (latest first)
const sortedVersions = releases
  .map(release => release.version)
  .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

const versions = ['All', ...sortedVersions];

// Extract unique statuses and keep "All" at the top
const sortedStatuses = ['All', ...new Set(releases.map(release => release.status))];

// Set latest version as default if releases exist
const latestVersion = sortedVersions.length > 0 ? sortedVersions[0] : 'All';

// Helper to determine version prefix from pathname
function getVersionPrefix(pathname) {
  const versionMatch = pathname.match(/^\/(next|\d+\.\d+\.\d+)(\/|$)/);
  if (versionMatch) {
    return versionMatch[1];
  }
  return 'current';
}

const DynamicListWithDropdownFilters = () => {
  const location = useLocation();
  const docsVersion = getVersionPrefix(location.pathname);
  
  // Determine version prefix for links
  const versionPrefix = docsVersion && docsVersion !== 'current' ? `/${docsVersion}` : '';
  
  // Add version prefix to all release links
  const versionedReleases = releases.map(release => ({
    ...release,
    link: `${versionPrefix}${release.link}`
  }));

  const [selectedVersion, setSelectedVersion] = useState(latestVersion);
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredReleases = versionedReleases.filter(
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

          {/* Compactc version */}
          <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.3rem' }}>
            Compact language {release.compactVersion}
          </h4>

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
