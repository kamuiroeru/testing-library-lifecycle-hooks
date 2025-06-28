# Testing Library Lifecycle Hooks

[![Github Actions Status Badge](https://github.com/kamuiroeru/testing-library-lifecycle-hooks/actions/workflows/run-all-scripts.yml/badge.svg)](https://github.com/kamuiroeru/testing-library-lifecycle-hooks/actions/workflows/run-all-scripts.yml)

A repository for verifying and demonstrating the execution order of lifecycle hooks in JavaScript and TypeScript testing frameworks.

## Overview

This project provides comprehensive examples and verification tests for understanding how lifecycle hooks (such as `beforeAll`, `beforeEach`, `afterEach`, `afterAll`) execute in popular JavaScript/TypeScript testing frameworks.

### Supported Testing Frameworks

| Icon | Name | Version | Notes |
|------|------|---------|-------|
| <img src="https://mochajs.org/images/mocha-logo.svg" alt="mocha logo" style="height: 1rem;" /> | [Mocha](https://mochajs.org/) | - | Classic JavaScript test framework |
| 🃏 | [Jest](https://jestjs.io/) | - | Popular React testing framework |
| ⚡ | [Vitest](https://vitest.dev/) | - | Fast Vite-native test runner |
| 🍞 | [Bun test](https://bun.sh/docs/cli/test) | - | Built-in Bun test runner |

## Purpose

Understanding the precise execution order of lifecycle hooks is crucial for:
- Writing predictable and maintainable tests
- Proper test setup and teardown
- Debugging test issues
- Optimizing test performance

## Repository Structure

```
lifecycleHook/
├── base.test.js       # Jest, Vitest, Bun lifecycle hook examples
└── mochaChai.test.js  # Mocha lifecycle hook examples
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request with examples for additional testing frameworks or more complex lifecycle hook scenarios.
