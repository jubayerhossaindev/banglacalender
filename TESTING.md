# Testing Guide

This document provides comprehensive information about testing in the Bangla Calendar project.

## 📋 Table of Contents

- [Testing Strategy](#testing-strategy)
- [Test Structure](#test-structure)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Test Coverage](#test-coverage)
- [Best Practices](#best-practices)

## 🎯 Testing Strategy

### Types of Tests

We maintain three levels of testing:

1. **Unit Tests** - Test individual functions and utilities
2. **Component Tests** - Test React components in isolation
3. **Integration Tests** - Test component interactions (future)

### Coverage Goals

- **Lines**: 80%
- **Functions**: 80%
- **Branches**: 80%
- **Statements**: 80%

## 📁 Test Structure

```
src/
├── lib/
│   ├── banglaDate.ts
│   ├── banglaDate.test.ts      # Unit tests for Bangla date utilities
│   ├── utils.ts
│   └── utils.test.ts            # Unit tests for utilities
├── hooks/
│   ├── useTheme.ts
│   ├── useTheme.test.ts         # Hook tests
│   └── ... (more hooks and tests)
├── components/
│   ├── HeroSection.tsx
│   ├── HeroSection.test.tsx     # Component tests
│   └── ... (more components)
└── test/
    ├── setup.ts                 # Vitest setup and globals
    └── example.test.ts          # Example tests
```

## 🏃 Running Tests

### Development

```bash
# Run tests in watch mode
pnpm run test:watch

# Run tests once
pnpm run test

# Run tests with UI
pnpm run test -- --ui

# Run specific test file
pnpm run test -- banglaDate.test.ts

# Run tests matching pattern
pnpm run test -- --grep "should convert"
```

### Coverage

```bash
# Generate coverage report
pnpm run test:coverage

# View coverage report in browser
open coverage/index.html

# Coverage with specific format
pnpm run test:coverage -- --reporter=html
```

## ✍️ Writing Tests

### Test File Naming

- **Utilities**: `functionName.test.ts`
- **Components**: `ComponentName.test.tsx`
- **Hooks**: `useHookName.test.ts`

### Basic Test Structure

```typescript
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { functionToTest } from '@/path/to/module';

describe('Module Name', () => {
  describe('Function Name', () => {
    it('should do something', () => {
      const result = functionToTest(input);
      expect(result).toBe(expectedValue);
    });

    it('should handle edge case', () => {
      expect(() => functionToTest(invalidInput)).toThrow();
    });
  });
});
```

### Testing Utilities

#### banglaDate.test.ts Example

```typescript
import { toBn, getBanglaDate } from '@/lib/banglaDate';

describe('toBn - Number to Bangla conversion', () => {
  it('should convert single digits to Bangla numerals', () => {
    expect(toBn(0)).toBe('০');
    expect(toBn(5)).toBe('৫');
  });

  it('should convert multi-digit numbers', () => {
    expect(toBn(123)).toBe('१२३');
  });
});
```

#### utils.test.ts Example

```typescript
import { cn } from '@/lib/utils';

describe('cn - Class merging', () => {
  it('should combine classes', () => {
    const result = cn('px-4', 'py-2');
    expect(result).toContain('px-4');
    expect(result).toContain('py-2');
  });

  it('should handle conditionals', () => {
    const result = cn('base', true && 'active');
    expect(result).toContain('active');
  });
});
```

### Testing Hooks

Use `@testing-library/react` for hook testing:

```typescript
import { renderHook, act } from '@testing-library/react';
import { useTheme } from '@/hooks/useTheme';

describe('useTheme hook', () => {
  it('should toggle theme', () => {
    const { result } = renderHook(() => useTheme());

    const initialTheme = result.current.theme;

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).not.toBe(initialTheme);
  });
});
```

### Testing Components

```typescript
import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/HeroSection";

describe("HeroSection", () => {
  it("should render heading", () => {
    render(<HeroSection />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
```

## 📊 Coverage Analysis

### Viewing Coverage

After running `pnpm run test:coverage`:

```
coverage/
├── index.html           # HTML report
├── lcov.info           # LCOV format for CI/CD
├── coverage-final.json # JSON format
└── ...
```

### Thresholds

The project maintains coverage thresholds in `vitest.config.ts`:

```typescript
coverage: {
  lines: 80,
  functions: 80,
  branches: 80,
  statements: 80,
}
```

### Improving Coverage

1. **Identify uncovered lines**: Check HTML report for red lines
2. **Write targeted tests**: Create tests for uncovered branches
3. **Test edge cases**: Handle error states and boundaries
4. **Document gaps**: Mark intentionally uncovered code

## ✅ Best Practices

### Do's

✅ **Use descriptive test names** - Clearly state what is being tested

```typescript
// Good
it('should convert Gregorian date to Bangla date correctly');

// Bad
it('should work');
```

✅ **Test one thing per test** - Keep tests focused

```typescript
// Good
it('should validate email format', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});

// Bad
it('should validate input', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validatePhone('123-456-7890')).toBe(true);
  expect(validateDate('2024-01-01')).toBe(true);
});
```

✅ **Use beforeEach/afterEach** - Setup and teardown

```typescript
beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});
```

✅ **Test behavior, not implementation** - Focus on outputs

```typescript
// Good - tests behavior
it('should return Bangla numerals', () => {
  expect(toBn(5)).toBe('৫');
});

// Avoid - tests implementation
it('should call replace function', () => {
  vi.spyOn(String.prototype, 'replace');
  // ...
});
```

✅ **Handle async operations** - Use async/await properly

```typescript
it('should fetch data', async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
});
```

### Don'ts

❌ **Don't test implementation details** - Test public API only
❌ **Don't create test interdependencies** - Keep tests independent
❌ **Don't skip tests** - Remove or fix failing tests
❌ **Don't test third-party libraries** - Trust external dependencies
❌ **Don't write tests without assertions** - Always verify outcomes

## 🔧 Common Testing Patterns

### Testing Date Functions

```typescript
it('should handle date objects', () => {
  const date = new Date(2024, 3, 14); // April 14, 2024
  const bd = getBanglaDate(date);

  expect(bd.day).toBeGreaterThanOrEqual(1);
  expect(bd.day).toBeLessThanOrEqual(31);
});
```

### Testing Conditional Logic

```typescript
it('should apply conditional styling', () => {
  const result = cn('base', isActive && 'active', isDisabled && 'disabled');

  expect(result).toContain('base');
  expect(result)[isActive ? 'toContain' : 'not.toContain']('active');
});
```

### Testing Error Cases

```typescript
it('should throw on invalid input', () => {
  expect(() => {
    processDate(null);
  }).toThrow(TypeError);
});
```

## 📚 Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Docs](https://testing-library.com/)
- [Jest Matchers](https://vitest.dev/api/expect.html)

## 📞 Support

For questions about testing or to report test-related issues:

- Open an issue with `[TEST]` prefix
- Check existing test examples in the codebase
- Review CI logs for test failures
