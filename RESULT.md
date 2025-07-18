<!-- cspell:ignore texttt TLBE -->

# Test Framework Lifecycle Hooks Execution Order Comparison

## Test Structure

The following test structure is used across all frameworks:

- **$\texttt{\color{#4A90E2}Top-level}$**
  - beforeAll/before
  - beforeEach
  - afterEach
  - afterAll/after
  - **$\texttt{\color{#7CB342}Main describe block}$**
    - beforeAll/before
    - beforeEach
    - afterEach
    - afterAll/after
    - 🧪 $\texttt{\color{#7CB342}Main}$ Test 01
    - 🧪 $\texttt{\color{#7CB342}Main}$ Test 02
    - **$\texttt{\color{#E85D75}Nested describe block}$**
      - beforeAll/before
      - beforeEach
      - afterEach
      - afterAll/after
      - 🧪 $\texttt{\color{#E85D75}Nested}$ Test 01
      - 🧪 $\texttt{\color{#E85D75}Nested}$ Test 02

## Execution Order Table

| Order | Mocha | Jest | Vitest | Bun Test |
|---------|-------|--------|------|----------|
| 1 | $\texttt{\color{#4A90E2}top-level}$ before | $\texttt{\color{#4A90E2}top-level}$ beforeAll | $\texttt{\color{#4A90E2}top-level}$ beforeAll | $\texttt{\color{#4A90E2}top-level}$ beforeAll |
| 2 | $\texttt{\color{#7CB342}main}$ before | $\texttt{\color{#7CB342}main}$ beforeAll | $\texttt{\color{#7CB342}main}$ beforeAll | $\texttt{\color{#7CB342}main}$ beforeAll |
| 3 | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#E85D75}nested}$ beforeAll |
| 4 | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ beforeEach |
| 5 | 🧪 **$\texttt{\color{#7CB342}main}$ test 01** | 🧪 **$\texttt{\color{#7CB342}main}$ test 01** | 🧪 **$\texttt{\color{#7CB342}main}$ test 01** | $\texttt{\color{#7CB342}main}$ beforeEach |
| 6 | $\texttt{\color{#7CB342}main}$ afterEach | $\texttt{\color{#7CB342}main}$ afterEach | $\texttt{\color{#7CB342}main}$ afterEach | $\texttt{\color{#E85D75}nested}$ beforeEach |
| 7 | $\texttt{\color{#4A90E2}top-level}$ afterEach | $\texttt{\color{#4A90E2}top-level}$ afterEach | $\texttt{\color{#4A90E2}top-level}$ afterEach | 🧪 **$\texttt{\color{#E85D75}nested}$ test 01** |
| 8 | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#E85D75}nested}$ beforeAll | $\texttt{\color{#E85D75}nested}$ beforeAll | $\texttt{\color{#E85D75}nested}$ afterEach |
| 9 | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#7CB342}main}$ afterEach |
| 10 | 🧪 **$\texttt{\color{#7CB342}main}$ test 02** | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ afterEach |
| 11 | $\texttt{\color{#7CB342}main}$ afterEach | $\texttt{\color{#E85D75}nested}$ beforeEach | $\texttt{\color{#E85D75}nested}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ beforeEach |
| 12 | $\texttt{\color{#4A90E2}top-level}$ afterEach | 🧪 **$\texttt{\color{#E85D75}nested}$ test 01** | 🧪 **$\texttt{\color{#E85D75}nested}$ test 01** | $\texttt{\color{#7CB342}main}$ beforeEach |
| 13 | $\texttt{\color{#E85D75}nested}$ before | $\texttt{\color{#E85D75}nested}$ afterEach | $\texttt{\color{#E85D75}nested}$ afterEach | $\texttt{\color{#E85D75}nested}$ beforeEach |
| 14 | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#7CB342}main}$ afterEach | $\texttt{\color{#7CB342}main}$ afterEach | 🧪 **$\texttt{\color{#E85D75}nested}$ test 02** |
| 15 | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ afterEach | $\texttt{\color{#4A90E2}top-level}$ afterEach | $\texttt{\color{#E85D75}nested}$ afterEach |
| 16 | $\texttt{\color{#E85D75}nested}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#7CB342}main}$ afterEach |
| 17 | 🧪 **$\texttt{\color{#E85D75}nested}$ test 01** | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ afterEach |
| 18 | $\texttt{\color{#E85D75}nested}$ afterEach | $\texttt{\color{#E85D75}nested}$ beforeEach | $\texttt{\color{#E85D75}nested}$ beforeEach | $\texttt{\color{#E85D75}nested}$ afterAll |
| 19 | $\texttt{\color{#7CB342}main}$ afterEach | 🧪 **$\texttt{\color{#E85D75}nested}$ test 02** | 🧪 **$\texttt{\color{#E85D75}nested}$ test 02** | $\texttt{\color{#4A90E2}top-level}$ beforeEach |
| 20 | $\texttt{\color{#4A90E2}top-level}$ afterEach | $\texttt{\color{#E85D75}nested}$ afterEach | $\texttt{\color{#E85D75}nested}$ afterEach | $\texttt{\color{#7CB342}main}$ beforeEach |
| 21 | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#7CB342}main}$ afterEach | $\texttt{\color{#7CB342}main}$ afterEach | 🧪 **$\texttt{\color{#7CB342}main}$ test 01** |
| 22 | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ afterEach | $\texttt{\color{#4A90E2}top-level}$ afterEach | $\texttt{\color{#7CB342}main}$ afterEach |
| 23 | $\texttt{\color{#E85D75}nested}$ beforeEach | $\texttt{\color{#E85D75}nested}$ afterAll | $\texttt{\color{#E85D75}nested}$ afterAll | $\texttt{\color{#4A90E2}top-level}$ afterEach |
| 24 | 🧪 **$\texttt{\color{#E85D75}nested}$ test 02** | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ beforeEach | $\texttt{\color{#4A90E2}top-level}$ beforeEach |
| 25 | $\texttt{\color{#E85D75}nested}$ afterEach | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#7CB342}main}$ beforeEach | $\texttt{\color{#7CB342}main}$ beforeEach |
| 26 | $\texttt{\color{#7CB342}main}$ afterEach | 🧪 **$\texttt{\color{#7CB342}main}$ test 02** | 🧪 **$\texttt{\color{#7CB342}main}$ test 02** | 🧪 **$\texttt{\color{#7CB342}main}$ test 02** |
| 27 | $\texttt{\color{#4A90E2}top-level}$ afterEach | $\texttt{\color{#7CB342}main}$ afterEach | $\texttt{\color{#7CB342}main}$ afterEach | $\texttt{\color{#7CB342}main}$ afterEach |
| 28 | $\texttt{\color{#E85D75}nested}$ after | $\texttt{\color{#4A90E2}top-level}$ afterEach | $\texttt{\color{#4A90E2}top-level}$ afterEach | $\texttt{\color{#4A90E2}top-level}$ afterEach |
| 29 | $\texttt{\color{#7CB342}main}$ after | $\texttt{\color{#7CB342}main}$ afterAll | $\texttt{\color{#7CB342}main}$ afterAll | $\texttt{\color{#7CB342}main}$ afterAll |
| 30 | $\texttt{\color{#4A90E2}top-level}$ after | $\texttt{\color{#4A90E2}top-level}$ afterAll | $\texttt{\color{#4A90E2}top-level}$ afterAll | $\texttt{\color{#4A90E2}top-level}$ afterAll |

## Key Differences

### Common Behaviors
- All frameworks maintain the basic order: `beforeAll` → `beforeEach` → `test` → `afterEach` → `afterAll`
- In hierarchical structures, setup hooks execute from outer to inner scope, while cleanup hooks execute from inner to outer scope

### Differences

#### 1. **Mocha**
- Uses `before`/`after` hooks
- Test execution order: $\texttt{\color{#7CB342}main}$ tests → $\texttt{\color{#E85D75}nested}$ tests
  - Outer tests run first

#### 2. **Jest/Vitest**
- Uses `beforeAll`/`afterAll` hooks
- Test execution order: $\texttt{\color{#7CB342}main}$ test 01 → $\texttt{\color{#E85D75}nested}$ tests → $\texttt{\color{#7CB342}main}$ test 02
  - Tests execute in the order they are defined in the code

#### 3. **Bun Test**
- Uses `beforeAll`/`afterAll` hooks
- Test execution order: $\texttt{\color{#E85D75}nested}$ tests → $\texttt{\color{#7CB342}main}$ tests
  - Inner tests run first

### Notable Behaviors
- All frameworks execute hooks from outer to inner scope for `beforeEach` and inner to outer for `afterEach`
- `beforeAll`/`before` hooks run once per describe block before any tests
- `afterAll`/`after` hooks run once per describe block after all tests complete
- **Test ordering varies significantly** between frameworks, affecting when setup/teardown occurs for different test groups

## Common Lifecycle Hooks Pattern

```mermaid
graph TD
    subgraph "Test Suite Execution Flow"
        A[Start Test Suite] --> B[top-level beforeAll/before]
        B --> C[main beforeAll/before]
        C --> D[nested beforeAll/before]

        D --> E{For Each Test}

        E --> F[top-level beforeEach]
        F --> G[main beforeEach]
        G --> H[nested beforeEach]
        H --> I[Run Test]
        I --> J[nested afterEach]
        J --> K[main afterEach]
        K --> L[top-level afterEach]

        L --> E

        E --> M[nested afterAll/after]
        M --> N[main afterAll/after]
        N --> O[top-level afterAll/after]
        O --> P[End Test Suite]
    end

    style A fill:green
    style P fill:red
    style I fill:blue
```

### Execution Order Visualization

```mermaid
sequenceDiagram
    participant TL as Top Level
    participant M as Main
    participant N as Nested
    participant T as Test

    Note over TL,N: Setup Phase (Once)
    TL->>TL: beforeAll/before
    M->>M: beforeAll/before
    N->>N: beforeAll/before

    Note over TL,T: Test Execution (Repeated)
    loop For Each Test
        TL->>TL: beforeEach
        M->>M: beforeEach
        N->>N: beforeEach
        T->>T: Execute Test
        N->>N: afterEach
        M->>M: afterEach
        TL->>TL: afterEach
    end

    Note over TL,N: Teardown Phase (Once)
    N->>N: afterAll/after
    M->>M: afterAll/after
    TL->>TL: afterAll/after
```

This diagram shows how:
1. **Setup hooks** (`beforeAll`/`before`) execute from outer to inner scope
2. **Test hooks** (`beforeEach`/`afterEach`) wrap each test, with `beforeEach` running outer→inner and `afterEach` running inner→outer
3. **Teardown hooks** (`afterAll`/`after`) execute from inner to outer scope

## ⚠️ Counterintuitive Behavior: Nested beforeAll Timing

### The Surprising Execution Order

```mermaid
graph TD
    subgraph "❌ What You Might Expect"
        A1[top-level beforeEach] --> B1[main beforeEach]
        B1 --> C1[nested beforeAll]
        C1 --> D1[nested beforeEach]
        D1 --> E1[test in nested]
    end

    subgraph "✅ What Actually Happens"
        A2[nested beforeAll] --> B2[top-level beforeEach]
        B2 --> C2[main beforeEach]
        C2 --> D2[nested beforeEach]
        D2 --> E2[test in nested]
    end

    style C1 fill:red
    style A2 fill:red
```

### Execution Order for Nested Tests

```mermaid
sequenceDiagram
    participant NBA as nested beforeAll ⚠️
    participant TLBE as top-level beforeEach
    participant MBE as main beforeEach
    participant NBE as nested beforeEach
    participant T as Test

    Note over NBA: Runs FIRST!
    NBA->>NBA: Execute
    TLBE->>TLBE: Execute
    MBE->>MBE: Execute
    NBE->>NBE: Execute
    T->>T: Run Test
```

**Key Point**: `nested beforeAll` runs BEFORE the `beforeEach` hooks, not after!