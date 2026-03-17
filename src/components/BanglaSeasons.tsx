import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getBanglaDate, banglaSeasonsData } from '@/lib/banglaDate';

const seasonIcons = ['☀️', '🌧️', '🍂', '🌾', '❄️', '🌸'];
const seasonColors = [
  'text-accent',
  'text-hijri-blue',
  'text-accent',
  'text-accent',
  'text-hijri-blue',
  'text-secondary',
];

const BanglaSeasons = () => {
  const { ref, isVisible } = useScrollAnimation();
  const bd = getBanglaDate();

  return (
    <section id="seasons" className="py-12">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <h2 className="section-heading mb-6 text-center">🌿 বাংলা ঋতু</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {banglaSeasonsData.map((s, i) => {
            const isCurrent = i === bd.seasonIndex;
            return (
              <div
                key={i}
                className={`glass-card-hover p-5 text-center relative hover-scale ${
                  isCurrent ? 'border-secondary/40 bg-secondary/5' : ''
                }`}
              >
                {isCurrent && (
                  <span className="absolute top-2 right-2 text-[9px] px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full font-bangla animate-pulse-slow">
                    বর্তমান
                  </span>
                )}
                <span className="text-3xl block mb-2">{seasonIcons[i]}</span>
                <p className={`text-lg font-bangla font-bold mb-1 ${seasonColors[i]}`}>{s.name}</p>
                <p className="text-xs text-muted-foreground font-bangla">{s.months}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BanglaSeasons;
