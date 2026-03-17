import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const links = [
  { icon: '📅', title: 'বাংলা ক্যালেন্ডার', desc: 'সম্পূর্ণ বছরের বাংলা ক্যালেন্ডার' },
  { icon: '🌐', title: 'ইংরেজি ক্যালেন্ডার', desc: 'বাংলা তারিখ সহ ইংরেজি ক্যালেন্ডার' },
  { icon: '🕌', title: 'নামাজের সময়সূচি', desc: 'দৈনিক নামাজের সময়' },
  { icon: '🔄', title: 'তারিখ রূপান্তরক', desc: 'বাংলা ↔ ইংরেজি তারিখ রূপান্তর' },
  { icon: '🎉', title: 'ছুটির দিন', desc: 'বাংলাদেশের সরকারি ছুটি' },
  { icon: '📥', title: 'ক্যালেন্ডার ডাউনলোড', desc: 'পিডিএফ ও ছবি ডাউনলোড' },
];

const QuickLinks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-8">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <h2 className="section-heading mb-6 text-center">আরও দেখুন</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {links.map((link, i) => (
            <div
              key={i}
              className="glass-card-hover p-4 text-center cursor-pointer hover-scale"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-2xl block mb-2">{link.icon}</span>
              <p className="text-sm font-bangla font-semibold text-foreground mb-1">{link.title}</p>
              <p className="text-xs text-muted-foreground font-bangla">{link.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
