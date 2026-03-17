import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const prayers = [
  { name: 'ফজর', time: '৫:০৯ AM', icon: '🌙' },
  { name: 'সূর্যোদয়', time: '৬:২১ AM', icon: '🌅' },
  { name: 'যোহর', time: '১২:১২ PM', icon: '☀️' },
  { name: 'আসর', time: '৪:২৩ PM', icon: '🌤️' },
  { name: 'মাগরিব', time: '৬:০৩ PM', icon: '🌇' },
  { name: 'ইশা', time: '৭:১৬ PM', icon: '🌃' },
];

const PrayerTimes = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="prayer" className="py-12">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <h2 className="section-heading mb-2 text-center">🕌 আজকের নামাজের সময়সূচি</h2>
        <p className="text-center text-muted-foreground text-sm font-bangla mb-8">
          📍 ঢাকা, বাংলাদেশ
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {prayers.map((p, i) => (
            <div
              key={i}
              className="glass-card-hover p-5 text-center hover-scale"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-2xl block mb-2">{p.icon}</span>
              <p className="text-xs text-muted-foreground font-bangla mb-1">{p.name}</p>
              <p className="text-xl font-display font-bold text-secondary glow-text-secondary">
                {p.time}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="px-6 py-2.5 text-sm font-bangla bg-secondary/10 text-secondary border border-secondary/20 rounded-lg hover:bg-secondary/20 transition-colors">
            সম্পূর্ণ নামাজের সময় দেখুন →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;
