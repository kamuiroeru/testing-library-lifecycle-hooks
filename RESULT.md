# Test Framework Lifecycle Hooks Execution Order Comparison

## Test Structure

The following test structure is used across all frameworks:

- **<span style="color: #4A90E2">Top-level</span>**
  - beforeAll/before
  - beforeEach
  - afterEach
  - afterAll/after
  - **<span style="color: #7CB342">Main describe block</span>**
    - beforeAll/before
    - beforeEach
    - afterEach
    - afterAll/after
    - 🧪 Main Test 01
    - 🧪 Main Test 02
    - **<span style="color: #E85D75">Nested describe block</span>**
      - beforeAll/before
      - beforeEach
      - afterEach
      - afterAll/after
      - 🧪 Nested Test 01
      - 🧪 Nested Test 02

## Execution Order Table

| Order | Mocha | Jest | Vitest | Bun |
|------|-------|------|--------|-----|
| 1 | <span style="color: #4A90E2">top-level</span> before | <span style="color: #4A90E2">top-level</span> beforeAll | <span style="color: #4A90E2">top-level</span> beforeAll | <span style="color: #4A90E2">top-level</span> beforeAll |
| 2 | <span style="color: #7CB342">main</span> before | <span style="color: #7CB342">main</span> beforeAll | <span style="color: #7CB342">main</span> beforeAll | <span style="color: #7CB342">main</span> beforeAll |
| 3 | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #E85D75">nested</span> beforeAll |
| 4 | <span style="color: #7CB342">main</span> beforeEach<br>→ 🧪 **main test 01** | <span style="color: #7CB342">main</span> beforeEach<br>→ 🧪 **main test 01** | <span style="color: #7CB342">main</span> beforeEach<br>→ 🧪 **main test 01** | <span style="color: #4A90E2">top-level</span> beforeEach |
| 5 | <span style="color: #7CB342">main</span> afterEach | <span style="color: #7CB342">main</span> afterEach | <span style="color: #7CB342">main</span> afterEach | <span style="color: #7CB342">main</span> beforeEach |
| 6 | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #E85D75">nested</span> beforeEach<br>→ 🧪 **nested test 01** |
| 7 | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #E85D75">nested</span> beforeAll | <span style="color: #E85D75">nested</span> beforeAll | <span style="color: #E85D75">nested</span> afterEach |
| 8 | <span style="color: #7CB342">main</span> beforeEach<br>→ 🧪 **main test 02** | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #7CB342">main</span> afterEach |
| 9 | <span style="color: #7CB342">main</span> afterEach | <span style="color: #7CB342">main</span> beforeEach | <span style="color: #7CB342">main</span> beforeEach | <span style="color: #4A90E2">top-level</span> afterEach |
| 10 | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #E85D75">nested</span> beforeEach<br>→ 🧪 **nested test 01** | <span style="color: #E85D75">nested</span> beforeEach<br>→ 🧪 **nested test 01** | <span style="color: #4A90E2">top-level</span> beforeEach |
| 11 | <span style="color: #E85D75">nested</span> before | <span style="color: #E85D75">nested</span> afterEach | <span style="color: #E85D75">nested</span> afterEach | <span style="color: #7CB342">main</span> beforeEach |
| 12 | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #7CB342">main</span> afterEach | <span style="color: #7CB342">main</span> afterEach | <span style="color: #E85D75">nested</span> beforeEach<br>→ 🧪 **nested test 02** |
| 13 | <span style="color: #7CB342">main</span> beforeEach | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #E85D75">nested</span> afterEach |
| 14 | <span style="color: #E85D75">nested</span> beforeEach<br>→ 🧪 **nested test 01** | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #7CB342">main</span> afterEach |
| 15 | <span style="color: #E85D75">nested</span> afterEach | <span style="color: #7CB342">main</span> beforeEach | <span style="color: #7CB342">main</span> beforeEach | <span style="color: #4A90E2">top-level</span> afterEach |
| 16 | <span style="color: #7CB342">main</span> afterEach | <span style="color: #E85D75">nested</span> beforeEach<br>→ 🧪 **nested test 02** | <span style="color: #E85D75">nested</span> beforeEach<br>→ 🧪 **nested test 02** | <span style="color: #E85D75">nested</span> afterAll |
| 17 | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #E85D75">nested</span> afterEach | <span style="color: #E85D75">nested</span> afterEach | <span style="color: #4A90E2">top-level</span> beforeEach |
| 18 | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #7CB342">main</span> afterEach | <span style="color: #7CB342">main</span> afterEach | <span style="color: #7CB342">main</span> beforeEach<br>→ 🧪 **main test 01** |
| 19 | <span style="color: #7CB342">main</span> beforeEach | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #7CB342">main</span> afterEach |
| 20 | <span style="color: #E85D75">nested</span> beforeEach<br>→ 🧪 **nested test 02** | <span style="color: #E85D75">nested</span> afterAll | <span style="color: #E85D75">nested</span> afterAll | <span style="color: #4A90E2">top-level</span> afterEach |
| 21 | <span style="color: #E85D75">nested</span> afterEach | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #4A90E2">top-level</span> beforeEach | <span style="color: #4A90E2">top-level</span> beforeEach |
| 22 | <span style="color: #7CB342">main</span> afterEach | <span style="color: #7CB342">main</span> beforeEach<br>→ 🧪 **main test 02** | <span style="color: #7CB342">main</span> beforeEach<br>→ 🧪 **main test 02** | <span style="color: #7CB342">main</span> beforeEach<br>→ 🧪 **main test 02** |
| 23 | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #7CB342">main</span> afterEach | <span style="color: #7CB342">main</span> afterEach | <span style="color: #7CB342">main</span> afterEach |
| 24 | <span style="color: #E85D75">nested</span> after | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #4A90E2">top-level</span> afterEach | <span style="color: #4A90E2">top-level</span> afterEach |
| 25 | <span style="color: #7CB342">main</span> after | <span style="color: #7CB342">main</span> afterAll | <span style="color: #7CB342">main</span> afterAll | <span style="color: #7CB342">main</span> afterAll |
| 26 | <span style="color: #4A90E2">top-level</span> after | <span style="color: #4A90E2">top-level</span> afterAll | <span style="color: #4A90E2">top-level</span> afterAll | <span style="color: #4A90E2">top-level</span> afterAll |

