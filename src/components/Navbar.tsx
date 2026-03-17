import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { label: 'হোম', href: '#hero' },
  { label: 'ক্যালেন্ডার', href: '#calendar' },
  { label: 'নামাজ', href: '#prayer' },
  { label: 'ছুটি', href: '#holidays' },
  { label: 'মাস', href: '#months' },
  { label: 'ঋতু', href: '#seasons' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border rounded-none">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl">🇧🇩</span>
          <span className="font-display text-lg font-bold text-primary glow-text-primary tracking-wider">
            BANGLA DATE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-bangla text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <span className="px-3 py-1.5 text-xs font-display bg-primary/10 text-primary border border-primary/20 rounded-full">
            🇧🇩 বাংলা
          </span>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-card border-t border-border rounded-none animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 text-sm font-bangla text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
