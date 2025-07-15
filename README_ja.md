# Testing Library Lifecycle Hooks

[![Github Actions Status Badge](https://github.com/kamuiroeru/testing-library-lifecycle-hooks/actions/workflows/run-all-scripts.yml/badge.svg)](https://github.com/kamuiroeru/testing-library-lifecycle-hooks/actions/workflows/run-all-scripts.yml)

[English version](/README.md)

JavaScript および TypeScript テストフレームワークにおけるライフサイクルフックの実行順序を検証・実演するためのリポジトリです。

## 概要

このプロジェクトは、人気のあるJavaScript/TypeScriptテストフレームワークにおけるライフサイクルフック（`beforeAll`、`beforeEach`、`afterEach`、`afterAll`など）の実行順序を理解するための包括的な例と検証テストを提供します。

### サポートしているテストフレームワーク

| アイコン | 名前 | バージョン | 備考 |
|------|------|---------|-------|
| <img src="https://mochajs.org/images/mocha-logo.svg" alt="mocha logo" style="height: 1rem;" /> | [Mocha](https://mochajs.org/) | 11.7.1 | クラシックなJavaScriptテストフレームワーク |
| <img src="https://archive.jestjs.io/img/jest.svg" alt="mocha logo" style="height: 1rem;" /> | [Jest](https://jestjs.io/) | 30.0.2 | 人気のReactテストフレームワーク |
| <img src="https://vitest.dev/logo.svg" alt="mocha logo" style="height: 1rem;" /> | [Vitest](https://vitest.dev/) | 3.2.4 | 高速なViteネイティブテストランナー |
| <img src="https://bun.sh/logo.svg" alt="mocha logo" style="height: 1rem;" /> | [Bun test](https://bun.sh/docs/cli/test) | 1.2.17 | Bun組み込みテストランナー |

## 目的

ライフサイクルフックの正確な実行順序を理解することは以下のために重要です：
- 予測可能で保守しやすいテストの作成
- 適切なテストのセットアップとクリーンアップ
- テストの問題のデバッグ
- テストパフォーマンスの最適化

## 調査結果
- [RESULT_ja.md](/RESULT_ja.md)

## リポジトリ構造

```
lifecycleHook/
├── base.test.js       # Jest、Vitest、Bunライフサイクルフックの例
└── mochaChai.test.js  # Mochaライフサイクルフックの例
```

## 貢献

貢献を歓迎します！追加のテストフレームワークやより複雑なライフサイクルフックシナリオの例をPull Requestでお気軽に提出してください。