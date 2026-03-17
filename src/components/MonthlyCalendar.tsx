import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getBanglaDate, toBn } from '@/lib/banglaDate';

const days = ['শুক্র', 'শনি', 'রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ'];

// Generate calendar dynamically for the current Bangla month
function generateCalendar(bd: ReturnType<typeof getBanglaDate>, today: Date) {
  // Find the Gregorian date for day 1 of current Bangla month
  const monthStarts: [number, number][] = [
    [4, 14],
    [5, 15],
    [6, 15],
    [7, 16],
    [8, 16],
    [9, 16],
    [10, 16],
    [11, 15],
    [12, 15],
    [1, 14],
    [2, 13],
    [3, 15],
  ];
  const monthDays = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];

  const [startM, startD] = monthStarts[bd.month];
  let startYear = today.getFullYear();
  // Adjust year for months that start in previous year context
  if (bd.month >= 9 && startM <= 3) {
    // Magh, Falgun, Chaitra start in Jan/Feb/Mar of current year
  } else if (startM > today.getMonth() + 1) {
    startYear--;
  }

  const firstDay = new Date(startYear, startM - 1, startD);
  const totalDays = monthDays[bd.month];

  // Build weeks starting from Friday (index 5 in JS)
  // Friday=0, Saturday=1, Sunday=2, Monday=3, Tuesday=4, Wednesday=5, Thursday=6
  const jsDay = firstDay.getDay(); // 0=Sun, 1=Mon... 6=Sat
  // Convert to our grid: Fri=0, Sat=1, Sun=2, Mon=3, Tue=4, Wed=5, Thu=6
  const gridMap = [2, 3, 4, 5, 6, 0, 1]; // JS day -> grid position
  const startPos = gridMap[jsDay];

  const weeks: (null | { bn: number; en: number })[][] = [];
  let currentWeek: (null | { bn: number; en: number })[] = Array(7).fill(null);

  for (let d = 0; d < totalDays; d++) {
    const pos = (startPos + d) % 7;
    if (d > 0 && pos === 0) {
      weeks.push(currentWeek);
      currentWeek = Array(7).fill(null);
    }
    const gregDate = new Date(firstDay);
    gregDate.setDate(firstDay.getDate() + d);
    currentWeek[pos] = { bn: d + 1, en: gregDate.getDate() };
  }
  weeks.push(currentWeek);

  // Pad first week
  if (weeks.length > 0) {
    const firstWeek = [...weeks[0]];
    for (let i = 0; i < startPos; i++) {
      firstWeek[i] = null;
    }
    weeks[0] = firstWeek;
  }

  return weeks;
}

const MonthlyCalendar = () => {
  const { ref, isVisible } = useScrollAnimation();
  const now = new Date();
  const bd = getBanglaDate(now);
  const weeks = generateCalendar(bd, now);

  return (
    <section id="calendar" className="py-12">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h2 className="section-heading">📅 চলতি মাসের ক্যালেন্ডার</h2>
          <button className="px-4 py-2 text-xs font-bangla bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors">
            সম্পূর্ণ বছরের ক্যালেন্ডার →
          </button>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="bg-primary/10 px-6 py-4 text-center">
            <h3 className="text-xl font-bangla font-bold text-primary glow-text-primary">
              {bd.monthName} {toBn(bd.year)}
            </h3>
          </div>

          <div className="p-4 overflow-x-auto">
            <div className="min-w-[320px]">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {days.map((d) => (
                  <div
                    key={d}
                    className="text-center text-xs font-bangla text-muted-foreground py-2 font-semibold"
                  >
                    {d}
                  </div>
                ))}
              </div>

              {weeks.map((week, wi) => (
                <div key={wi} className="grid grid-cols-7 gap-1">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className={`text-center py-3 px-1 rounded-lg transition-all duration-200 ${
                        day === null
                          ? ''
                          : day.bn === bd.day
                            ? 'bg-primary/20 border border-primary/40 scale-105'
                            : 'hover:bg-muted/50 cursor-pointer hover-scale'
                      }`}
                    >
                      {day && (
                        <>
                          <span
                            className={`text-sm font-bangla font-semibold block ${day.bn === bd.day ? 'text-primary glow-text-primary' : 'text-foreground'}`}
                          >
                            {toBn(day.bn)}
                          </span>
                          <span className="text-[10px] text-muted-foreground">{toBn(day.en)}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyCalendar;
