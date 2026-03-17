name: Bug Report
description: Report a bug to help improve the project
title: "[BUG] "
labels:

- bug

body:

- type: markdown
  attributes:
  value: |
  Thank you for reporting a bug. Please provide as much detail as possible.

- type: textarea
  id: description
  attributes:
  label: Bug Description
  description: A clear and concise description of the bug.
  placeholder: Describe what happened.
  validations:
  required: true

- type: textarea
  id: steps
  attributes:
  label: Steps to Reproduce
  description: Exact steps to reproduce the issue.
  placeholder: | 1. Go to ... 2. Click ... 3. See error ...
  validations:
  required: true

- type: textarea
  id: expected
  attributes:
  label: Expected Behavior
  description: What should have happened?

- type: textarea
  id: actual
  attributes:
  label: Actual Behavior
  description: What actually happened?

- type: textarea
  id: screenshots
  attributes:
  label: Screenshots
  description: Add screenshots or GIFs if applicable.

- type: dropdown
  id: os
  attributes:
  label: Operating System
  options: - Windows - macOS - Linux - Other

- type: input
  id: node
  attributes:
  label: Node.js Version
  placeholder: e.g. v22.0.0

- type: input
  id: pnpm
  attributes:
  label: pnpm Version
  placeholder: e.g. 10.x

- type: textarea
  id: additional
  attributes:
  label: Additional Context
  description: Any other information that might help diagnose the problem.
