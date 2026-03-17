import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toBn } from '@/lib/banglaDate';

const events = [
  {
    year: 1872,
    text: 'ইয়েলোস্টোন বিশ্বের প্রথম জাতীয় উদ্যান হিসেবে স্বীকৃতি পায়',
    tag: 'বিশ্ব',
  },
  { year: 1953, text: 'ফ্রান্সিস ক্রিক ও জেমস ওয়াটসন ডিএনএ-এর গঠন আবিষ্কার করেন', tag: 'বিশ্ব' },
  { year: 1961, text: 'প্রেসিডেন্ট কেনেডি মার্কিন পিস কর্পস প্রতিষ্ঠা করেন', tag: 'বিশ্ব' },
  {
    year: 1971,
    text: 'ঢাকায় ছাত্ররা পাকিস্তানি সামরিক শাসনের বিরুদ্ধে প্রতিবাদ করে',
    tag: 'বাংলাদেশ',
  },
  { year: 1991, text: 'উপসাগরীয় যুদ্ধে মিত্রবাহিনীর যুদ্ধবিরতি ঘোষণা', tag: 'বিশ্ব' },
];

const HistoricalEvents = () => {
  const { ref, isVisible } = useScrollAnimation();
  const today = new Date();
  const dateStr = `${toBn(today.getDate())}/${toBn(today.getMonth() + 1)}`;

  return (
    <section className="py-12">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <h2 className="section-heading mb-2">📜 আজকের দিনে কী ঘটেছিল</h2>
        <p className="text-muted-foreground text-sm font-bangla mb-6">{dateStr} তারিখে যা ঘটেছিল</p>

        <div className="space-y-3">
          {events.map((event, i) => (
            <div
              key={i}
              className="glass-card-hover p-5 flex items-start gap-4"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-display text-2xl font-bold text-primary glow-text-primary min-w-[80px]">
                {toBn(event.year)}
              </span>
              <p className="text-sm font-bangla text-foreground flex-1">{event.text}</p>
              <span
                className={`text-[10px] px-2.5 py-1 rounded-full font-bangla whitespace-nowrap ${
                  event.tag === 'বাংলাদেশ'
                    ? 'bg-secondary/10 text-secondary border border-secondary/20'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {event.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoricalEvents;
