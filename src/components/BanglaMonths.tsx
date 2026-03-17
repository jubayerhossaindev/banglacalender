import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getBanglaDate, banglaMonthsData, getMonthDateRange } from '@/lib/banglaDate';

const BanglaMonths = () => {
  const { ref, isVisible } = useScrollAnimation();
  const bd = getBanglaDate();

  return (
    <section id="months" className="py-12">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <h2 className="section-heading mb-6 text-center">🗓️ বাংলা মাস</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {banglaMonthsData.map((month, i) => {
            const isCurrent = i === bd.month;
            return (
              <div
                key={i}
                className={`glass-card-hover p-4 text-center relative hover-scale ${
                  isCurrent ? 'border-primary/40 bg-primary/5' : ''
                }`}
              >
                {isCurrent && (
                  <span className="absolute top-2 right-2 text-[9px] px-2 py-0.5 bg-primary text-primary-foreground rounded-full font-bangla animate-pulse-slow">
                    বর্তমান মাস
                  </span>
                )}
                <p
                  className={`text-lg font-bangla font-bold mb-0.5 ${isCurrent ? 'text-primary' : 'text-foreground'}`}
                >
                  {month.bn}
                </p>
                <p className="text-xs font-mono text-muted-foreground mb-1">{month.en}</p>
                <p className="text-[11px] text-muted-foreground font-bangla mb-1">
                  {getMonthDateRange(i)}
                </p>
                <span className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground font-bangla">
                  {month.season}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BanglaMonths;
