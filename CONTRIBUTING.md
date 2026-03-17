# Contributing to Bangla Calendar

Thank you for your interest in contributing to **Bangla Calendar**!
This guide explains how to contribute, set up the project locally, and follow the development workflow.

---

## Code of Conduct

Please be respectful and inclusive in all interactions.
We expect all contributors to follow a friendly and professional attitude.

---

## Getting Started

### 1. Fork the repository

Fork the project on GitHub.

### 2. Clone your fork

```bash
git clone https://github.com/your-username/banglacalender.git
cd banglacalender
```

### 3. Create a feature branch

```bash
git checkout -b feat/your-feature-name
```

---

## Development Setup

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

### Run tests

```bash
pnpm test
```

---

## Code Quality

We maintain strict code quality standards.

| Task                    | Command          |
| ----------------------- | ---------------- |
| Lint code               | `pnpm lint`      |
| Auto fix lint issues    | `pnpm lint:fix`  |
| Format code             | `pnpm format`    |
| Type check              | `pnpm typecheck` |
| Run tests               | `pnpm test`      |
| Run full project checks | `pnpm check`     |

---

## Git Workflow

### Branch Naming Convention

| Prefix      | Purpose                  |
| ----------- | ------------------------ |
| `feat/`     | New feature              |
| `fix/`      | Bug fix                  |
| `docs/`     | Documentation            |
| `refactor/` | Code refactoring         |
| `perf/`     | Performance improvements |
| `test/`     | Tests                    |

Example:

```bash
feat/add-bangla-date-converter
fix/calendar-leap-year
```

---

## Commit Message Format

We follow **Conventional Commits**.

Format:

```
type(scope): short description
```

Example commits:

```
feat(calendar): add bangla date conversion
fix(ui): correct calendar layout on mobile
docs: update installation guide
```

Allowed commit types:

- feat
- fix
- docs
- style
- refactor
- perf
- test
- build
- ci
- chore

---

## Pre-commit Hooks

This project uses **Husky** and **lint-staged** to automatically run checks before commits.

Automated checks include:

- ESLint fixes
- Prettier formatting
- Commit message validation

You can run them manually:

```bash
pnpm lint:fix
pnpm format
```

---

## Pull Request Process

1. Run full checks before pushing:

```bash
pnpm check
```

2. Add or update tests if needed.

3. Create a Pull Request with:

- Clear title and description
- Linked issues (e.g. `Closes #12`)
- Screenshots for UI changes

4. Address review feedback quickly.

---

## Testing Guidelines

- Add tests for new features.
- Add regression tests for bug fixes.
- Run tests locally before pushing:

```bash
pnpm test
```

---

## Documentation

Please update documentation when needed.

Examples:

- Update `README.md` when adding features
- Add comments for complex logic
- Update TypeScript types if necessary

---

## Build Commands

```bash
# Development build
pnpm build:dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

---

## Reporting Issues

Before opening a new issue:

- Search existing issues first
- Provide a clear description
- Include steps to reproduce
- Provide environment details (Node version, OS, etc.)

---

## Questions

If you have questions, feel free to open an issue with the `question` label.

---

Thank you for contributing! 🎉
