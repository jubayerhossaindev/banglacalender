import { useState } from 'react';
import {
  getBanglaDate,
  getHijriDate,
  getBanglaDayName,
  getBanglaOrdinal,
  getBanglaEnglishMonthName,
  toBn,
} from '@/lib/banglaDate';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TodaySummary = () => {
  const { ref, isVisible } = useScrollAnimation();
  const now = new Date();
  const bd = getBanglaDate(now);
  const hd = getHijriDate(now);
  const bnDay = getBanglaDayName(now);
  const day = now.getDate();
  const bnEnMonth = getBanglaEnglishMonthName(now);
  const year = now.getFullYear();
  const [copied, setCopied] = useState<string | null>(null);

  const unicodeText = `আজ/রোজ ${bnDay}, ${getBanglaOrdinal(bd.day)} ${bd.monthName} ${toBn(bd.year)} বঙ্গাব্দ, ${getBanglaOrdinal(day)} ${bnEnMonth} ${toBn(year)} খ্রিষ্টাব্দ, ${getBanglaOrdinal(hd.day)} ${hd.monthNameBn} ${toBn(hd.year)} হিজরি`;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-8">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="glass-card p-6 md:p-8">
          <h2 className="section-heading mb-4 flex items-center gap-2">
            <span className="text-primary">ℹ️</span> আজকের সারসংক্ষেপ
          </h2>
          <p className="text-muted-foreground font-bangla leading-relaxed">
            আজ {bnDay}, {getBanglaOrdinal(bd.day)} {bd.monthName} {toBn(bd.year)} বঙ্গাব্দ, যা বাংলা
            ক্যালেন্ডারের {bd.season} ঋতুতে পড়ে। সংশ্লিষ্ট ইংরেজি তারিখ {getBanglaOrdinal(day)}{' '}
            {bnEnMonth} {toBn(year)} খ্রিষ্টাব্দ এবং হিজরি তারিখ {getBanglaOrdinal(hd.day)}{' '}
            {hd.monthNameBn} {toBn(hd.year)} হিজরি। বর্তমান বাংলা মাস হলো {bd.monthName}, বাংলা
            বছরের {toBn(bd.month + 1)}তম মাস।
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-4">
              <p className="text-xs text-muted-foreground font-bangla mb-2">
                ইউনিকোড তারিখ কপি করুন
              </p>
              <p className="text-sm text-foreground font-bangla">{unicodeText}</p>
              <button
                onClick={() => handleCopy(unicodeText, 'unicode')}
                className="mt-3 px-4 py-1.5 text-xs font-bangla bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors"
              >
                {copied === 'unicode' ? '✅ কপি হয়েছে!' : '📋 ইউনিকোড কপি করুন'}
              </button>
            </div>
            <div className="glass-card p-4">
              <p className="text-xs text-muted-foreground font-bangla mb-2">তারিখের ছবি</p>
              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <p className="text-lg font-bangla font-bold text-primary">
                  {getBanglaOrdinal(bd.day)} {bd.monthName}
                </p>
                <p className="text-sm text-muted-foreground">{toBn(bd.year)} বঙ্গাব্দ</p>
              </div>
              <button className="mt-3 px-4 py-1.5 text-xs font-bangla bg-secondary/10 text-secondary border border-secondary/20 rounded-lg hover:bg-secondary/20 transition-colors">
                📥 তারিখের ছবি ডাউনলোড
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaySummary;
