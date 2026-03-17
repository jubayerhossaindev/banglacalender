import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DateCards from '@/components/DateCards';
import TodaySummary from '@/components/TodaySummary';
import QuickLinks from '@/components/QuickLinks';
import PrayerTimes from '@/components/PrayerTimes';
import MonthlyCalendar from '@/components/MonthlyCalendar';
import Holidays from '@/components/Holidays';
import HistoricalEvents from '@/components/HistoricalEvents';
import BanglaMonths from '@/components/BanglaMonths';
import BanglaSeasons from '@/components/BanglaSeasons';
import AboutCalendar from '@/components/AboutCalendar';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DateCards />
      <TodaySummary />
      <QuickLinks />
      <PrayerTimes />
      <MonthlyCalendar />
      <Holidays />
      <HistoricalEvents />
      <BanglaMonths />
      <BanglaSeasons />
      <AboutCalendar />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
