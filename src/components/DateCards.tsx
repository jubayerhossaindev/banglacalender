import {
  getBanglaDate,
  getHijriDate,
  getBanglaDayName,
  getEnglishDayName,
  getEnglishMonthName,
  getBanglaEnglishMonthName,
  getBanglaOrdinal,
  getOrdinalSuffix,
  toBn,
} from '@/lib/banglaDate';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DateCards = () => {
  const { ref, isVisible } = useScrollAnimation();
  const now = new Date();
  const bd = getBanglaDate(now);
  const hd = getHijriDate(now);
  const bnDay = getBanglaDayName(now);
  const enDay = getEnglishDayName(now);
  const enMonth = getEnglishMonthName(now);
  const bnEnMonth = getBanglaEnglishMonthName(now);
  const day = now.getDate();
  const year = now.getFullYear();

  const cards = [
    {
      icon: '📅',
      title: 'আজকের বাংলা তারিখ',
      mainDate: `${bnDay}, ${getBanglaOrdinal(bd.day)} ${bd.monthName} ${toBn(bd.year)} বঙ্গাব্দ`,
      subDate: `${enDay} ${day}${getOrdinalSuffix(day)} ${bd.monthNameEn} ${bd.year}`,
      extra: `${bd.season}-কাল | ${bd.seasonEn}`,
      accent: 'primary' as const,
    },
    {
      icon: '🌐',
      title: 'আজকের ইংরেজি তারিখ',
      mainDate: `${getBanglaOrdinal(day)} ${bnEnMonth} ${toBn(year)} খ্রিষ্টাব্দ`,
      subDate: `${enDay} ${day}${getOrdinalSuffix(day)} ${enMonth} ${year}`,
      extra: bd.seasonEn,
      accent: 'secondary' as const,
    },
    {
      icon: '🕌',
      title: 'আজকের হিজরি তারিখ',
      mainDate: `${getBanglaOrdinal(hd.day)} ${hd.monthNameBn} ${toBn(hd.year)} হিজরি`,
      subDate: `${hd.day}${getOrdinalSuffix(hd.day)} ${hd.monthName} ${hd.year} AH`,
      extra: '(হিজরি - হিজরত পরবর্তী)',
      accent: 'accent' as const,
    },
  ];

  const accentStyles = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground',
  };

  const glowStyles = {
    primary: 'glow-text-primary text-primary',
    secondary: 'glow-text-secondary text-secondary',
    accent: 'glow-text-accent text-accent',
  };

  return (
    <section className="py-12">
      <div ref={ref} className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="glass-card-hover overflow-hidden hover-scale"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`px-5 py-3 flex items-center gap-2 ${accentStyles[card.accent]}`}>
                <span className="text-lg">{card.icon}</span>
                <span className="font-bangla font-semibold text-sm">{card.title}</span>
              </div>
              <div className="p-6 text-center">
                <p
                  className={`text-xl md:text-2xl font-bangla font-bold mb-2 ${glowStyles[card.accent]}`}
                >
                  {card.mainDate}
                </p>
                <p className="text-sm text-muted-foreground font-mono mb-2">{card.subDate}</p>
                <p
                  className={`text-xs font-bangla ${card.accent === 'secondary' ? 'text-secondary' : card.accent === 'accent' ? 'text-accent' : 'text-primary'}`}
                >
                  {card.extra}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DateCards;
