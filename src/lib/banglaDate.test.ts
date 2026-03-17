import {
  banglaMonthsData,
  banglaSeasonsData,
  getBanglaDate,
  getBanglaDayName,
  getBanglaEnglishMonthName,
  getBanglaOrdinal,
  getEnglishDayName,
  getEnglishMonthName,
  getHijriDate,
  getMonthDateRange,
  getOrdinalSuffix,
  pad,
  toBn,
} from '@/lib/banglaDate';
import { describe, expect, it } from 'vitest';

describe('banglaDate utilities', () => {
  // ======================
  // toBn
  // ======================
  describe('toBn', () => {
    it('converts digits', () => {
      expect(toBn(0)).toBe('০');
      expect(toBn(5)).toBe('৫');
      expect(toBn(2024)).toBe('২০২৪');
    });

    it('handles string input', () => {
      expect(toBn('42')).toBe('৪২');
    });

    it('handles negative', () => {
      expect(toBn(-1)).toContain('১');
    });
  });

  // ======================
  // pad
  // ======================
  describe('pad', () => {
    it('pads correctly', () => {
      expect(pad(5)).toBe('05');
      expect(pad(12)).toBe('12');
      expect(pad(100)).toBe('100');
    });

    it('handles zero', () => {
      expect(pad(0)).toBe('00');
    });
  });

  // ======================
  // Bangla Date
  // ======================
  describe('getBanglaDate', () => {
    it('returns valid structure', () => {
      const bd = getBanglaDate(new Date(2024, 3, 14));
      expect(bd).toHaveProperty('day');
      expect(bd).toHaveProperty('month');
      expect(bd).toHaveProperty('year');
    });

    it('covers before Pohela Boishakh', () => {
      const bd = getBanglaDate(new Date(2024, 3, 13));
      expect(bd.year).toBeGreaterThan(0);
    });

    it('covers after Pohela Boishakh', () => {
      const bd = getBanglaDate(new Date(2024, 3, 14));
      expect(bd.year).toBeGreaterThan(0);
    });

    it('covers early year (Jan)', () => {
      const bd = getBanglaDate(new Date(2024, 0, 1));
      expect(bd.month).toBeGreaterThanOrEqual(0);
    });

    it('covers late year (Dec)', () => {
      const bd = getBanglaDate(new Date(2024, 11, 31));
      expect(bd.month).toBeGreaterThanOrEqual(0);
    });

    it('ensures valid ranges', () => {
      const bd = getBanglaDate(new Date());
      expect(bd.day).toBeGreaterThanOrEqual(1);
      expect(bd.day).toBeLessThanOrEqual(31);
      expect(bd.month).toBeGreaterThanOrEqual(0);
      expect(bd.month).toBeLessThan(12);
    });

    // ======================
    // resolveStartYear — TRUE branch (start year = y - 1)
    //
    // Poush (i=8): startM=12, startD=15.
    // Dates Jan 1–13 match Poush via the wrap-around inMonth condition.
    // resolveStartYear: startM(12) > m(1) → return y - 1  ← TRUE branch
    // startDate = Dec 15 of the PREVIOUS year → diff is correct.
    // ======================
    it('resolveStartYear TRUE branch — Poush matched on Jan 1 (startM=12 > m=1)', () => {
      const bd = getBanglaDate(new Date(2024, 0, 1));
      expect(bd.monthNameEn).toBe('Poush');
      // Dec 15 2023 → Jan 1 2024 = 17 days → day 18
      expect(bd.day).toBe(18);
    });

    it('resolveStartYear TRUE branch — Poush matched on Jan 13 (boundary)', () => {
      const bd = getBanglaDate(new Date(2024, 0, 13));
      expect(bd.monthNameEn).toBe('Poush');
      expect(bd.day).toBeGreaterThanOrEqual(1);
    });

    // ======================
    // resolveStartYear — FALSE branch (start year = y, same year)
    //
    // Any normal date where startM <= m, e.g. Boishakh (startM=4) on Apr 14.
    // resolveStartYear: startM(4) > m(4)? No. startM===m && startD(14) > d(14)? No → return y
    // ======================
    it('resolveStartYear FALSE branch — Boishakh on Apr 14 (startM===m, startD===d)', () => {
      const bd = getBanglaDate(new Date(2024, 3, 14));
      expect(bd.monthNameEn).toBe('Boishakh');
      expect(bd.day).toBe(1);
    });

    it('resolveStartYear FALSE branch — Magh on Jan 14 (startM===m, startD===d)', () => {
      // Magh: startM=1, startD=14. Jan 14: startM===m===1, startD===d===14 → not > → FALSE
      const bd = getBanglaDate(new Date(2024, 0, 14));
      expect(bd.monthNameEn).toBe('Magh');
      expect(bd.day).toBe(1);
    });

    it('Feb 1 falls in Magh (before Falgun start Feb 13)', () => {
      const bd = getBanglaDate(new Date(2024, 1, 1));
      expect(bd.monthNameEn).toBe('Magh');
      expect(bd.day).toBeGreaterThanOrEqual(1);
    });

    it('Falgun starts on Feb 13', () => {
      const bd = getBanglaDate(new Date(2024, 1, 13));
      expect(bd.monthNameEn).toBe('Falgun');
      expect(bd.day).toBe(1);
    });
  });

  // ======================
  // Hijri Date
  // ======================
  describe('getHijriDate', () => {
    it('returns valid structure', () => {
      const hd = getHijriDate(new Date());
      expect(hd).toHaveProperty('day');
      expect(hd).toHaveProperty('month');
      expect(hd).toHaveProperty('year');
    });

    it('covers normal range', () => {
      const hd = getHijriDate(new Date());
      expect(hd.day).toBeGreaterThanOrEqual(1);
      expect(hd.day).toBeLessThanOrEqual(30);
      expect(hd.month).toBeGreaterThanOrEqual(0);
      expect(hd.month).toBeLessThan(12);
    });

    it('covers extreme past date', () => {
      const hd = getHijriDate(new Date(-99999999999999));
      expect(hd.monthName).toBeDefined();
      expect(hd.monthNameBn).toBeDefined();
    });

    it('covers extreme future date', () => {
      const hd = getHijriDate(new Date(8640000000000000));
      expect(typeof hd.monthName).toBe('string');
      expect(hd.monthName.length).toBeGreaterThan(0);
    });

    it('covers extreme negative date', () => {
      const hd = getHijriDate(new Date(-8640000000000000));
      expect(typeof hd.monthNameBn).toBe('string');
      expect(hd.monthNameBn.length).toBeGreaterThan(0);
    });
  });

  // ======================
  // Day / Month names
  // ======================
  describe('day & month names', () => {
    it('bangla day', () => {
      const name = getBanglaDayName(new Date());
      expect(name).toMatch(/[\u0980-\u09FF]/);
    });

    it('english day', () => {
      const name = getEnglishDayName(new Date());
      expect(typeof name).toBe('string');
    });

    it('english month', () => {
      expect(getEnglishMonthName(new Date(2024, 0, 1))).toBe('January');
    });

    it('bangla english month', () => {
      const name = getBanglaEnglishMonthName(new Date());
      expect(name).toMatch(/[\u0980-\u09FF]/);
    });
  });

  // ======================
  // Ordinals
  // ======================
  describe('ordinal', () => {
    it('english ordinal full coverage', () => {
      expect(getOrdinalSuffix(1)).toBe('st');
      expect(getOrdinalSuffix(2)).toBe('nd');
      expect(getOrdinalSuffix(3)).toBe('rd');
      expect(getOrdinalSuffix(4)).toBe('th');
      expect(getOrdinalSuffix(11)).toBe('th');
      expect(getOrdinalSuffix(21)).toBe('st');
    });

    it('bangla ordinal full branches', () => {
      expect(getBanglaOrdinal(1)).toMatch(/১/);
      expect(getBanglaOrdinal(2)).toBe('২রা');
      expect(getBanglaOrdinal(3)).toBe('৩রা');
      expect(getBanglaOrdinal(4)).toBe('৪ঠা');
      expect(getBanglaOrdinal(10)).toContain('ই');
      expect(getBanglaOrdinal(19)).toBe('১৯শে');
      expect(getBanglaOrdinal(20)).toBe('২০শে');
      expect(getBanglaOrdinal(25)).toContain('শে');
    });
  });

  // ======================
  // Data
  // ======================
  describe('data', () => {
    it('months data', () => {
      expect(banglaMonthsData).toHaveLength(12);
    });

    it('seasons data', () => {
      expect(banglaSeasonsData).toHaveLength(6);
    });
  });

  // ======================
  // Month Range
  // ======================
  describe('getMonthDateRange', () => {
    it('valid format', () => {
      const range = getMonthDateRange(0);
      expect(range).toContain('-');
    });

    it('covers all months', () => {
      for (let i = 0; i < 12; i++) {
        expect(getMonthDateRange(i)).toBeTruthy();
      }
    });

    it('covers wrap case (index 11 → next index 0)', () => {
      const range = getMonthDateRange(11);
      expect(range).toContain('-');
    });

    it('handles invalid input (NaN throws)', () => {
      expect(() => getMonthDateRange(Number.NaN)).toThrow();
    });

    it('all month ranges contain Bangla characters', () => {
      for (let i = 0; i < 12; i++) {
        const range = getMonthDateRange(i);
        expect(range).toMatch(/[\u0980-\u09FF]/);
      }
    });
  });

  // ======================
  // Extra edge coverage
  // ======================
  describe('extra edge coverage', () => {
    it('handles invalid date for bangla date', () => {
      const bd = getBanglaDate(new Date('invalid'));
      expect(bd).toBeDefined();
    });

    it('handles extreme past date', () => {
      const bd = getBanglaDate(new Date(-8640000000000000));
      expect(bd).toBeDefined();
    });

    it('handles extreme future date', () => {
      const bd = getBanglaDate(new Date(8640000000000000));
      expect(bd).toBeDefined();
    });

    it('covers hijri future fallback branch', () => {
      const hd = getHijriDate(new Date(8640000000000000));
      expect(hd.monthNameBn).toBeDefined();
    });

    it('covers ordinal edge high number', () => {
      expect(getOrdinalSuffix(111)).toBe('st');
      expect(getOrdinalSuffix(112)).toBe('nd');
      expect(getOrdinalSuffix(113)).toBe('rd');
    });

    it('covers bangla ordinal uncommon', () => {
      expect(getBanglaOrdinal(0)).toBeDefined();
      expect(getBanglaOrdinal(101)).toBeDefined();
    });
  });
});
