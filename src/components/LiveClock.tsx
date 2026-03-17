import { useEffect, useState } from 'react';

const toBanglaNum = (n: number | string) => String(n).replace(/[0-9]/g, (d) => '০১২৩৪৫৬৭৮৯'[+d]);

const pad = (n: number) => String(n).padStart(2, '0');

interface Props {
  label: string;
  flag: string;
  utcOffset: number;
  utcLabel: string;
}

const LiveClock = ({ label, flag, utcOffset, utcLabel }: Props) => {
  const [time, setTime] = useState('');
  const [period, setPeriod] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const local = new Date(utc + utcOffset * 3600000);
      let h = local.getHours();
      const m = local.getMinutes();
      const s = local.getSeconds();
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      setTime(toBanglaNum(`${pad(h)}:${pad(m)}:${pad(s)}`));
      setPeriod(ampm);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [utcOffset]);

  return (
    <div className="glass-card p-6 text-center gradient-border">
      <p className="text-sm text-muted-foreground font-bangla mb-2">
        {flag} {label}
      </p>
      <p className="font-display text-3xl md:text-4xl font-bold text-secondary glow-text-secondary tracking-wider">
        {time} <span className="text-lg text-secondary/70">{period}</span>
      </p>
      <p className="text-xs text-muted-foreground mt-1 font-mono">{utcLabel}</p>
    </div>
  );
};

export default LiveClock;
