import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Franchise', href: '/franchise' },
  { label: 'Branches', href: '/branches' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Career', href: '/career' },
  { label: 'Contact', href: '/contact' },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="bg-black rounded-lg px-4 py-2">
              <span className="text-white font-bold text-xl tracking-tight">NOVA</span>
              <span className="text-yellow-400 text-sm ml-1">POWERS</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-black hover:text-yellow-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-sm font-medium text-black"
            >
              <Phone className="w-4 h-4" />
              <span>+91-123-456-7890</span>
            </a>
            <Button
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-6"
            >
              <a href="/contact">Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-black">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="bg-black rounded-lg px-4 py-2">
                    <span className="text-white font-bold text-xl">NOVA</span>
                    <span className="text-yellow-400 text-sm ml-1">POWERS</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5 text-black" />
                  </Button>
                </div>
                <nav className="flex flex-col p-6 gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-left px-4 py-3 rounded-lg text-black hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto p-6 border-t border-gray-100">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-2 text-black mb-4"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91-123-456-7890</span>
                  </a>
                  <Button
                    asChild
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full"
                  >
                    <a href="/contact">Book Now</a>
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
