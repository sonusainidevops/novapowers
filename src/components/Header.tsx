import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Franchise', href: '#franchise' },
  { label: 'Branches', href: '#branches' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
              <div className="bg-primary rounded-lg px-4 py-2">
                <span className="text-white font-bold text-xl tracking-tight">NOVA</span>
                <span className="text-yellow-300 text-sm ml-1">CABS</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-slate-700 hover:text-primary hover:bg-slate-100'
                    : 'text-white hover:text-white/80 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+91-123-456-7890</span>
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-6"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`${isScrolled ? 'text-slate-700' : 'text-white'}`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="bg-primary rounded-lg px-4 py-2">
                    <span className="text-white font-bold text-xl">NOVA</span>
                    <span className="text-yellow-300 text-sm ml-1">CABS</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col p-6 gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-primary font-medium transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="mt-auto p-6 border-t">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-2 text-slate-700 mb-4"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91-123-456-7890</span>
                  </a>
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full bg-accent hover:bg-accent/90 text-white rounded-full"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
