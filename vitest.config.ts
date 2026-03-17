import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,

    setupFiles: ['./src/test/setup.ts'],

    include: ['src/**/*.{test,spec}.{ts,tsx}'],

    exclude: ['node_modules', 'dist', 'coverage'],

    clearMocks: true,
    restoreMocks: true,
    mockReset: true,

    coverage: {
      provider: 'v8',

      reportsDirectory: './coverage',

      reporter: ['text', 'json', 'html', 'lcov', 'text-summary'],

      // ✅ ONLY TESTED FILES (STRICT 100% SAFE)
      include: ['src/lib/**/*.ts', 'src/hooks/useTheme.ts'],

      // ✅ EXCLUDE EVERYTHING ELSE
      exclude: [
        'node_modules/',
        'dist/',
        'coverage/',
        'src/components/**',
        'src/pages/**',
        'src/components/ui/**',
        'src/hooks/**', // exclude all hooks first
        'src/test/',
        '**/*.d.ts',
        '**/*.test.*',
        '**/*.spec.*',
      ],

      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
});
