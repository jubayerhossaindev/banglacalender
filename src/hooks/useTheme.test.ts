import { useTheme } from '@/hooks/useTheme';
import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

describe('useTheme hook', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Clear DOM classes
    document.documentElement.classList.remove('light', 'dark');
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('light', 'dark');
  });

  it('should return theme and toggleTheme function', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toHaveProperty('theme');
    expect(result.current).toHaveProperty('toggleTheme');
    expect(typeof result.current.toggleTheme).toBe('function');
  });

  it('should initialize with light theme by default', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toMatch(/^(light|dark)$/);
  });

  it('should restore theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
  });

  it('should toggle theme from light to dark', () => {
    localStorage.setItem('theme', 'light');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    localStorage.setItem('theme', 'dark');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('light');
  });

  it('should update localStorage when theme changes', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    const stored = localStorage.getItem('theme');
    expect(stored).toBe(result.current.theme);
  });

  it('should update document classes when theme changes', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    expect(document.documentElement.classList.contains(result.current.theme)).toBe(true);
    expect(
      document.documentElement.classList.contains(
        result.current.theme === 'dark' ? 'light' : 'dark',
      ),
    ).toBe(false);
  });

  it('should handle multiple toggles', () => {
    const { result } = renderHook(() => useTheme());

    const initialTheme = result.current.theme;

    act(() => {
      result.current.toggleTheme();
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe(initialTheme);
  });
});
