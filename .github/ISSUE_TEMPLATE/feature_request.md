name: Feature Request
description: Suggest a new feature or improvement
title: "[FEATURE] "
labels:

- enhancement

body:

- type: markdown
  attributes:
  value: |
  Thank you for suggesting a feature! Please fill out the details below.

- type: textarea
  id: description
  attributes:
  label: Feature Description
  description: Clearly describe the feature you would like to see.
  placeholder: Explain the feature in detail.
  validations:
  required: true

- type: textarea
  id: problem
  attributes:
  label: Problem Statement
  description: What problem does this feature solve?
  placeholder: Describe the problem or limitation you encountered.
  validations:
  required: true

- type: textarea
  id: solution
  attributes:
  label: Proposed Solution
  description: Describe how you think this feature should work.
  placeholder: Explain your proposed solution.

- type: textarea
  id: alternatives
  attributes:
  label: Alternative Solutions
  description: Describe any alternative solutions or features you have considered.

- type: textarea
  id: examples
  attributes:
  label: Examples or Mockups
  description: Add examples, links, or mockups if available.

- type: input
  id: related
  attributes:
  label: Related Issues
  description: Link related issues if applicable.
  placeholder: e.g. #123
