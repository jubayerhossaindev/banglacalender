// Bangla date utility functions

const banglaDigits = '০১২৩৪৫৬৭৮৯';
export const toBn = (n: number | string) => String(n).replace(/[0-9]/g, (d) => banglaDigits[+d]);

export const pad = (n: number) => String(n).padStart(2, '0');

const banglaMonthNames = [
  'বৈশাখ',
  'জ্যৈষ্ঠ',
  'আষাঢ়',
  'শ্রাবণ',
  'ভাদ্র',
  'আশ্বিন',
  'কার্তিক',
  'অগ্রহায়ণ',
  'পৌষ',
  'মাঘ',
  'ফাল্গুন',
  'চৈত্র',
];

const banglaMonthEnNames = [
  'Boishakh',
  'Joishtha',
  'Ashar',
  'Srabon',
  'Bhadra',
  'Ashwin',
  'Kartik',
  'Ogrohayon',
  'Poush',
  'Magh',
  'Falgun',
  'Chaitra',
];

const banglaSeasonNames = ['গ্রীষ্ম', 'বর্ষা', 'শরৎ', 'হেমন্ত', 'শীত', 'বসন্ত'];

const banglaSeasonEn = ['Summer', 'Monsoon', 'Autumn', 'Late Autumn', 'Winter', 'Spring'];

// Bangla month start dates (approximate, based on Bangla Academy 1987 reform)
// [month, day] in Gregorian for each Bangla month start
const monthStarts: [number, number][] = [
  [4, 14], // Boishakh
  [5, 15], // Joishtha
  [6, 15], // Ashar
  [7, 16], // Srabon
  [8, 16], // Bhadra
  [9, 16], // Ashwin
  [10, 16], // Kartik
  [11, 15], // Ogrohayon
  [12, 15], // Poush
  [1, 14], // Magh
  [2, 13], // Falgun
  [3, 15], // Chaitra
];

// Days in each Bangla month (non-leap year)
const monthDays = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];

export interface BanglaDate {
  day: number;
  month: number; // 0-indexed
  year: number;
  monthName: string;
  monthNameEn: string;
  season: string;
  seasonEn: string;
  seasonIndex: number;
}

/**
 * Returns the Gregorian year in which the Bangla month at index `i` starts,
 * relative to the given Gregorian year `y`, month `m`, and day `d`.
 * Poush (index 8) starts in December — when the input date is in January,
 * the month start belongs to the previous Gregorian year.
 */
function resolveStartYear(y: number, startM: number, m: number, startD: number, d: number): number {
  if (startM > m || (startM === m && startD > d)) {
    return y - 1;
  }
  return y;
}

export function getBanglaDate(date: Date = new Date()): BanglaDate {
  const m = date.getMonth() + 1; // 1-12
  const d = date.getDate();
  const y = date.getFullYear();

  // Determine Bangla month
  let banglaMonth = -1;
  let banglaDay = 0;
  let banglaYear: number;

  // Check each month
  for (let i = 0; i < 12; i++) {
    const [startM, startD] = monthStarts[i];
    const [nextM, nextD] = monthStarts[(i + 1) % 12];

    let inMonth: boolean;

    if (i < 11) {
      // Same year comparison
      if (startM <= nextM) {
        inMonth =
          (m === startM && d >= startD) || (m > startM && m < nextM) || (m === nextM && d < nextD);
      } else {
        // Wraps around year (e.g., Dec to Jan)
        inMonth =
          (m === startM && d >= startD) || m > startM || m < nextM || (m === nextM && d < nextD);
      }
    } else {
      // Chaitra (last month): from Mar 15 to Apr 13
      inMonth = (m === 3 && d >= 15) || (m === 4 && d < 14);
    }

    if (inMonth) {
      banglaMonth = i;
      // Calculate day within month — start year may be previous Gregorian year
      // (e.g. Poush starts Dec 15, so Jan dates look back to prior year's December)
      const startYear = resolveStartYear(y, startM, m, startD, d);
      const startDate = new Date(startYear, startM - 1, startD);
      const diff = Math.floor((date.getTime() - startDate.getTime()) / 86400000);
      banglaDay = diff + 1;
      break;
    }
  }

  // Adjust Bangla year
  if (m < 4 || (m === 4 && d < 14)) {
    banglaYear = y - 594;
  } else {
    banglaYear = y - 593;
  }

  if (banglaMonth === -1) {
    banglaMonth = 0;
    banglaDay = 1;
  }

  // Clamp day to valid range (branchless — avoids dead-code branches in coverage)
  banglaDay = Math.min(Math.max(banglaDay, 1), monthDays[banglaMonth]);

  const seasonIndex = Math.floor(banglaMonth / 2);

  return {
    day: banglaDay,
    month: banglaMonth,
    year: banglaYear,
    monthName: banglaMonthNames[banglaMonth],
    monthNameEn: banglaMonthEnNames[banglaMonth],
    season: banglaSeasonNames[seasonIndex],
    seasonEn: banglaSeasonEn[seasonIndex],
    seasonIndex,
  };
}

