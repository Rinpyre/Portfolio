# Copilot Guidelines for Adrian's Portfolio

## Commit Message Rules (ALWAYS FOLLOW)

1. Read the code changes carefully
2. Determine the TYPE of change
3. Identify the SCOPE if applicable
4. Write clear, concise description

### Format

`<type>(<scope>): <subject>`

### Types (Must Use)

- `feat:` - New user-visible feature or behavior (adds something the user can see/use)
- `fix:` - Bug fix
- `perf:` - Performance optimization
- `refactor:` - Code restructure with NO new user-visible behavior (moving code, extracting components, renaming, reorganizing)
- `style:` - Formatting/styling (whitespace, semicolons, CSS tweaks)
- `chore:` - Tooling, config, build setup, dependencies, path aliases, CI — anything that supports the project but isn't user-facing
- `docs:` - Documentation
- `test:` - Tests

### feat vs refactor vs chore — Quick Reference

| Change                                      | Type       |
| ------------------------------------------- | ---------- |
| Add new page / component / API endpoint     | `feat`     |
| Extract existing code into a component/util | `refactor` |
| Move files to a different folder            | `refactor` |
| Rename a variable/function for clarity      | `refactor` |
| Add vite alias, tsconfig path, eslint rule  | `chore`    |
| Add/remove/upgrade a dependency             | `chore`    |
| Update build config (vite.config, webpack)  | `chore`    |
| Add CV PDF or static asset to /public       | `chore`    |

### Scope (Optional but Recommended)

Use component/area name in parentheses. Examples:

- `feat(UserAuth):` - User authentication component
- `fix(PaymentAPI):` - Payment endpoint
- `perf(SearchService):` - Search functionality optimization
- `chore(docker):` - Docker / containerization config
- `chore(package.json):` - Dependencies

### Subject Line Guidelines

- ✅ Brief summary of changes
- ✅ The changes should be presented as featured focused (human said) not component / code focused
- ✅ Use imperative mood
- ✅ No period at end
- ✅ Max 50 chars
- ✅ If multiple or complex changes, combine all in one summary and detail in body / description
- ❌ No duplication of scope name in the summery if already in scope

### Description / Body Rules

- ✅ Explain the "why" and "what", not the "how"
- ✅ Imperative mood: "add" not "added"
- ✅ No period at end
- ✅ Keep to one line if possible
- ✅ Use bullet points for multiple changes
- ✅ Reference issues/PRs if relevant
- ❌ No code snippets
- ❌ No vague messages like "Update stuff"

## Pull Request Standards

### Title Format

- Use conventional commit format: `type(scope): brief description`
- Types: feat, fix, perf, refactor, style, chore, docs, test
- Scope: Specific component, feature, or area (not folder name)
- Examples:
  - ❌ feat(components): Update stuff
  - ✅ feat(UserAuth): Add multi-factor authentication
  - ✅ fix(PaymentAPI): Handle missing payment method errors correctly

### Description Structure

Use the following format for comprehensive PRs:

```
## Overview
[High-level summary of the PR and its purpose]

## Changes

### [Category 1 - e.g., New Features, Bug Fixes, etc.]
- **[Feature/Component Name]**: [Brief description with key details]
  - [Sub-detail]
  - [Sub-detail]

### [Category 2 - e.g., Architecture, Refactoring, etc.]
- [Change 1]
- [Change 2]

## Notes
- [Important caveats, disabled features, TODOs]
- [What was tested]
- [Any concerns or follow-ups]

## Checklist
- [x] [Requirement met]
- [ ] [Requirement for follow-up PR]
```

### Description Guidelines

- **Overview**: 1-2 sentences explaining purpose and scope
- **Changes**: Organize by category (New Features, Architecture, Integration, etc.) not by file
- **Detail level**: Include key implementation details and design decisions
- **Format**: Use bold headers, bullet points, and sub-details for readability
- **Notes**: Include disabled features, TODOs, testing done, concerns
- **Checklist**: Optional but recommended for complex PRs

Do NOT include:

- File counts or line number stats (GitHub shows this)
- Code snippets or diffs (PR already shows these)
- Redundant commit messages (PR title should summarize)

### Scope Guidelines

- Scope should identify the **specific component or feature**, not the folder
- If multiple components/features are changed, use the main one as scope and detail others in description
- Examples: `UserAuth`, `PaymentAPI`, `NotificationService`, `AuthMiddleware`, `docker`, `config`
- Not: `components`, `utils`, `routes` (too generic)

### Reviewer & Assignment

- Assign to `Rinpyre` for notification
- Request review from team member(s)
- Note: Author approval does not count toward merge requirements
  > **Important:** As of now, this is a solo project, so, all PRs will be assigned to `Rinpyre` and reviewed by `Rinpyre`. In the future, when more contributors join, we will update this guideline to reflect the new review process.

### PR Size & Scope

- One feature = one PR (keep related changes together)
- Aim for <500 lines changed for easier review
- If feature is massive, consider breaking into sequential PRs

### GitHub CLI Tips for PR Body Formatting

When using `gh pr create` or `gh pr edit` with markdown content containing backticks:

- ❌ **DO NOT** escape backticks with `\`` in the `--body` flag - the CLI will remove or mangle them
- ❌ **DO NOT** use `--body` flag for content with backticks - shell escaping causes issues
- ✅ **DO** use `--body-file` to pass PR body from a temporary markdown file instead
  - Create temp file with markdown content using `Out-File` or similar
  - Pass to `gh pr edit/create` with `--body-file pr_body.md`
  - Delete temp file after command completes
  - This preserves backticks and all markdown formatting perfectly

Example:

```powershell
@'
## Overview
Uses `getAppDataPath()` function for paths
'@ | Out-File -FilePath pr_body.md -Encoding UTF8
gh pr edit 2 --body-file pr_body.md
rm pr_body.md
```
