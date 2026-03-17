import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getBanglaDate, toBn } from '@/lib/banglaDate';

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const bd = getBanglaDate();

  const faqs = [
    {
      q: 'বাংলা বছরের প্রথম মাস কোনটি?',
      a: 'বাংলা বছরের প্রথম মাস হলো বৈশাখ, যা ১৪ এপ্রিল থেকে শুরু হয়।',
    },
    { q: 'এখন বাংলা সন কত?', a: `এখন বাংলা সন ${toBn(bd.year)} চলছে।` },
    {
      q: 'বাংলা মাসগুলোর নাম কী কী?',
      a: 'বৈশাখ, জ্যৈষ্ঠ, আষাঢ়, শ্রাবণ, ভাদ্র, আশ্বিন, কার্তিক, অগ্রহায়ণ, পৌষ, মাঘ, ফাল্গুন, চৈত্র।',
    },
    {
      q: 'বর্তমান বাংলা মাস কি?',
      a: `বর্তমান বাংলা মাস হলো ${bd.monthName}, বাংলা বছরের ${toBn(bd.month + 1)}তম মাস।`,
    },
    {
      q: `${toBn(new Date().getFullYear())} সালের বাংলা সন কত?`,
      a: `${toBn(new Date().getFullYear())} সালে বাংলা সন ${toBn(bd.year)}-${toBn(bd.year + 1)} (পহেলা বৈশাখের আগে ${toBn(bd.year)}, পরে ${toBn(bd.year + 1)})।`,
    },
    {
      q: 'বাংলা ক্যালেন্ডারে কত দিনে ১ বছর?',
      a: 'বাংলা বছরে সাধারণত ৩৬৫ দিন থাকে। অধিবর্ষে ৩৬৬ দিন।',
    },
    { q: 'বাংলা নতুন বছরকে কি নামে ডাকা হয়?', a: 'বাংলা নববর্ষ বা পহেলা বৈশাখ নামে পরিচিত।' },
    {
      q: 'বাংলা বছরে কয়টি ঋতু?',
      a: 'বাংলা বছরে ৬টি ঋতু: গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত ও বসন্ত।',
    },
    { q: 'এখন বাংলা বছরের কোন ঋতু চলমান?', a: `বর্তমানে ${bd.season} ঋতু চলছে।` },
    { q: 'পহেলা বৈশাখ কবে পালিত হয়?', a: 'প্রতি বছর ১৪ এপ্রিল পহেলা বৈশাখ পালিত হয়।' },
    {
      q: 'বাংলা ক্যালেন্ডার কে প্রবর্তন করেন?',
      a: 'মুঘল সম্রাট আকবর ১৫৫৬ সালে বাংলা ক্যালেন্ডার প্রবর্তন করেন। পরে ১৯৮৭ সালে বাংলা একাডেমি এটি সংস্কার করে।',
    },
    { q: 'বাংলা ঋতুগুলোর নাম কী?', a: 'গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত ও বসন্ত।' },
    {
      q: 'বাংলা মাসে কত দিন?',
      a: 'প্রথম ৫টি মাসে (বৈশাখ থেকে ভাদ্র) ৩১ দিন এবং বাকি ৭টি মাসে ৩০ দিন থাকে।',
    },
  ];

  return (
    <section id="faq" className="py-12">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <h2 className="section-heading mb-2 text-center">❓ প্রায়শই জিজ্ঞাসিত প্রশ্ন</h2>
        <p className="text-center text-muted-foreground text-sm font-bangla mb-8">
          বাংলা ক্যালেন্ডার সম্পর্কে সাধারণ প্রশ্নাবলী
        </p>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card border-border px-4">
              <AccordionTrigger className="text-sm font-bangla text-foreground hover:text-primary hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground font-bangla pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
