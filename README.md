# Project Setup Guide

Welcome to the **CRM** Project! This guide will walk you through the steps to set up and contribute to the project. Make sure to read the instructions carefully and follow the **Contributing Guidelines**.

## Setup Instructions

### 1. **Clone the Repository**

- **Clone the entire repository** (with all branches):  
   If you want to clone the entire repository, including all branches, use the following command:

  ```bash
  git clone https://github.com/jkcsoftwaresllp/crm-client.git
  cd crm-client
  ```

  This will clone the whole repository, and you can switch between branches as needed.

- **Clone only the `development` branch**:  
   If you only want the `development` branch, use this command:

  ```bash
  git clone --single-branch --branch development https://github.com/jkcsoftwaresllp/crm-client.git
  ```

- **Clone specific branches (e.g., `development`, `feature/xyz`, `hotfix/abc`)**:  
   If you want to clone multiple specific branches, first clone the `development` branch and then fetch additional branches:
  ```bash
  git clone --single-branch --branch development https://github.com/jkcsoftwaresllp/crm-client.git
  cd crm-client
  git fetch origin feature/xyz:feature/xyz
  git fetch origin hotfix/abc:hotfix/abc
  ```

### 2. **Install Dependencies**

Once you have cloned the repository, navigate to the project folder and install the required dependencies using npm:

```bash
npm install
```

### 3. **Create Your Branch**

Switch your local working branch to a new branch based on the task you are working on.  
 Use the branch naming conventions outlined in the [Contributing Guide](./CONTRIBUTING.md). Example:

```bash
git checkout -b feat/yourname-feature-description
```

### 4. **Commit Your Changes**

Make your changes and commit them using a properly formatted commit message:

```bash
git add .
git commit -m "feat: short and meaningful description of your changes"
```

### 5. **Push to Remote Branch**

Push your local branch to the remote repository:

```bash
git push origin feat/yourname-feature-description
```

### 6. **Submit a Pull Request (PR)**

Generate a PR from your branch to the `development` branch. Use the predefined PR template and ensure you fill in all required sections. Make necessary changes according to review feedback.

---

## Important Notes

- **Never push directly to the `main` or `development` branches.**  
  Always create and work on your own feature branch.

- **Never create a PR for the `main` branch.**  
  All PRs should target the `development` branch.

- Follow the commit message structure outlined in the [Contributing Guide](/CONTRIBUTING.md).

- Ensure you test your changes thoroughly before submitting a PR.

---

## Summary of Steps

For your convenience, here is a quick summary of the setup process:

1. Clone the repository (`main` or `development` branch, or specific branches).
2. Run `npm install` to install dependencies.
3. Create a new branch using the appropriate naming convention.
4. Commit your changes with a properly formatted message.
5. Push your branch to the remote repository.
6. Submit a PR to the `development` branch using the PR template.

At the bottom of this guide, you’ll always find a summarized version of the steps. Refer to this section for quick reference.

## Contributing Guide Summary

### Branch Types

Your branch must fall under one of these categories:

- **feat**: For new features or enhancements.  
  Example: `feat/danishan-login-ui`

- **fix**: For bug fixes.  
  Example: `fix/john-broken-api`

- **refactor**: For code structure improvements without functionality changes.  
  Example: `refactor/sara-optimized-db`

- **hotfix**: For critical fixes in production.  
  Example: `hotfix/rishabh-authentication-bug`

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

For full details, including detailed guidelines and examples, refer to the complete [Contributing Guide](./CONTRIBUTING.md).

---

For more details, refer to the full [Contributing Guide](./CONTRIBUTING.md). If you encounter any issues, please reach out to the team. Happy coding! 🎉

---

This updated README includes clear instructions for cloning both the entire repository and specific branches, and it provides a concise summary of your Contributing Guide. Let me know if you need any further adjustments!
