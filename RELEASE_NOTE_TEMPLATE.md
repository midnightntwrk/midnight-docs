# Release notes template

## Version/Release name

* **Version**: version number  
* **Date**: YYYY-MM-DD  
* **Environment**: Preview | PreProd | Mainnet (when ready)

## High-level summary 

1–3 sentences summarizing the most important changes in this release  
Example: “This release updates the Compact compiler to 0.27, introduces ledger v6 on Preview, and adds new ZK proof APIs. Breaking changes affect all Preview developers.”

## Audience

This release note is critical for developers who:

- For example, run a node on Preview.
- Use Compact compiler or SDK version X.
- Maintain infrastructure for Testnet environments.

## What changed

high-level list of new features, improvements, fixes

Examples:

- Updated Compact compiler to <version>.
- Added ledger feature <feature>.
- Improved SDK method <method>.
- Fixed <bug> affecting <scenario>.

## New features

List all newly introduced functionality.

### Feature name <name>

**Description**: what it does + **why it matters** + where developers interact with it + motivation behind updates, all written in plain developer-focused language

## New features requiring configuration updates

(Not necessarily breaking, but requires setup changes.)

### Feature name <name>

**Required updates**:

- <config flag or setting>
- <env variable>
- <SDK initialization step>

**Impact**: <why this configuration is needed + when it must be applied>

## Improvements

Non-breaking enhancements.

**Improvement**: <name>

**Description**: <explain the enhancement, UX lift, performance gain, and so on.>

Example:

- “Enhanced proof generation performance for large circuits.”
- “Redesigned CLI prompts for clarity.”

## Deprecations

List APIs, functions, flags, or semantics being phased out.

For each item, include:

- What is deprecated
- When the deprecation begins
- When it will be removed
- What developers should use instead
- Migration notes

**Deprecated item**: <API/function/feature>

**Starts**: <date/version>  
**Full removal**: <planned removal date/version>  
**Replacement**: <new API/method>  
**Migration steps**: <explicit actions developers must take>

## Breaking changes

Below is a list of breaking changes and required actions for developers.

### Breaking change <name>

**What changed**: <clear description>  
**What breaks**: <exact scenarios>  

**Required actions**:

- <step 1>
- <step 2>
- <environment/version pinning>

 **Code example**:

<insert migration example here>

## Known issues

The following issues are known at the time of release: 

### Issue name

**Description**: <what's affected + conditions>  
**Workaround (if any)**: <instructions>

## Links and references

- **PRs**: <link>
- **Engineering docs**: <link>
- **Migration guides**: <link>
- **SDK docs**: <link>
- **Known issues board**: <link>

## Fixed defect list

The following defects were fixed in <release>.

| **Defect number** | **Description**                          |
| ----------------- | ---------------------------------------- |
| PR-XX             | The app crashes when you type 'explode.' |
