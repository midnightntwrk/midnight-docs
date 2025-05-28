import React, { useState } from 'react';
import Link from '@docusaurus/Link';

const releases = [
  {
    id: 1,
    version: '0.23.0',
    compactVersion: '0.15.0',
    status: 'TESTNET',
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
    id: 2,
    version: '0.22.0',
    compactVersion: '0.14.0',
    status: 'TESTNET',
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
    id: 3,
    version: '0.21.0',
    compactVersion: '0.14.0',
    status: 'TESTNET',
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
    id: 4,
    version: '0.20.0',
    compactVersion: '0.13.0',
    status: 'TESTNET',
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
    id: 5,
    version: '0.19.0',
    compactVersion: '0.11.0',
    status: 'TESTNET',
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
    id: 6,
    version: '0.18.2',
    compactVersion: '0.10.1',
    status: 'TESTNET',
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

// Sort versions (latest first)
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