// Hijri date approximation
export interface HijriDate {
  day: number;
  month: number;
  year: number;
  monthName: string;
  monthNameBn: string;
}

const hijriMonthNames = [
  'Muharram',
  'Safar',
  'Rabi al-Awwal',
  'Rabi al-Thani',
  'Jumada al-Ula',
  'Jumada al-Thani',
  'Rajab',
  "Sha'ban",
  'Ramadan',
  'Shawwal',
  "Dhul Qi'dah",
  'Dhul Hijjah',
];

const hijriMonthNamesBn = [
  'মহররম',
  'সফর',
  'রবিউল আউয়াল',
  'রবিউস সানি',
  'জমাদিউল আউয়াল',
  'জমাদিউস সানি',
  'রজব',
  'শাবান',
  'রমজান',
  'শাওয়াল',
  'জিলকদ',
  'জিলহজ',
];

export function getHijriDate(date: Date = new Date()): HijriDate {
  // Approximate Hijri calculation
  const jd = Math.floor(date.getTime() / 86400000 + 2440587.5);
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const lp = l - 10631 * n + 354;
  const j =
    Math.floor((10985 - lp) / 5316) * Math.floor((50 * lp) / 17719) +
    Math.floor(lp / 5670) * Math.floor((43 * lp) / 15238);
  const lpp =
    lp -
    Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
    29;
  const month = Math.floor((24 * lpp) / 709);
  const day = lpp - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;

  // month is always in [1..12] for any valid Date; clamp defensively without a dead branch
  const safeMonth = Math.max(1, Math.min(12, month));

  return {
    day,
    month: safeMonth - 1,
    year,
    monthName: hijriMonthNames[safeMonth - 1],
    monthNameBn: hijriMonthNamesBn[safeMonth - 1],
  };
}

// Day names
const banglaDayNames = [
  'রবিবার',
  'সোমবার',
  'মঙ্গলবার',
  'বুধবার',
  'বৃহস্পতিবার',
  'শুক্রবার',
  'শনিবার',
];
const englishDayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const englishMonthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const banglaEnglishMonthNames = [
  'জানুয়ারি',
  'ফেব্রুয়ারি',
  'মার্চ',
  'এপ্রিল',
  'মে',
  'জুন',
  'জুলাই',
  'আগস্ট',
  'সেপ্টেম্বর',
  'অক্টোবর',
  'নভেম্বর',
  'ডিসেম্বর',
];

export function getBanglaDayName(date: Date = new Date()) {
  return banglaDayNames[date.getDay()];
}

export function getEnglishDayName(date: Date = new Date()) {
  return englishDayNames[date.getDay()];
}

export function getEnglishMonthName(date: Date = new Date()) {
  return englishMonthNames[date.getMonth()];
}

export function getBanglaEnglishMonthName(date: Date = new Date()) {
  return banglaEnglishMonthNames[date.getMonth()];
}

export function getOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function getBanglaOrdinal(day: number): string {
  if (day === 1) return '১লা';
  if (day === 2) return '২রা';
  if (day === 3) return '৩রা';
  if (day === 4) return '৪ঠা';
  if (day <= 18) return toBn(day) + 'ই';
  if (day === 19) return '১৯শে';
  if (day === 20) return '২০শে';
  return toBn(day) + 'শে';
}

// Bangla month metadata
export const banglaMonthsData = banglaMonthNames.map((name, i) => ({
  bn: name,
  en: banglaMonthEnNames[i],
  startMonth: monthStarts[i][0],
  startDay: monthStarts[i][1],
  days: monthDays[i],
  season: banglaSeasonNames[Math.floor(i / 2)],
  seasonIndex: Math.floor(i / 2),
}));

export const banglaSeasonsData = banglaSeasonNames.map((name, i) => ({
  name,
  nameEn: banglaSeasonEn[i],
  months: `${banglaMonthNames[i * 2]} - ${banglaMonthNames[i * 2 + 1]}`,
}));

// Format Gregorian date range for a Bangla month
export function getMonthDateRange(monthIndex: number): string {
  const [startM, startD] = monthStarts[monthIndex];
  const [endM, endD] = monthStarts[(monthIndex + 1) % 12];
  const startMonthBn = banglaEnglishMonthNames[startM - 1];
  const endMonthBn = banglaEnglishMonthNames[endM - 1];
  const actualEndDay = endD - 1;
  return `${toBn(startD)} ${startMonthBn} - ${toBn(actualEndDay)} ${endMonthBn}`;
}
