# Contributing to **JKC Softwares LLP** & its **Projects**

Thank you for your commitment to improving **JKC Softwares LLP**, its products! We value your efforts to enhance our internal projects. Please adhere to these guidelines to ensure effective collaboration within our team.

## Table of Contents

1. [Branch Naming Conventions & Branch Structure](#branch-naming-conventions)
2. [Commit Message Guidelines](#commit-message-guidelines)
3. [Pull Request Process](#pull-request-process)
4. [Modifying Documentation](#modifying-documentation)
5. [Code Review Process](#code-review-process)
6. [Additional Guidelines](#additional-guidelines)

## Branch Naming Conventions

To maintain a clear and organized Git workflow, follow this naming format for branches:

```plaintext
<type>/<username>-<short-description>
```

## Branch Structure

To ensure a secure and organized repository, we maintain two protected branches:

1. **main**:

   - Always production-ready.
   - Only final, fully-tested changes are merged into this branch.
   - **Only Admins and Team Leaders** can merge changes from the `development` branch to `main`.

2. **development**:
   - This is the active development branch where ongoing changes are merged and tested.
   - New features, fixes, and updates are first integrated and tested here.
   - **Allowed Team Members and Team Leaders** can approve Pull Requests (PRs) for merging into the `development` branch.
   - After final review and testing, changes from `development` are merged into `main`.

---

### Branch Types

Your branch must fall under one of these categories:

- **feat**: For new features or enhancements.  
  Example: `feat/danishan-login-ui`

- **fix**: For bug fixes.  
  Example: `fix/john-broken-api`

- **refactor**: For code structure improvements without functionality changes.  
  Example: `refactor/sara-optimized-db`

- **hotfix**: For critical fixes in production.  
  Example: `hotfix/admin-authentication-bug`

- **chore**: For maintenance tasks like dependency updates or build process changes.  
  Example: `chore/update-dependencies`

- **docs**: For updates to documentation only.  
  Example: `docs/add-contributing-guide`

- **test**: For adding or improving tests.  
  Example: `test/add-api-integration-tests`

- **experiment**: For trying out experimental features or approaches.  
  Example: `experiment/new-ui-design`

---

## Commit Message Guidelines

Write concise, meaningful commit messages using the following structure:

```plaintext
<type>: <short-description>
```

### Types of Commits:

- **feat**: Adding a new feature.  
  Example: `feat: add user authentication API`
- **fix**: Fixing a bug.  
  Example: `fix: resolve broken image rendering`
- **docs**: Documentation updates.  
  Example: `docs: update API usage instructions`
- **style**: Formatting, whitespace, or lint fixes.  
  Example: `style: fix indentation in login component`
- **refactor**: Code changes without altering functionality.  
  Example: `refactor: simplify user registration flow`
- **test**: Adding or updating tests.  
  Example: `test: add unit tests for payment gateway`
- **chore**: Routine tasks like dependency updates.  
  Example: `chore: upgrade React to 18.x`
- **experiment**: For trying out experimental features or approaches.  
  Example: `experiment: Buttom UI color change`

## Pull Request Process

1. **Work on a dedicated branch**: Create a branch from `development` for your task. Avoid working directly on `main` or `development`.
2. **Rebase before submitting**: Rebase your branch with the latest `development` branch to resolve conflicts.
3. **Submit a PR**:

   - We have a predefined template for submitting a PR or an issue. Please use it when creating your submission.
   - Target the `development` branch for all PRs.
   - Use a descriptive title and include a summary of changes.
   - Link any relevant issues (e.g., `Closes #123`).

4. **Review and Approvals**:

   - PRs to `development` require approval from **Allowed Team Members or Team Leaders**.
   - PRs to `main` require approval from **Admins or Team Leaders** only.

5. **Merging**:
   - Changes from `development` to `main` can only be merged by **Admins or Team Leaders** after final testing and review.

## Modifying Documentation

- Direct changes to `README.md` are **not allowed**.
- Propose changes by creating a `README.draft.md` or `docs/proposals/<username>_<description>.md` file in your branch.
- Documentation updates will be reviewed and incorporated into `README.md` after approval.

## Code Review Process

1. All PRs must be reviewed and approved by at least one team member.
2. Reviewers will check for:
   - Code quality and adherence to standards.
   - Proper testing for new or updated functionality.
   - Alignment with project goals and architecture.

## Additional Guidelines

1. **Respect the Repository Structure**:  
   Do not modify files outside your task scope without approval.

2. **Test Thoroughly**:  
   Ensure that your changes do not break existing functionality. Run all tests before submitting a PR.

3. **Add Relevant Files**:  
   When necessary, ensure that files like `README.draft.md`, `CHANGELOG.md`, or other supporting documentation are updated.

4. **License Compliance**:  
   By contributing, you agree that your code will be licensed under the project’s license.

5. **Feedback and Suggestions**:  
   If you have ideas for improvement, feel free to create an issue or start a discussion.

By following these guidelines, you help maintain the quality and clarity of **JKC SOFTWARES**, ensuring a smooth development process for everyone involved. Thank you for contributing!

---

**Happy Coding! 🎉**

---

This format is well-structured and follows best practices, making it easy for contributors to understand their responsibilities.
