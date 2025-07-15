# Testing Library Lifecycle Hooks

[![Github Actions Status Badge](https://github.com/kamuiroeru/testing-library-lifecycle-hooks/actions/workflows/run-all-scripts.yml/badge.svg)](https://github.com/kamuiroeru/testing-library-lifecycle-hooks/actions/workflows/run-all-scripts.yml)

[日本語版](/README_ja.md)

A repository for verifying and demonstrating the execution order of lifecycle hooks in JavaScript and TypeScript testing frameworks.

## Overview

This project provides comprehensive examples and verification tests for understanding how lifecycle hooks (such as `beforeAll`, `beforeEach`, `afterEach`, `afterAll`) execute in popular JavaScript/TypeScript testing frameworks.

### Supported Testing Frameworks

| Icon | Name | Version | Notes |
|------|------|---------|-------|
| <img src="https://mochajs.org/images/mocha-logo.svg" alt="mocha logo" style="height: 1rem;" /> | [Mocha](https://mochajs.org/) | 11.7.1 | Classic JavaScript test framework |
| <img src="https://archive.jestjs.io/img/jest.svg" alt="mocha logo" style="height: 1rem;" /> | [Jest](https://jestjs.io/) | 30.0.2 | Popular React testing framework |
| <img src="https://vitest.dev/logo.svg" alt="mocha logo" style="height: 1rem;" /> | [Vitest](https://vitest.dev/) | 3.2.4 | Fast Vite-native test runner |
| <img src="https://bun.sh/logo.svg" alt="mocha logo" style="height: 1rem;" /> | [Bun test](https://bun.sh/docs/cli/test) | 1.2.17 | Built-in Bun test runner |

## Purpose

Understanding the precise execution order of lifecycle hooks is crucial for:
- Writing predictable and maintainable tests
- Proper test setup and teardown
- Debugging test issues
- Optimizing test performance

## Result Summary
- [RESULT.md](/RESULT.md)

## Repository Structure

```
lifecycleHook/
├── base.test.js       # Jest, Vitest, Bun lifecycle hook examples
└── mochaChai.test.js  # Mocha lifecycle hook examples
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request with examples for additional testing frameworks or more complex lifecycle hook scenarios.
