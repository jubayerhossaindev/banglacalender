import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutCalendar = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto">
          <h2 className="section-heading mb-4">📖 বাংলা ক্যালেন্ডার সম্পর্কে</h2>
          <div className="space-y-4 text-sm text-muted-foreground font-bangla leading-relaxed">
            <p>
              বাংলা ক্যালেন্ডার, যা বাংলা পঞ্জিকা নামে পরিচিত, বাংলাদেশ এবং ভারতের পশ্চিমবঙ্গ,
              ত্রিপুরা ও আসাম রাজ্যে ব্যবহৃত একটি সৌর বর্ষপঞ্জি। মাসের দৈর্ঘ্য মানসম্মত করতে এবং
              গ্রেগরিয়ান ক্যালেন্ডারের সাথে আরও সুনির্দিষ্টভাবে সামঞ্জস্যপূর্ণ করতে ১৯৮৭ সালে বাংলা
              একাডেমি ক্যালেন্ডারটি সংস্কার করে।
            </p>
            <p>
              বাংলা বছরে ১২টি মাস রয়েছে যা ৬টি ঋতুতে বিভক্ত, প্রতিটি ঋতু দুটি মাস নিয়ে গঠিত:
              গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত এবং বসন্ত। প্রথম পাঁচ মাসে প্রতিটিতে ৩১ দিন এবং বাকি
              সাত মাসে প্রতিটিতে ৩০ দিন থাকে।
            </p>
            <p>
              বাংলা নববর্ষ, যা পহেলা বৈশাখ নামে পরিচিত, প্রতি বছর ১৪ এপ্রিল পালিত হয়। বাংলা
              ক্যালেন্ডার গভীর সাংস্কৃতিক তাৎপর্য বহন করে এবং বাংলা জনগোষ্ঠীর উৎসব, কৃষি ও দৈনন্দিন
              জীবনের অবিচ্ছেদ্য অংশ।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCalendar;
