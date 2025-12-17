# Release notes template

### Version/Release Name

**Version:** &lt;version number&gt;  
**Date:** &lt;YYYY-MM-DD&gt;  
**Environment:** &lt;preview | testnet | mainnet-when-ready&gt;

### High-level summary 

&lt;1–3 sentences summarizing the most important changes in this release&gt;  
Example: “This release updates the Compact compiler to 0.27, introduces ledger v6 on Preview, and adds new ZK proof APIs. Breaking changes affect all Preview developers.”

### Audience

This release note is critical for developers who:

- &lt;e.g., run a node on Preview&gt;
- &lt;use Compact compiler or SDK version X&gt;
- &lt;maintain infrastructure for Testnet environments&gt;

### What changed (Summary of updates)

&lt;high-level list of new features, improvements, fixes&gt;

Examples:

- Updated Compact compiler to &lt;version&gt;.
- Added ledger feature &lt;feature&gt;.
- Improved SDK method &lt;method&gt;.
- Fixed &lt;bug&gt; affecting &lt;scenario&gt;.

### New features

List all newly introduced functionality.

**Feature Name:** &lt;name&gt;

**Description:** &lt;what it does + **why it matters** + where developers interact with it + motivation behind updates, all written in plain developer-focused language&gt;

### New features requiring configuration updates

(Not necessarily breaking, but requires setup changes.)

**Feature Name:** &lt;name&gt;

**Required Updates:**

- &lt;config flag or setting&gt;
- &lt;env variable&gt;
- &lt;SDK initialization step&gt;

**Impact:** &lt;why this configuration is needed + when it must be applied&gt;

### Improvements

Non-breaking enhancements.

**Improvement:** &lt;name&gt;

**Description:** &lt;explain the enhancement, UX lift, performance gain, etc.&gt;

Example:

- “Enhanced proof generation performance for large circuits.”
- “Redesigned CLI prompts for clarity.”

### Deprecations

List APIs, functions, flags, or semantics being phased out.

For each item, include:

- what is deprecated
- when the deprecation begins
- when it will be removed
- what developers should use instead
- migration notes

**Deprecated Item:** &lt;API/function/feature&gt;

**Starts:** &lt;date/version&gt;  
**Full Removal:** &lt;planned removal date/version&gt;  
**Replacement:** &lt;new API/method&gt;  
**Migration Steps:** &lt;explicit actions developers must take&gt;

### Breaking changes or required actions for developers

**Breaking Change:** &lt;name&gt;

**What changed:** &lt;clear description&gt;  
**What breaks:** &lt;exact scenarios&gt;  
**Required actions:**

- &lt;step 1&gt;
- &lt;step 2&gt;
- &lt;environment/version pinning&gt;

 **Code Example:**

&lt;insert migration example here&gt;

### Known Issues

### **Issue:** &lt;name&gt;

**Description:** &lt;what’s affected + conditions&gt;  
**Workaround (if any):** &lt;instructions&gt;

### Links and References

- PRs: &lt;link&gt;
- Engineering docs: &lt;link&gt;
- Migration guides: &lt;link&gt;
- SDK docs: &lt;link&gt;
- Known issues board: &lt;link&gt;

### Fixed defect list

The following defects were fixed in &lt;release&gt;.

<table><tbody><tr><td colspan="1" rowspan="1"><p><strong>Defect number</strong></p></td><td colspan="1" rowspan="1"><p><strong>Description</strong></p></td></tr><tr><td colspan="1" rowspan="1"><p>PR-XX</p></td><td colspan="1" rowspan="1"><p>The app crashes when you type ‘explode.’</p></td></tr><tr><td colspan="1" rowspan="1"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr></tbody></table>
