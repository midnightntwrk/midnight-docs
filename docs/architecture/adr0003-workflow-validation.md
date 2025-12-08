# 3. Workflow Configuration Validation

**Date:** 2025-12-08  
**Status:** Accepted  

**Sources:**
- Related PRs: #446

## Context and Problem Statement

The production deployment workflow (`prod.yml`) only runs after code is merged to the main branch, not during pull request review. This means configuration errors in `prod.yml` are not detected until after merge, when they cause production deployment failures.

A recent incident demonstrated this problem: `prod.yml` was missing the "Enable Corepack (Pre-Setup)" step that was present in other workflows, and was using an outdated yarn version (4.10.3 instead of 4.12.0 specified in package.json). These issues were only discovered after merge to main when production deployment failed.

**Decision Drivers:**
* Prevent production deployment failures from configuration errors
* Catch workflow configuration issues during PR review (shift-left)
* Ensure consistency between workflow files
* Maintain fast feedback loops (< 2 minutes)
* No external dependencies or complexity

## Alternative Options

* **Option 1: Validation Workflow with Bash Script** - Create a GitHub Actions workflow that validates configuration using simple bash commands
* **Option 2: Action Validator Tool** - Use an external GitHub Action validation tool (e.g., action-validator)
* **Option 3: Full Smoke Test** - Execute the actual workflow steps with test configuration

## Decision Outcome

**Chosen option:** "Option 1: Validation Workflow with Bash Script", because it provides fast feedback (< 30 seconds), requires no external dependencies, is easy to maintain, and directly addresses the specific configuration issues we encountered.

The validation workflow:
- Triggers on PRs that modify `.github/workflows/**` or `package.json`
- Validates `prod.yml` has "Enable Corepack (Pre-Setup)" step before "Setup Node.js"
- Validates all workflows use yarn version matching `package.json` packageManager field
- Provides clear, actionable error messages
- Completes validation in < 30 seconds

### Consequences

**Positive:**
* ✅ Catches `prod.yml` configuration errors before merge to main
* ✅ Fast feedback during PR review (< 30 seconds vs 5-10 minutes post-merge)
* ✅ Prevents production deployment failures from configuration drift
* ✅ No external dependencies to maintain
* ✅ Clear, actionable error messages guide developers to fix issues
* ✅ Only runs when relevant files change (not on every PR)

**Negative:**
* ⚠️ Text-based validation using grep (not semantic YAML parsing)
* ⚠️ Could have false negatives if step names change
* ⚠️ Doesn't validate all possible configuration issues
* ⚠️ Requires maintenance if validation rules change

### Confirmation

- ✅ **Tests:** 3/3 local validation tests passing
  - prod.yml pre-setup corepack detection: ✅
  - package.json version extraction: ✅  
  - Workflow version validation: ✅
- ✅ **Build:** Workflow file created and committed
- ✅ **Performance:** Expected runtime < 30 seconds

## Future Considerations

This validation could be extended to check:
- Other workflow configuration patterns
- Semantic YAML parsing for syntax errors
- Consistency of other workflow steps (not just corepack/yarn)
- Node.js version consistency
- Runner labels and types

However, we should resist adding checks proactively - only add validation when we encounter actual issues that need prevention.

## Related Decisions

- This complements the fix in PR #445 (fix/ci-yarn-version-mismatch) which corrected the actual configuration issues
- Follows the "test-first" principle from knowledge base research (The Clean Coder)
- Implements "pre-merge checks" pattern from continuous integration best practices

