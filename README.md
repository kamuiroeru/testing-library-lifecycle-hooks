# Testing Library Lifecycle Hooks

![Github Actions Status Badge](https://github.com/kamuiroeru/testing-library-lifecycle-hooks/actions/workflows/run-all-scripts.yml/badge.svg)

A repository for verifying and demonstrating the execution order of lifecycle hooks in JavaScript and TypeScript testing frameworks.

## Overview

This project provides comprehensive examples and verification tests for understanding how lifecycle hooks (such as `beforeAll`, `beforeEach`, `afterEach`, `afterAll`) execute in popular JavaScript/TypeScript testing frameworks including:

- [Mocha](https://mochajs.org/) - [![Mocha Tests](https://example.com/mocha-badge)](https://example.com/mocha-actions)
- [Jest](https://jestjs.io/) - [![Jest Tests](https://example.com/jest-badge)](https://example.com/jest-actions)
- [Vitest](https://vitest.dev/) - [![Vitest Tests](https://example.com/vitest-badge)](https://example.com/vitest-actions)
- [Bun test](https://bun.sh/docs/cli/test) - [![Bun Tests](https://example.com/bun-badge)](https://example.com/bun-actions)

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
