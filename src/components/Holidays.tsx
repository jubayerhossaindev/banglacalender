import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toBn } from '@/lib/banglaDate';

const holidays = [
  { date: '১৭ মার্চ', bn: '৩ চৈত্র', name: 'শবে কদর*', daysAway: 16 },
  { date: '২০ মার্চ', bn: '৬ চৈত্র', name: 'জুমাতুল বিদা*', daysAway: 19 },
  { date: '২১ মার্চ', bn: '৭ চৈত্র', name: 'ঈদ-উল-ফিতর*', daysAway: 20 },
  { date: '২২ মার্চ', bn: '৮ চৈত্র', name: 'ঈদ-উল-ফিতর (২য় দিন)*', daysAway: 21 },
  { date: '২৩ মার্চ', bn: '৯ চৈত্র', name: 'ঈদ-উল-ফিতর (৩য় দিন)*', daysAway: 22 },
  { date: '২৬ মার্চ', bn: '১২ চৈত্র', name: 'স্বাধীনতা দিবস', daysAway: 25 },
  { date: '১৪ এপ্রিল', bn: '১ বৈশাখ', name: 'পহেলা বৈশাখ', daysAway: 44 },
  { date: '১ মে', bn: '১৮ বৈশাখ', name: 'মে দিবস', daysAway: 61 },
];

const specialDays = [
  { date: '৮ মার্চ', bn: '২৩ ফাল্গুন', name: 'আন্তর্জাতিক নারী দিবস', daysAway: 7 },
  { date: '২১ মার্চ', bn: '৭ চৈত্র', name: 'বিশ্ব কবিতা দিবস', daysAway: 20 },
  { date: '২২ মার্চ', bn: '৮ চৈত্র', name: 'বিশ্ব পানি দিবস', daysAway: 21 },
  { date: '৭ এপ্রিল', bn: '২৪ চৈত্র', name: 'বিশ্ব স্বাস্থ্য দিবস', daysAway: 37 },
  { date: '২৩ এপ্রিল', bn: '১০ বৈশাখ', name: 'বিশ্ব বই ও কপিরাইট দিবস', daysAway: 53 },
  { date: '৩ মে', bn: '২০ বৈশাখ', name: 'বিশ্ব সংবাদপত্র স্বাধীনতা দিবস', daysAway: 63 },
];

const EventList = ({
  title,
  icon,
  items,
  accent,
}: {
  title: string;
  icon: string;
  items: { date: string; bn: string; name: string; daysAway: number }[];
  accent: string;
}) => (
  <div className="glass-card overflow-hidden">
    <div className={`px-5 py-3 flex items-center gap-2 ${accent}`}>
      <span>{icon}</span>
      <span className="font-bangla font-semibold text-sm">{title}</span>
    </div>
    <div className="divide-y divide-border/50">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-4 p-4 hover:bg-muted/20 transition-colors">
          <div className="text-center min-w-[65px]">
            <p className="text-sm font-bangla font-bold text-foreground">{item.date}</p>
            <p className="text-[10px] text-muted-foreground font-bangla">{item.bn}</p>
          </div>
          <p className="text-sm font-bangla text-foreground flex-1">{item.name}</p>
          <span className="text-[10px] px-2 py-1 rounded-full font-bangla bg-muted text-muted-foreground whitespace-nowrap">
            {toBn(item.daysAway)} দিন পরে
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Holidays = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="holidays" className="py-12">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h2 className="section-heading mb-5">🏛️ সরকারি ছুটি</h2>
            <EventList
              title="আসন্ন সরকারি ছুটি"
              icon="🎉"
              items={holidays}
              accent="bg-primary text-primary-foreground"
            />
            <div className="text-center mt-4">
              <button className="px-4 py-2 text-xs font-bangla bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors">
                সব ছুটি দেখুন →
              </button>
            </div>
          </div>
          <div>
            <h2 className="section-heading mb-5">⭐ বিশেষ দিবস</h2>
            <EventList
              title="আসন্ন বিশেষ দিবস"
              icon="📌"
              items={specialDays}
              accent="bg-accent text-accent-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Holidays;
