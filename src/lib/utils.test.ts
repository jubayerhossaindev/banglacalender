import { cn } from '@/lib/utils';
import { describe, expect, it } from 'vitest';

describe('utils.ts - Utility functions', () => {
  describe('cn - Class merging utility', () => {
    it('should combine single classes', () => {
      const result = cn('px-4', 'py-2');
      expect(result).toContain('px-4');
      expect(result).toContain('py-2');
    });

    it('should handle conditional classes', () => {
      const isActive = true;
      const result = cn('base-class', isActive && 'active-class');
      expect(result).toContain('base-class');
      expect(result).toContain('active-class');
    });

    it('should exclude falsy conditional classes', () => {
      const isActive = false;
      const result = cn('base-class', isActive && 'active-class');
      expect(result).toContain('base-class');
      expect(result).not.toContain('active-class');
    });

    it('should merge Tailwind classes properly', () => {
      // Should handle duplication and precedence
      const result = cn('px-2', 'px-4'); // px-4 should win
      expect(result).toContain('px-4');
    });

    it('should handle array of classes', () => {
      const classes = ['class1', 'class2', 'class3'];
      const result = cn(...classes);
      expect(result).toContain('class1');
      expect(result).toContain('class2');
      expect(result).toContain('class3');
    });

    it('should handle undefined and null values', () => {
      const result = cn('base', undefined, null, 'other');
      expect(result).toContain('base');
      expect(result).toContain('other');
    });

    it('should handle empty strings', () => {
      const result = cn('base', '', 'other');
      expect(result).toContain('base');
      expect(result).toContain('other');
    });

    it('should handle object format from clsx', () => {
      const result = cn({
        'text-red-500': true,
        'text-blue-500': false,
      });
      expect(result).toContain('text-red-500');
      expect(result).not.toContain('text-blue-500');
    });

    it('should return non-empty string', () => {
      const result = cn('px-4', 'py-2', 'text-sm');
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should handle complex conditional logic', () => {
      type Variant = 'primary' | 'secondary';
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const testVariants: Record<Variant, string> = {
        primary: 'bg-blue-500',
        secondary: 'bg-gray-500',
      };

      const variant: Variant = 'primary';
      const disabled = false;

      const result = cn(
        'base-button',
        variant === 'primary' && 'bg-blue-500',
        // @ts-expect-error - Testing unreachable code path
        variant === 'secondary' && 'bg-gray-500',
        disabled && 'opacity-50 cursor-not-allowed',
      );

      expect(result).toContain('base-button');
      expect(result).toContain('bg-blue-500');
      expect(result).not.toContain('bg-gray-500');
      expect(result).not.toContain('opacity-50');
    });
  });
});