## Key Differences

### Hook Naming
- **Mocha**: Uses `before`, `after`, `beforeEach`, `afterEach`
- **Jest/Vitest/Bun**: Uses `beforeAll`, `afterAll`, `beforeEach`, `afterEach`

### Test Execution Order Patterns
1. **Mocha**: Tests run in strict order within their describe blocks
   - **main test 01** → **main test 02** → **nested test 01** → **nested test 02**

2. **Jest & Vitest**: Tests run with nested tests executing before remaining main tests
   - **main test 01** → **nested test 01** → **nested test 02** → **main test 02**

3. **Bun**: All nested tests execute first, then all main tests
   - **nested test 01** → **nested test 02** → **main test 01** → **main test 02**

### Hook Execution Order Patterns
1. **Jest & Vitest**: Nearly identical execution order - runs outer `beforeAll` hooks first, then processes tests with nested hooks in sequence
2. **Bun**: Similar to Jest/Vitest but executes nested `beforeAll` earlier (step 3)
3. **Mocha**: Executes main tests first, then nested tests, with all their respective `before` hooks

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

    style A fill:#90EE90
    style P fill:#FFB6C1
    style I fill:#87CEEB
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
        B1 --> C1[nested beforeEach]
        C1 --> D1[nested beforeAll]
        D1 --> E1[test in nested]
    end

    subgraph "✅ What Actually Happens"
        A2[nested beforeAll] --> B2[top-level beforeEach]
        B2 --> C2[main beforeEach]
        C2 --> D2[nested beforeEach]
        D2 --> E2[test in nested]
    end

    style D1 fill:#FFB6C1
    style A2 fill:#FFB6C1
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