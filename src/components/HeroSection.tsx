import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toBn } from '@/lib/banglaDate';
import LiveClock from './LiveClock';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const now = new Date();

  return (
    <section id="hero" className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div
        ref={ref}
        className={`container mx-auto px-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4 glow-text-primary">
          আজ বাংলা কত তারিখ
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bangla font-bold text-foreground mb-3 leading-tight">
          আজ বাংলা কত তারিখ{' '}
          <span className="text-primary glow-text-primary">{toBn(now.getFullYear())}</span>{' '}
          খ্রিষ্টাব্দে?
        </h1>
        <p className="text-muted-foreground font-bangla text-lg mb-8">
          আজকের বাংলা তারিখ, ইংরেজি তারিখ এবং হিজরি তারিখ জানুন
        </p>

        <div className="flex items-center justify-center gap-3 mb-10">
          {['📘 ফেসবুক', '💬 হোয়াটসঅ্যাপ', '🐦 এক্স', '🔗 লিংক'].map((label) => (
            <button
              key={label}
              className="px-4 py-2 text-xs font-bangla glass-card hover:border-primary/30 transition-all cursor-pointer hover-scale"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
          <LiveClock label="বাংলাদেশ সময়" flag="🇧🇩" utcOffset={6} utcLabel="UTC+6:00" />
          <LiveClock label="ভারত সময়" flag="🇮🇳" utcOffset={5.5} utcLabel="UTC+5:30" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {[
            { label: 'সূর্যোদয়', time: '৬:২১ AM', loc: '🇧🇩 ঢাকা, বাংলাদেশ' },
            { label: 'সূর্যাস্ত', time: '৬:০৩ PM', loc: '🇧🇩 ঢাকা, বাংলাদেশ' },
            { label: 'সূর্যোদয়', time: '৫:৫৮ AM', loc: '🇮🇳 কলকাতা, ভারত' },
            { label: 'সূর্যাস্ত', time: '৫:৪২ PM', loc: '🇮🇳 কলকাতা, ভারত' },
          ].map((item, i) => (
            <div key={i} className="glass-card-hover p-4 text-center">
              <p className="text-xs text-muted-foreground font-bangla mb-1">{item.label}</p>
              <p className="text-xl font-display font-bold text-accent glow-text-accent">
                {item.time}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{item.loc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
